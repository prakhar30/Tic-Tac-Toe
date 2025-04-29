'use client'

import React, { createContext, useContext, useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import WebSocketService from '../services/websocket'

interface GameState {
  board: string[]
  players: { [key: string]: string }
  turn: string
  winner: string | null
  gameOver: boolean
  gameReady: boolean
}

interface GameContextType {
  gameState: GameState
  isConnected: boolean
  createGame: (gameId: string) => void
  joinGame: (gameId: string) => void
  makeMove: (position: number) => void
  handleCellClick: (position: number) => void
  resetGame: () => void
}

const initialGameState: GameState = {
  board: Array(9).fill(''),
  players: {},
  turn: '',
  winner: null,
  gameOver: false,
  gameReady: false
}

const GameContext = createContext<GameContextType | undefined>(undefined)

export function GameProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [ws, setWs] = useState<WebSocketService | null>(null)
  const [gameState, setGameState] = useState<GameState>(initialGameState)
  const [isConnected, setIsConnected] = useState(false)
  const currentGameId = useRef<string | null>(null)

  // Debug gameState changes
  useEffect(() => {
    console.log('GameState updated:', gameState)
  }, [gameState])

  // Handle WebSocket connection and reconnection
  useEffect(() => {
    console.log('GameProvider useEffect running - setting up WebSocket')
    let websocket: WebSocketService | null = null

    const connectWebSocket = async () => {
      const token = localStorage.getItem('accessToken')
      console.log('Access token available:', !!token)
      if (!token) {
        console.error('No access token found, redirecting to home')
        router.replace('/')
        return
      }

      try {
        console.log('Creating WebSocketService with token')
        websocket = new WebSocketService(token)
        console.log('Connecting to WebSocket...')
        await websocket.connect()
        console.log('WebSocket connected successfully')
        
        websocket.onMessage((message) => {
          console.log('Received message:', JSON.stringify(message, null, 2))
          
          if (message.type === 'game_state') {
            console.log('Raw game state received:', JSON.stringify(message.data, null, 2))
            
            // Type guard for GameState
            const isValidGameState = (data: any): data is GameState => {
              return (
                data &&
                Array.isArray(data.board) &&
                typeof data.gameReady === 'boolean' &&
                typeof data.gameOver === 'boolean' &&
                typeof data.players === 'object'
              )
            }

            if (!isValidGameState(message.data)) {
              console.error('Invalid game state received:', message.data)
              return
            }

            // Store gameId if available in the message
            if (message.gameId && message.gameId !== 'current') {
              currentGameId.current = message.gameId
              console.log('Updated current gameId:', currentGameId.current)
            }

            // Use functional state update to ensure we're working with the latest state
            setGameState(prevState => {
              const newState = { ...message.data }
              console.log('Updating state from:', prevState)
              console.log('Updating state to:', newState)
              return newState
            })
          } else if (message.error?.code === 'AUTH_ERROR') {
            console.error('Authentication error:', message.error)
            localStorage.removeItem('accessToken')
            router.replace('/')
          } else {
            console.log('Received other message type:', message.type)
          }
        })

        setIsConnected(true)
        setWs(websocket)
      } catch (error) {
        console.error('WebSocket connection failed:', error)
        setIsConnected(false)
      }
    }

    connectWebSocket()

    // Cleanup function
    return () => {
      console.log('Cleaning up WebSocket connection')
      if (websocket) {
        websocket.disconnect()
      }
    }
  }, [router]) // Only re-run if router changes

  // Debug current state
  useEffect(() => {
    console.log('Current connection state:', isConnected ? 'Connected' : 'Disconnected')
  }, [isConnected])

  const createGame = (gameId: string) => {
    if (!ws || !isConnected) {
      console.error('WebSocket is not connected')
      return
    }

    // Store the gameId
    currentGameId.current = gameId
    
    console.log('Sending create_game message with gameId:', gameId)
    ws.send({
      type: 'create_game',
      gameId,
    })
  }

  const joinGame = (gameId: string) => {
    if (!ws || !isConnected) {
      console.error('WebSocket is not connected')
      return
    }

    // Store the gameId
    currentGameId.current = gameId
    
    console.log('Sending join_game message with gameId:', gameId)
    ws.send({
      type: 'join_game',
      gameId,
    })
  }

  const makeMove = (position: number) => {
    if (!ws || !isConnected) {
      console.error('WebSocket is not connected')
      return
    }

    if (!currentGameId.current) {
      console.error('No current gameId available')
      return
    }

    console.log('Sending make_move message with position:', position)
    ws.send({
      type: 'make_move',
      gameId: currentGameId.current,
      data: { position },
    })
  }

  const handleCellClick = (position: number) => {
    console.log('Cell clicked at position:', position, 'Current board:', gameState.board)
    if (gameState.board[position] === '' && !gameState.gameOver) {
      makeMove(position)
    } else {
      console.log('Cell already taken or game over. Cannot make move.')
    }
  }

  const resetGame = () => {
    setGameState(initialGameState)
    currentGameId.current = null
    console.log('Game state reset')
  }

  return (
    <GameContext.Provider 
      value={{ 
        gameState, 
        isConnected, 
        createGame, 
        joinGame, 
        makeMove,
        handleCellClick,
        resetGame
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export const useGame = () => {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error('useGame must be used within a GameProvider')
  }
  return context
} 
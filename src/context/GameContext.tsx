'use client'

import { createContext, useContext, ReactNode, useState } from 'react'
import { GameState, GameContextType, Player, Board } from '@/types/game'

const initialGameState: GameState = {
  board: Array(9).fill(null),
  currentPlayer: 'X',
  winner: null,
  scores: {
    X: 0,
    O: 0
  }
}

const GameContext = createContext<GameContextType | undefined>(undefined)

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [gameState, setGameState] = useState<GameState>(initialGameState)

  const checkWinner = (board: Board): Player | 'DRAW' | null => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ]

    for (const combo of winningCombos) {
      const [a, b, c] = combo
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a] as Player
      }
    }

    return board.every(cell => cell !== null) ? 'DRAW' : null
  }

  const handleCellClick = (index: number) => {
    if (gameState.board[index] || gameState.winner) return

    const newBoard = [...gameState.board]
    newBoard[index] = gameState.currentPlayer

    const winner = checkWinner(newBoard)
    const newScores = { ...gameState.scores }

    if (winner && winner !== 'DRAW') {
      newScores[winner]++
    }

    setGameState({
      board: newBoard,
      currentPlayer: gameState.currentPlayer === 'X' ? 'O' : 'X',
      winner,
      scores: newScores
    })
  }

  const handleResetGame = () => {
    setGameState({
      ...initialGameState,
      scores: gameState.scores
    })
  }

  const handleNewGame = () => {
    setGameState(initialGameState)
  }

  return (
    <GameContext.Provider 
      value={{ 
        gameState, 
        handleCellClick, 
        handleResetGame, 
        handleNewGame 
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export const useGame = () => {
  const context = useContext(GameContext)
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider')
  }
  return context
} 
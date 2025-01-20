'use client'

import React from 'react'
import Board from '@/components/Board'
import { useGame } from '@/context/GameContext'

const GameStatus: React.FC = () => {
  const { gameState } = useGame()
  const { winner, currentPlayer, scores } = gameState

  return (
    <div className="text-center mb-8">
      {winner ? (
        <h2 className="text-2xl font-bold mb-4">
          {winner === 'DRAW' ? "It's a Draw!" : `Player ${winner} Wins!`}
        </h2>
      ) : (
        <h2 className="text-2xl font-bold mb-4">
          Player {currentPlayer}'s Turn
        </h2>
      )}
      <div className="flex justify-center gap-8">
        <p className="text-blue-500">Player X: {scores.X}</p>
        <p className="text-red-500">Player O: {scores.O}</p>
      </div>
    </div>
  )
}

const Home: React.FC = () => {
  const { handleNewGame, handleResetGame } = useGame()

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Tic Tac Toe</h1>
      <GameStatus />
      <Board />
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={handleResetGame}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Reset Game
        </button>
        <button
          onClick={handleNewGame}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          New Game
        </button>
      </div>
    </main>
  )
}

export default Home 
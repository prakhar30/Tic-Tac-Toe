'use client'

import React from 'react'
import { useGame } from '@/context/GameContext'
import Cell from './Cell'

const Board: React.FC = () => {
  const { gameState, handleCellClick } = useGame()
  const { board, winner } = gameState

  const getWinningCells = () => {
    if (!winner || winner === 'DRAW') return []

    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ]

    return winningCombos.find(combo => 
      combo.every(index => board[index] === winner)
    ) || []
  }

  const winningCells = getWinningCells()

  return (
    <div 
      role="grid"
      aria-label="Tic Tac Toe Board"
      className="grid grid-cols-3 gap-2 max-w-[400px] mx-auto"
    >
      {board.map((cell, index) => (
        <Cell
          key={index}
          value={cell}
          index={index}
          onCellClick={handleCellClick}
          isWinningCell={winningCells.includes(index)}
        />
      ))}
    </div>
  )
}

export default Board 
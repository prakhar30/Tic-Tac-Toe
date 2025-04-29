'use client'

import React from 'react'
import { useGame } from '@/context/GameContext'

interface BoardProps {
  onGameEnd: (winner: string | null) => void;
}

const Board: React.FC<BoardProps> = ({ onGameEnd }) => {
  const { gameState, handleCellClick, isConnected } = useGame()
  const { board, winner, gameOver, turn } = gameState

  if (!isConnected) {
    return (
      <div className="w-full text-center p-4 text-xl">
        Connecting to game server...
      </div>
    );
  }

  const renderSquare = (index: number) => {
    const value = board[index];
    const isWinningSquare = winner && value === winner;

    return (
      <button
        key={index}
        onClick={() => handleCellClick(index)}
        className={`w-24 h-24 border border-gray-300 text-5xl font-bold flex items-center justify-center
          ${value === 'X' ? 'text-blue-500' : 'text-red-500'}
          ${isWinningSquare ? 'bg-green-100' : 'bg-white'}`}
        disabled={value !== '' || gameOver}
        aria-label={`Cell ${index + 1}`}
      >
        {value}
      </button>
    );
  };

  // Notify parent component about game end
  React.useEffect(() => {
    if (winner || gameOver) {
      onGameEnd(winner);
    }
  }, [winner, gameOver, onGameEnd]);

  return (
    <div 
      className="grid grid-cols-3 gap-1"
      role="grid"
      aria-label="Tic Tac Toe Board"
    >
      {Array(9).fill(null).map((_, index) => renderSquare(index))}
    </div>
  );
}

export default Board 
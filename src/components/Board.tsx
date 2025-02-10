'use client'

import React, { useState, useEffect } from 'react'
import { useGame } from '@/context/GameContext'

interface BoardProps {
  onGameEnd: (winner: string | null) => void;
}

const Board: React.FC<BoardProps> = ({ onGameEnd }) => {
  const { gameState, handleCellClick } = useGame()
  const { board, winner } = gameState
  const [squares, setSquares] = useState<Array<string | null>>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (squares: Array<string | null>): string | null => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner || squares.every(square => square !== null)) {
      onGameEnd(winner);
    }
  }, [squares, onGameEnd]);

  const handleSquareClick = (index: number) => {
    if (squares[index] || calculateWinner(squares)) return;

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
    handleCellClick(index);
  };

  const renderSquare = (index: number) => {
    const winner = calculateWinner(squares);
    const isWinningSquare = winner && squares[index] === winner;

    return (
      <button
        key={index}
        onClick={() => handleSquareClick(index)}
        className={`w-24 h-24 border border-gray-300 text-5xl font-bold flex items-center justify-center
          ${squares[index] === 'X' ? 'text-blue-500' : 'text-red-500'}
          ${isWinningSquare ? 'bg-green-100' : 'bg-white'}`}
        disabled={!!squares[index] || !!calculateWinner(squares)}
        aria-label={`Cell ${index + 1}`}
      >
        {squares[index]}
      </button>
    );
  };

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
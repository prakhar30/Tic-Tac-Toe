import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Board from './Board';
import { clearUserAuth } from '@/utils/auth';

const GameLobby: React.FC = () => {
  const router = useRouter();
  const [scores, setScores] = useState({ X: 0, O: 0 });
  const [winner, setWinner] = useState<string | null>(null);

  const handleGameEnd = (winner: string | null) => {
    if (winner) {
      setWinner(winner);
      setScores(prev => ({
        ...prev,
        [winner]: prev[winner as keyof typeof prev] + 1
      }));
    }
  };

  const handleNewGame = () => {
    setWinner(null);
  };

  const handleResetGame = () => {
    setWinner(null);
    setScores({ X: 0, O: 0 });
  };

  const handleLogout = () => {
    // Clear authentication data
    clearUserAuth();
    // Navigate back to login page
    router.replace('/');
  };

  return (
    <>
      <button
        onClick={handleLogout}
        className="fixed top-6 right-6 px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        aria-label="Logout"
      >
        Logout
      </button>

      <div className="flex flex-col items-center gap-6">
        <h1 className="text-6xl font-bold mb-8">Tic Tac Toe</h1>
        
        {winner && (
          <h2 className="text-4xl font-bold mb-4">Player {winner} Wins!</h2>
        )}

        <div className="flex gap-8 text-2xl mb-8">
          <span className="text-blue-500">Player X: {scores.X}</span>
          <span className="text-red-500">Player O: {scores.O}</span>
        </div>

        <Board onGameEnd={handleGameEnd} key={winner ? 'winner' : 'playing'} />

        <div className="flex gap-4 mt-8">
          <button
            onClick={handleResetGame}
            className="px-8 py-4 text-xl bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Reset Game
          </button>
          <button
            onClick={handleNewGame}
            className="px-8 py-4 text-xl bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            New Game
          </button>
        </div>
      </div>
    </>
  );
};

export default GameLobby; 
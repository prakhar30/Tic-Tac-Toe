'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useGame } from '@/context/GameContext';

const GameSelection: React.FC = () => {
  const router = useRouter();
  const { createGame, joinGame, isConnected } = useGame();
  const [gameId, setGameId] = useState('');
  const [isJoining, setIsJoining] = useState(false);
  const [error, setError] = useState('');

  if (!isConnected) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4">Connecting to game server...</h2>
        <div className="animate-pulse">Please wait...</div>
      </div>
    );
  }

  const handleCreateGame = () => {
    const newGameId = Math.random().toString(36).substring(2, 8).toUpperCase();
    createGame(newGameId);
    router.push(`/game/${newGameId}`);
  };

  const handleJoinGame = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gameId.trim()) {
      setError('Please enter a game ID');
      return;
    }
    joinGame(gameId.trim().toUpperCase());
    router.push(`/game/${gameId.trim().toUpperCase()}`);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h1 className="text-3xl font-bold text-center mb-8">Tic Tac Toe</h1>
      
      {!isJoining ? (
        <div className="space-y-6">
          <button
            onClick={handleCreateGame}
            className="w-full bg-blue-600 text-white p-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Create New Game
          </button>
          
          <div className="text-center">
            <span className="text-gray-500">or</span>
          </div>
          
          <button
            onClick={() => setIsJoining(true)}
            className="w-full bg-green-600 text-white p-4 rounded-lg text-xl font-semibold hover:bg-green-700 transition-colors"
          >
            Join Existing Game
          </button>
        </div>
      ) : (
        <form onSubmit={handleJoinGame} className="space-y-4">
          <div>
            <label htmlFor="gameId" className="block text-sm font-medium text-gray-700 mb-1">
              Enter Game ID
            </label>
            <input
              type="text"
              id="gameId"
              value={gameId}
              onChange={(e) => {
                setError('');
                setGameId(e.target.value);
              }}
              placeholder="e.g., ABC123"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              maxLength={6}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => {
                setIsJoining(false);
                setGameId('');
                setError('');
              }}
              className="flex-1 bg-gray-500 text-white p-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              className="flex-1 bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Join Game
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default GameSelection; 
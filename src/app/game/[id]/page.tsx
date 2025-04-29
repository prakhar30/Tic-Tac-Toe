'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useGame } from '@/context/GameContext';
import GameLobby from '@/components/GameLobby';
import UserDisplay from '@/components/UserDisplay';

interface GamePageProps {
  params: {
    id: string;
  };
}

export default function GamePage({ params }: GamePageProps) {
  const router = useRouter();
  const { gameState, isConnected } = useGame();
  const { id: gameId } = params;

  // Debug logging
  useEffect(() => {
    console.log('Game state updated:', {
      isConnected,
      gameReady: gameState.gameReady,
      players: gameState.players,
      board: gameState.board
    });
  }, [gameState, isConnected]);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      router.replace('/');
    }
  }, [router]);

  if (!isConnected) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-blue-900 to-purple-900 relative">
        <UserDisplay />
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <h2 className="text-2xl font-bold mb-4">Connecting to game server...</h2>
          <div className="animate-pulse">Please wait...</div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-blue-900 to-purple-900 relative">
      <UserDisplay />
      {!gameState.gameReady ? (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <h2 className="text-2xl font-bold mb-4">Waiting for opponent...</h2>
          <p className="text-gray-600 mb-6">Share this game ID with your friend:</p>
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <span className="text-2xl font-mono font-bold tracking-wider">{gameId}</span>
          </div>
          <button
            onClick={() => router.push('/lobby')}
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            ← Back to Lobby
          </button>
        </div>
      ) : (
        <GameLobby />
      )}
    </main>
  );
} 
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import GameLobby from '../../components/GameLobby';

export default function GamePage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      router.replace('/');
    }
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <GameLobby />
    </main>
  );
}
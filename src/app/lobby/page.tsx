'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import GameSelection from '../../components/GameSelection';
import UserDisplay from '@/components/UserDisplay';

export default function LobbyPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      router.replace('/');
    }
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-blue-900 to-purple-900 relative">
      <UserDisplay />
      <GameSelection />
    </main>
  );
} 
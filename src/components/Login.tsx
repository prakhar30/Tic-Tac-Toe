// src/components/Login.tsx

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import NetworkManager from '../network/NetworkManager';
import { clearUserAuth, storeUserAuth } from '@/utils/auth';

interface LoginProps {
  toggleView: () => void;
}

const Login: React.FC<LoginProps> = ({ toggleView }) => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      clearUserAuth();
      const response = await NetworkManager.login(username, password);
      const token = response.getAccessToken();
      const user = response.getUser();
      
      // Get username from response if available, otherwise use input username
      const usernameToStore = user ? user.getUsername() : username;
      
      // Store authentication data
      storeUserAuth(token, usernameToStore);
      
      router.push('/lobby');
    } catch (error) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
      <h2 className="text-2xl font-bold text-center mb-4">Tic Tac Toe</h2>
      <p className="text-center mb-6">Welcome back!</p>
      {error && (
        <p className="text-red-500 text-sm text-center mb-4">{error}</p>
      )}
      <input
        type="text"
        placeholder="Username"
        className="w-full p-2 mb-4 border rounded"
        aria-label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 mb-4 border rounded"
        aria-label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white p-2 rounded mb-4 hover:bg-blue-700 transition-colors duration-200"
      >
        Login
      </button>
      <p className="text-center">
        <button
          onClick={toggleView}
          className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          Don't have an account? Register
        </button>
      </p>
    </div>
  );
};

export default Login;
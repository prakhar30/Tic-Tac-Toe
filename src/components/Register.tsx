// src/components/Register.tsx

import React from 'react';

interface RegisterProps {
  toggleView: () => void;
}

const Register: React.FC<RegisterProps> = ({ toggleView }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
      <h2 className="text-2xl font-bold text-center mb-4">Tic Tac Toe</h2>
      <p className="text-center mb-6">Create your account</p>
      <input
        type="text"
        placeholder="Username"
        className="w-full p-2 mb-4 border rounded"
        aria-label="Username"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 mb-4 border rounded"
        aria-label="Password"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full p-2 mb-4 border rounded"
        aria-label="Confirm Password"
      />
      <button className="w-full bg-blue-600 text-white p-2 rounded mb-4">
        Register
      </button>
      <p className="text-center">
        <button
          onClick={toggleView}
          className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
        >
          Already have an account? Login
        </button>
      </p>
    </div>
  );
};

export default Register;
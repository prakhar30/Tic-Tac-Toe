// src/components/LandingPage.tsx

import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const LandingPage: React.FC = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleView = () => setIsRegistering(!isRegistering);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 to-purple-900">
      {isRegistering ? (
        <Register toggleView={toggleView} />
      ) : (
        <Login toggleView={toggleView} />
      )}
    </div>
  );
};

export default LandingPage;
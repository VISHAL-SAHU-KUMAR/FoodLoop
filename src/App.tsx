import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import './index.css';

export type UserRole = 'farmer' | 'consumer' | 'restaurant' | 'admin' | null;

function App() {
  const [currentUser, setCurrentUser] = useState<UserRole>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (role: UserRole) => {
    setCurrentUser(role);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {!isLoggedIn ? (
        <LandingPage onLogin={handleLogin} />
      ) : (
        <Dashboard userRole={currentUser} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
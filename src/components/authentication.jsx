
import React, { createContext, useState, useEffect } from 'react';

export const authentication = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = () => {
      const userId = sessionStorage.getItem('user_id'); 
      setIsAuthenticated(!!userId);
    };
    checkAuthStatus();
  }, []);

  const login = (userId) => {
    sessionStorage.setItem('user_id', userId);
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.removeItem('user_id');
    setIsAuthenticated(false);
  };

  return (
    <authentication.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </authentication.Provider>
  );
};

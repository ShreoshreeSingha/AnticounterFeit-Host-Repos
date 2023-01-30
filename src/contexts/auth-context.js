import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({
  isAuth: false,
  login: () => {},
  logout: () => {}
});

export const AuthContextProvider = props => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUserisAuthenticatedInformation = localStorage.getItem('isAuthenticated');

    if (storedUserisAuthenticatedInformation === '1') {
      setIsAuthenticated(true);
    }
  }, []);

  const login = () => {
    localStorage.setItem('isAuthenticated', '1');
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuth: isAuthenticated, login, logout }}
      {...props}
    />
  );
};

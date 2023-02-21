import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({
  isAuth: false,
  login: () => {},
  logout: () => {}
});

export const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //CHECKS IF THE USER LOGGED IN PREVIOUSLY
  useEffect(() => {
    const storedUserisAuthenticatedInformation = localStorage.getItem('isAuthenticated');
    if (storedUserisAuthenticatedInformation === '1') {
      setIsAuthenticated(true);
    }
  }, []);


  //Write your authentication code here
  const login = (email, password) => {
    console.log("EMAIL: "+email)
    console.log("PASSWORD: " +password )
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

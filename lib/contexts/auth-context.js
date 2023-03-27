function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { createContext, useState, useEffect } from "react";
export const AuthContext = /*#__PURE__*/createContext({
  isAuth: false,
  login: () => {},
  logout: () => {},
  userRole: ""
});
export const AuthContextProvider = props => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState("");

  //CHECKS IF THE USER LOGGED IN PREVIOUSLY
  useEffect(() => {
    const storedUserisAuthenticatedInformation = localStorage.getItem("isAuthenticated");
    const storedUserRole = localStorage.getItem("role");
    if (storedUserisAuthenticatedInformation === "1") {
      setIsAuthenticated(true);
      setUserRole(storedUserRole);
    }
  }, []);

  //Write your authentication code here
  const login = (email, password) => {
    console.log("EMAIL: " + email);
    console.log("PASSWORD: " + password);
    if (email === "manufacturer@gmail.com") {
      localStorage.setItem("isAuthenticated", "1");
      localStorage.setItem("role", email);
      setIsAuthenticated(true);
      setUserRole(email);
    } else if (email === "retailer@gmail.com") {
      localStorage.setItem("isAuthenticated", "1");
      localStorage.setItem("role", email);
      setIsAuthenticated(true);
      setUserRole(email);
    } else if (email === "distributor@gmail.com") {
      localStorage.setItem("isAuthenticated", "1");
      localStorage.setItem("role", email);
      setUserRole(email);
      setIsAuthenticated(true);
    } else if (email === "admin@gmail.com") {
      localStorage.setItem("isAuthenticated", "1");
      localStorage.setItem("role", email);
      setUserRole(email);
      setIsAuthenticated(true);
    } else if (email === "storage@gmail.com") {
      localStorage.setItem("isAuthenticated", "1");
      localStorage.setItem("role", email);
      setUserRole(email);
      setIsAuthenticated(true);
    }
    localStorage.setItem("isAuthenticated", "1");
    setIsAuthenticated(true);
  };
  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("role");
    setIsAuthenticated(false);
    setUserRole("");
  };
  return /*#__PURE__*/React.createElement(AuthContext.Provider, _extends({
    value: {
      isAuth: isAuthenticated,
      login,
      logout,
      userRole,
      setUserRole
    }
  }, props));
};
import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [isHovering, setIsHovering] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseOver = () => {
    setIsHovering(true);
    console.log("Inside handleMouseOver");
  };

  const handleMouseOut = () => {
    setIsHovering(false);
    console.log("Inside handleMouseOut");
  };

  const handleClick = (clicked) => {
    setIsClicked({
      ...initialState,
      [clicked]: true,
    });
    console.log("Inside handle Click");
  };

  const handleClickLeave = (clicked) => {
    setIsClicked({
      ...initialState,
      [clicked]: false,
    });
  };

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
    setIsHovering(true);
    console.log("Inside handleMouseEnter");
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setIsMenuOpen(false);
    console.log("Inside handleMouseLeave");
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        handleMouseOver,
        handleMouseOut,
        isHovering,
        isMenuOpen,
        toggleMenu,
        handleMouseEnter,
        handleMouseLeave,
        handleClickLeave,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

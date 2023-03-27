import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

// const menuItemAnimation = {
//   hidden: (i) => ({
//     padding: 0,
//     x: "-100%",
//     transition: {
//       duration: (i + 1) * 0.1,
//     },
//   }),
//   show: (i) => ({
//     x: 0,
//     transition: {
//       duration: (i + 1) * 0.1,
//     },
//   }),
// };

const SidebarMenu = route => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "menu",
    onClick: toggleMenu
  }, /*#__PURE__*/React.createElement("div", {
    className: "menu_item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, route.icon), isOpen && /*#__PURE__*/React.createElement("div", {
    initial: "hidden",
    animate: "show",
    exit: "hidden",
    className: "link_text"
  }, route.name)), isOpen && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FaAngleDown, null))), " ", isMenuOpen && /*#__PURE__*/React.createElement("div", {
    variants: menuAnimation,
    initial: "hidden",
    animate: "show",
    exit: "hidden",
    className: "menu_container"
  }, route.subRoutes.map((subRoute, i) => /*#__PURE__*/React.createElement("div", {
    variants: menuItemAnimation,
    key: i,
    custom: i
  }, /*#__PURE__*/React.createElement(NavLink, {
    to: subRoute.path,
    className: "link"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon"
  }, subRoute.icon), /*#__PURE__*/React.createElement(motion.div, {
    className: "link_text"
  }, subRoute.name))))), " ");
};
export default SidebarMenu;
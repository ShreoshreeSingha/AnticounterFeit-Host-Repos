import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import HomeAdmin from "./pages/admin/HomeAdmin";
import HomeManufacturer from "./pages/manufacturer/HomeManufacturer";
import HomeDistributor from "./pages/distributer/HomeDistributor";
import HomeStorage from "./pages/storage/HomeStorage";
import HomeRetailer from "./pages/retailer/HomeRetailer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { AuthContext } from "./contexts/auth-context";
function App() {
  const {
    isAuth,
    userRole,
    login
  } = useContext(AuthContext);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, !isAuth && /*#__PURE__*/React.createElement(Login, {
    onLogin: login
  })), isAuth && /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement("div", {
    className: "flex relative h-[100%] w-[100%]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-[8%] fixed sidebar bg-sidebar-bg z-50 text-clip"
  }, /*#__PURE__*/React.createElement(Sidebar, null)), /*#__PURE__*/React.createElement("div", {
    className: "bg-main-bg absolute left-[8%] w-[92%]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fixed w-[92%] z-[5]"
  }, /*#__PURE__*/React.createElement(Navbar, null)), /*#__PURE__*/React.createElement("div", {
    className: "z-[1] bg-main-bg absolute top-20 min-h-[90vh] w-full "
  }, /*#__PURE__*/React.createElement("div", null, userRole === "admin@gmail.com" ? /*#__PURE__*/React.createElement(HomeAdmin, null) : "", userRole === "manufacturer@gmail.com" ? /*#__PURE__*/React.createElement(HomeManufacturer, null) : "", userRole === "distributor@gmail.com" ? /*#__PURE__*/React.createElement(HomeDistributor, null) : "", userRole === "storage@gmail.com" ? /*#__PURE__*/React.createElement(HomeStorage, null) : "", userRole === "retailer@gmail.com" ? /*#__PURE__*/React.createElement(HomeRetailer, null) : ""))))));
}
export default App;
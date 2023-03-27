/* eslint-disable quotes */
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import IncomingBatch from "./IncomingBatch";
import OutgoingBatch from "./OutgoingBatch";
import ScanHistory from "./ScanHistory";
import WarehouseActivity from "./WarehouseActivity";
import DashboardStorage from "./DashboardStorage";
import { AuthContext } from "../../contexts/auth-context";
const HomeStorage = () => {
  const {
    isAuth,
    login
  } = useContext(AuthContext);
  return /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(DashboardStorage, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/storageActivity",
    element: /*#__PURE__*/React.createElement(WarehouseActivity, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/storageOutgoingHistory",
    element: /*#__PURE__*/React.createElement(OutgoingBatch, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/storageIncomingHistory",
    element: /*#__PURE__*/React.createElement(IncomingBatch, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/storageScanHistory",
    element: /*#__PURE__*/React.createElement(ScanHistory, null)
  }));
};
export default HomeStorage;
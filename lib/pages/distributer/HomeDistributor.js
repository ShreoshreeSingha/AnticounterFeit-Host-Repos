import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import "../../App.css";
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DistributorScanHistory from "./DistributorScanHistory";
import DistributorOutgoingBatch from "./DistributorOutgoingBatch";
import DistributorIncomingBatch from "./DistributorIncomingBatch";
import DistributorActivity from "./DistributorActivity";
import DashboardDistributor from "./DashboardDistributor";
const HomeDistributor = () => /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
  path: "/",
  element: /*#__PURE__*/React.createElement(DashboardDistributor, null)
}), /*#__PURE__*/React.createElement(Route, {
  path: "/distributorActivity",
  element: /*#__PURE__*/React.createElement(DistributorActivity, null)
}), /*#__PURE__*/React.createElement(Route, {
  path: "/distributorOutgoingHistory",
  element: /*#__PURE__*/React.createElement(DistributorOutgoingBatch, null)
}), /*#__PURE__*/React.createElement(Route, {
  path: "/distributorScanHistory",
  element: /*#__PURE__*/React.createElement(DistributorScanHistory, null)
}), /*#__PURE__*/React.createElement(Route, {
  path: "/distributorIncomingHistory",
  element: /*#__PURE__*/React.createElement(DistributorIncomingBatch, null)
}));
export default HomeDistributor;
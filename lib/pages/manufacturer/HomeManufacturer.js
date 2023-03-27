import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import ManufacturerActivity from "./ManufacturerActivity";
import ManufacturerOutgoingHistory from "./ManufacturerOutgoingHistory";
import ManufacturerScanHistory from "./ManufacturerScanHistory";
import DashboardManufacturer from "./DashboardManufacturer";
import CreateBatch from "../CreateBatch";
import AddProduct from "./AddProduct";
import Popupform from "./Popupform";
const HomeManufacturer = () => /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
  path: "/",
  element: /*#__PURE__*/React.createElement(DashboardManufacturer, null)
}), /*#__PURE__*/React.createElement(Route, {
  path: "/manufacturerActivity",
  element: /*#__PURE__*/React.createElement(ManufacturerActivity, null)
}), /*#__PURE__*/React.createElement(Route, {
  path: "/popupprod",
  element: /*#__PURE__*/React.createElement(Popupform, null)
}), /*#__PURE__*/React.createElement(Route, {
  path: "/manufacturerOutgoingHistory",
  element: /*#__PURE__*/React.createElement(ManufacturerOutgoingHistory, null)
}), /*#__PURE__*/React.createElement(Route, {
  path: "/manufacturerScanHistory",
  element: /*#__PURE__*/React.createElement(ManufacturerScanHistory, null)
}), /*#__PURE__*/React.createElement(Route, {
  path: "/createbatch",
  element: /*#__PURE__*/React.createElement(CreateBatch, null)
}), /*#__PURE__*/React.createElement(Route, {
  path: "/addProduct",
  element: /*#__PURE__*/React.createElement(AddProduct, null)
}));
export default HomeManufacturer;
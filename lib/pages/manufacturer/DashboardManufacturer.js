import React from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ManufacturerOutgoingHistory from "./ManufacturerOutgoingHistory";
import ManufacturerScanHistory from "./ManufacturerScanHistory";
import ManufacturerActivity from "./ManufacturerActivity";
function DashboardManufacturer() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ManufacturerActivity, null));
}
export default DashboardManufacturer;
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminActivity from "../../pages/AdminActivity";
import Dashboard from "../../pages/Dashboard";
import MasterData from "../../pages/MasterData";
import Network from "../../pages/Network";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import ProductMaster from "../../pages/ProductMaster";
import LocationMaster from "../../pages/LocationMaster";
import RouteMasterData from "../../pages/RouteMasterData";
import TransactionMaster from "../../pages/TransactionData";
import Tracker from "../../Screens/Tracker";
import BOD from "../../pages/BOD";
import Demo from "../../components/Demo";
import Login from "../../components/Login/Login";
import CreateBatch from "../../pages/CreateBatch";
import { AuthContext } from "../../contexts/auth-context";
import Registeruser from "../../pages/RegisterUser";
import ProdTracker from "../../Screens/ProdTracker";
import RouteUpdate from "../../pages/RouteUpdate";
import AddRoute from "../../pages/AddRoute";
import UserDetails from "../../pages/UserDetails";
import AddLocation from "../../pages/AddLocation";
import "../../App.css";
import TrackerForm from "../../pages/TrackerForm";
import Upload from "../../Screens/Upload";
import Try from "../../components/trial/try";
import DashboardRetailer from "./DashboardRetailer";
import RetailerActivity from "./RetailerActivity";
import RetailerIncomingBatch from "./RetailerIncomingBatch";
import RetailerScanHistory from "./RetailerScanHistory";
const HomeRetailer = () => {
  const {
    isAuth,
    login
  } = useContext(AuthContext);
  return /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(DashboardRetailer, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/retailerActivity",
    element: /*#__PURE__*/React.createElement(RetailerActivity, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/retailerIncomingBatch",
    element: /*#__PURE__*/React.createElement(RetailerIncomingBatch, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/retailerScanHistory",
    element: /*#__PURE__*/React.createElement(RetailerScanHistory, null)
  }));
};
export default HomeRetailer;
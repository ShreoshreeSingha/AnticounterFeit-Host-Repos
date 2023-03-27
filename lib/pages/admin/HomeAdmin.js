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
import AddBOD from "../../pages/AddBOD";
const HomeAdmin = () => {
  return /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(Dashboard, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/dashboard",
    element: /*#__PURE__*/React.createElement(Dashboard, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/network",
    element: /*#__PURE__*/React.createElement(Network, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/masterData",
    element: /*#__PURE__*/React.createElement(MasterData, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/adminActivity",
    element: /*#__PURE__*/React.createElement(AdminActivity, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/registerUser",
    element: /*#__PURE__*/React.createElement(Registeruser, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/tracker",
    element: /*#__PURE__*/React.createElement(Tracker, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/prodTracker/:id",
    element: /*#__PURE__*/React.createElement(ProdTracker, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/createBatch",
    element: /*#__PURE__*/React.createElement(CreateBatch, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/addLocation",
    element: /*#__PURE__*/React.createElement(AddLocation, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/addRoute",
    element: /*#__PURE__*/React.createElement(AddRoute, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/addBOD",
    element: /*#__PURE__*/React.createElement(AddBOD, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/masterData/products",
    element: /*#__PURE__*/React.createElement(ProductMaster, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/masterData/locations",
    element: /*#__PURE__*/React.createElement(LocationMaster, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/masterData/routes",
    element: /*#__PURE__*/React.createElement(RouteMasterData, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/transaction",
    element: /*#__PURE__*/React.createElement(TransactionMaster, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/masterData/bod",
    element: /*#__PURE__*/React.createElement(BOD, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/demo",
    element: /*#__PURE__*/React.createElement(Demo, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/adminActivity",
    element: /*#__PURE__*/React.createElement(AdminActivity, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/registerUser",
    element: /*#__PURE__*/React.createElement(Registeruser, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/routeUpdate",
    element: /*#__PURE__*/React.createElement(RouteUpdate, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/userDetails",
    element: /*#__PURE__*/React.createElement(UserDetails, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/trackerForm",
    element: /*#__PURE__*/React.createElement(TrackerForm, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/upload",
    element: /*#__PURE__*/React.createElement(Upload, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/try",
    element: /*#__PURE__*/React.createElement(Try, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/testPage",
    element: /*#__PURE__*/React.createElement(Try, null)
  }));
};
export default HomeAdmin;
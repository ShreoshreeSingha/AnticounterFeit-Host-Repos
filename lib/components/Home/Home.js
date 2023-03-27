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
import WarehouseActivity from "../../pages/storage/WarehouseActivity";
import IncomingBatch from "../../pages/storage/IncomingBatch";
import OutgoingBatch from "../../pages/storage/OutgoingBatch";
import ScanHistory from "../../pages/storage/ScanHistory";
import ManufacturerOutgoingHistory from "../../pages/manufacturer/ManufacturerOutgoingHistory";
import ManufacturerScanHistory from "../../pages/manufacturer/ManufacturerScanHistory";
import RetailerScanHistory from "../../pages/retailer/RetailerScanHistory";
import RetailerIncomingBatch from "../../pages/retailer/RetailerIncomingBatch";
import DistributorIncomingBatch from "../../pages/distributer/DistributorIncomingBatch";
import DistributorOutgoingBatch from "../../pages/distributer/DistributorOutgoingBatch";
import DistributorScanHistory from "../../pages/distributer/DistributorScanHistory";
import DistributorActivity from "../../pages/distributer/DistributorActivity";
import ManufacturerActivity from "../../pages/manufacturer/ManufacturerActivity";
import RetailerActivity from "../../pages/retailer/RetailerActivity";
import "../../App.css";
import TrackerForm from "../../pages/TrackerForm";
import Upload from "../../Screens/Upload";
const Home = () => {
  const {
    isAuth,
    login
  } = useContext(AuthContext);
  return /*#__PURE__*/React.createElement("div", null, !isAuth && /*#__PURE__*/React.createElement(Login, {
    onLogin: login
  }), isAuth && /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement("div", {
    className: "flex relative"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-[8%] fixed sidebar bg-sidebar-bg z-50 text-clip"
  }, /*#__PURE__*/React.createElement(Sidebar, null)), /*#__PURE__*/React.createElement("div", {
    className: "bg-main-bg absolute left-[8%] w-[92%]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fixed w-[92%] z-[5]"
  }, /*#__PURE__*/React.createElement(Navbar, null)), /*#__PURE__*/React.createElement("div", {
    className: "z-[1] bg-main-bg absolute top-14 min-h-[90vh] w-full "
  }, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
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
    path: "/warehouseActivity",
    element: /*#__PURE__*/React.createElement(WarehouseActivity, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/incomingBatch",
    element: /*#__PURE__*/React.createElement(IncomingBatch, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/outgoingBatch",
    element: /*#__PURE__*/React.createElement(OutgoingBatch, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/scanHistory",
    element: /*#__PURE__*/React.createElement(ScanHistory, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/retailerActivity",
    element: /*#__PURE__*/React.createElement(RetailerActivity, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/retailerIncomingBatch",
    element: /*#__PURE__*/React.createElement(RetailerIncomingBatch, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/retailerScanHistory",
    element: /*#__PURE__*/React.createElement(RetailerScanHistory, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/manufacturerActivity",
    element: /*#__PURE__*/React.createElement(ManufacturerActivity, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/manufacturerOutgoingHistory",
    element: /*#__PURE__*/React.createElement(ManufacturerOutgoingHistory, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/manufacturerScanHistory",
    element: /*#__PURE__*/React.createElement(ManufacturerScanHistory, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/distributerActivity",
    element: /*#__PURE__*/React.createElement(DistributerActivity, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/distributerincomingBatch",
    element: /*#__PURE__*/React.createElement(DistributerIncomingBatch, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/distributeroutgoingBatch",
    element: /*#__PURE__*/React.createElement(DistributerOutgoingBatch, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/distributerscanHistory",
    element: /*#__PURE__*/React.createElement(DistributerScanHistory, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/trackerForm",
    element: /*#__PURE__*/React.createElement(TrackerForm, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/upload",
    element: /*#__PURE__*/React.createElement(Upload, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/testPage",
    element: /*#__PURE__*/React.createElement(Try, null)
  })))))));
};
export default Home;
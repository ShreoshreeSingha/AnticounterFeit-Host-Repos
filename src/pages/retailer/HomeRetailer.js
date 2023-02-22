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

const HomeRetailer = () => {
  const { isAuth, login } = useContext(AuthContext);

  return (
        <BrowserRouter>
          <div className="flex relative">
            <div className="w-[8%] fixed sidebar bg-sidebar-bg z-50 text-clip">
              <Sidebar />
            </div>
            <div className="bg-main-bg absolute left-[8%] w-[92%]">
              <div className="fixed w-[92%] z-[5]">
                <Navbar />
              </div>
              <div className="z-[1] bg-main-bg absolute top-14 min-h-[90vh] w-full ">
                <h1>HomeRetailer</h1>
              </div>
            </div>
          </div>
        </BrowserRouter>
      )}

export default HomeRetailer;

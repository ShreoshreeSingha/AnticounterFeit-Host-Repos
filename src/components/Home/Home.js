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
import Login from "../../components/Login/Login"
import Pie from "../../pages/charts/Pie";
import { AuthContext } from "../../contexts/auth-context";

import "../../App.css";


const Home = () => {
  const { isAuth, login } = useContext(AuthContext);

  return (
    <div>
      {!isAuth && <Login onLogin={login} />}
      {isAuth && 
      <BrowserRouter>
        <div className="flex realtive">
          <div className="w-24 fixed sidebar bg-sidebar-bg z-50 text-clip">
            <Sidebar />
          </div>
          <div className="dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-24 w-full ">
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/network" element={<Network />} />
              <Route path="/masterData" element={<MasterData />} />
              <Route path="/adminActivity" element={<AdminActivity />} />
              {/* Components */}
              <Route path="/tracker" element={<Tracker />} />
              {/* Charts */}
              <Route path="/pie" element={<Pie />} />
              {/* Master Data */}
              <Route path="/masterData/products" element={<ProductMaster />} />
              <Route
                path="/masterData/locations"
                element={<LocationMaster />}
              />
              <Route path="/masterData/routes" element={<RouteMasterData />} />
              <Route path="/transaction" element={<TransactionMaster />} />
              <Route path="/masterData/bod" element={<BOD />} />
              <Route path="/demo" element={<Demo />} />
              
            </Routes>
          </div>
        </div>
      </BrowserRouter>
}
    </div>
  );
};

export default Home;

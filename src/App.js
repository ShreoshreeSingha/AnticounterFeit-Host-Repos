import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextProvider, useStateContext } from "./contexts/ContextProvider";
import AdminActivity from "./pages/AdminActivity";
import Dashboard from "./pages/Dashboard";
import MasterData from "./pages/MasterData";
import Network from "./pages/Network";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ProductMaster from "./pages/ProductMaster";
import LocationMaster from "./pages/LocationMaster";
import RouteMaster from "./pages/RouteMaster";
import TransactionMaster from "./pages/TransactionData";
import Tracker from "./Screens/Tracker";
import BOD from "./pages/BOD";
import "./App.css";

const App = (props) => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex realtive">
          <div className="w-24 fixed sidebar bg-sidebar-bg z-50">
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
              {/* Master Data */}
              <Route path="/masterData/products" element={<ProductMaster />} />
              <Route
                path="/masterData/locations"
                element={<LocationMaster />}
              />
              <Route path="/masterData/routes" element={<RouteMaster />} />
              <Route
                path="/masterData/transaction"
                element={<TransactionMaster />}
              />
              <Route path="/masterData/bod" element={<BOD />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

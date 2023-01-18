import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextProvider, useStateContext } from "./contexts/ContextProvider";
import AdminActivity from "./pages/AdminActivity";
import Dashboard from "./pages/Dashboard";
import MasterData from "./pages/MasterData";
import Network from "./pages/Network";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex realtive">
          <div className="w-24 fixed sidebar bg-sidebar-bg">
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
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

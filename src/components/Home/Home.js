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
import Pie from "../../pages/charts/Pie";
import CreateBatch from "../../pages/CreateBatch";
import { AuthContext } from "../../contexts/auth-context";
import Registeruser from "../../pages/RegisterUser";
import ProdTracker from "../../Screens/ProdTracker";

import "../../App.css";
import AddLocation from "../../pages/AddLocation";
import AddRoute from "../../pages/AddRoute";

const Home = () => {
  const { isAuth, login } = useContext(AuthContext);

  return (
    <div>
      {!isAuth && <Login onLogin={login} />}
      {isAuth && (
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
                <Routes>
                  {/* DASHBOARD SECTION STARTS */}
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/network" element={<Network />} />
                  <Route path="/masterData" element={<MasterData />} />
                  <Route path="/adminActivity" element={<AdminActivity />} />
                  <Route path="/registerUser" element={<Registeruser />} />
                  {/* DASHBOARD SECTION ENDS */}

                  {/* COMPONENTS STARTS */}
                  <Route path="/tracker" element={<Tracker />} />
                  <Route path="/prodTracker" element={<ProdTracker />} />
                  {/* COMPONENTS ENDS */}

                  {/* CHARTS STARTS */}
                  <Route path="/pie" element={<Pie />} />
                  {/* CHARTS ENDS */}

                  {/* QUICK LINKS STARTS */}
                  <Route
                    path="/createBatch"
                    element={<CreateBatch />}
                  />
                  <Route path="/addLocation" element={<AddLocation/>} />
                  <Route path="/addRoute" element={<AddRoute/>} />
                  {/* QUICK LINKS ENDS */}

                  {/* MASTER DATA STARTS */}
                  <Route
                    path="/masterData/products"
                    element={<ProductMaster />}
                  />
                  <Route
                    path="/masterData/locations"
                    element={<LocationMaster />}
                  />
                  <Route
                    path="/masterData/routes"
                    element={<RouteMasterData />}
                  />
                  <Route path="/transaction" element={<TransactionMaster />} />
                  <Route path="/masterData/bod" element={<BOD />} />
                  <Route path="/demo" element={<Demo />} />
                  {/* MASTER DATA ENDS */}

                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
};

export default Home;

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

const HomeManufacturer = () => (
  <BrowserRouter>
    <div className="flex relative">
      {/* <div className="w-[8%] fixed sidebar bg-sidebar-bg z-50 text-clip">
        {/* <Sidebar /> 
      </div> */}
      <div className="bg-main-bg absolute  w-[100%]">
        <div className="fixed w-[92%] z-[5]">
          <Navbar />
        </div>
        <div className="z-[1] bg-main-bg absolute top-14 min-h-[90vh] w-full ">
          <Routes>
            <Route path="/" element={<DashboardManufacturer />} />

            <Route
              path="/manufacturerActivity"
              element={<ManufacturerActivity />}
            />

            <Route
              path="/manufacturerOutgoingHistory"
              element={<ManufacturerOutgoingHistory />}
            />
            <Route
              path="/manufacturerScanHistory"
              element={<ManufacturerScanHistory />}
            />
            <Route path="/createbatch" element={<CreateBatch />} />
            <Route path="/addProduct" element={<AddProduct />} />
          </Routes>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default HomeManufacturer;

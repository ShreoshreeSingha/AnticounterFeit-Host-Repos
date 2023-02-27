import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import "../../App.css";
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DistributorScanHistory from "./DistributorScanHistory";
import DistributorOutgoingBatch from "./DistributorOutgoingBatch";
import DistributorIncomingBatch from "./DistributorIncomingBatch";
import DistributorActivity from "./DistributorActivity";
import DashboardDistributor from "./DashboardDistributor";

const HomeDistributor = () => (
  <BrowserRouter>
    <div className="flex relative">
      {/* <div className="w-[8%] fixed sidebar bg-sidebar-bg z-50 text-clip">
        <Sidebar />
      </div> */}
      <div className="bg-main-bg absolute  w-[100%]">
        <div className="fixed w-[92%] z-[5]">
          <Navbar />
        </div>
        <div className="z-[1] bg-main-bg absolute top-14 min-h-[90vh] w-full ">
          <Routes>
            <Route path="/" element={<DashboardDistributor />} />

            <Route
              path="/distributorActivity"
              element={<DistributorActivity />}
            />

            <Route
              path="/distributorOutgoingHistory"
              element={<DistributorOutgoingBatch />}
            />
            <Route
              path="/distributorScanHistory"
              element={<DistributorScanHistory />}
            />
            <Route
              path="/distributorIncomingHistory"
              element={<DistributorIncomingBatch />}
            />
          </Routes>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default HomeDistributor;

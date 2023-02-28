import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import IncomingBatch from "./IncomingBatch";
import OutgoingBatch from "./OutgoingBatch";
import ScanHistory from "./ScanHistory";
import WarehouseActivity from "./WarehouseActivity";
import DashboardStorage from "./DashboardStorage";
import { AuthContext } from "../../contexts/auth-context";

const HomeStorage = () => {
  const { isAuth, login } = useContext(AuthContext);

  return (
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
            {/* <h1>HomeRetailer</h1> */}
            <Routes>
              <Route path="/" element={<DashboardStorage />} />
              <Route path="/storageActivity" element={<WarehouseActivity />} />

              <Route
                path="/storageOutgoingHistory"
                element={<OutgoingBatch />}
              />
              <Route
                path="/storageIncomingHistory"
                element={<IncomingBatch />}
              />
              <Route path="/storageScanHistory" element={<ScanHistory />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default HomeStorage;

import React from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import "../../App.css";

const HomeDistributor = () => {

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
                <h1>HomeDistributor</h1>
              </div>
            </div>
          </div>
        </BrowserRouter>
      )}  

export default HomeDistributor;

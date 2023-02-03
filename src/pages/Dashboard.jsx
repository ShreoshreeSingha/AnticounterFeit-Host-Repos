import React, { useState } from "react";

import Header from "../components/Header";
import Pie from "./charts/Pie";
import { earningData } from "../data/dummy";
import { NavLink } from "react-router-dom";
import { quickLinks } from "../data/link";
import { AiOutlineCloseCircle } from "react-icons/ai";

import CreateBatchForm from "../components/forms/CreateBatchForm";

const quickViews = [
  {
    name: "Total product dispatched by Manufacturer",
    count: "456",
  },
  {
    name: "Total product dispatched by Warehouse",
    count: "645",
  },
  {
    name: "Total product dispatched by Distributor",
    count: "457",
  },
  {
    name: "Total product sold by retailer",
    count: "255",
  },
];

function Popup({ item, onClose }) {
  console.log(item);
  return (
    <div className="bg-white shadow-lg rounded-lg w-1/2 h-2/3 fixed top-[20%] left-[25%] z-[5]">
      <button className="absolute top-0 right-0 p-4 text-3xl" onClick={onClose}>
        <AiOutlineCloseCircle />
      </button>
      {item}
    </div>
  );
}

const Dashboard = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleClick = (item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };
  return (
    <>
      <div>
        <Header category="Page" title="Dashboard" />

        <div class="grid grid-cols-5 grid-rows-6 gap-2 p-2">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white h-36 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-2 rounded-2xl shadow-md "
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-5xl opacity-0.9 rounded-full  p-2 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-1">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-md text-blue  mt-1">{item.title}</p>
            </div>
          ))}

          <div class="bg-white rounded-lg row-span-2">
            <div className="bg-sidebar-bg rounded-t-lg p-4 text-white font-semibold">
              Quick Actions
            </div>

            <div>
            {quickLinks.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleClick(item.element)}
                    className="flex items-center gap-1 p-1.5 rounded-lg text-md font-semibold text-black dark:text-gray-200 hover:text-[#2e86ab] m-2"
                  >
                    {item.icon}
                    <span className="pl-4">{item.name}</span>
                  </button>
                ))}
                {showPopup && (
                  <Popup
                    item={selectedItem}
                    onClose={() => setShowPopup(false)}
                  />
                )}
            </div>
          </div>
          <div class="bg-white rounded-lg col-span-3 row-span-3">6</div>
          <div class="bg-white rounded-lg row-span-3">
            <Pie />
          </div>
          <div class="bg-white rounded-lg row-span-2">
            <h1 className="text-lg font-semibold p-2">Quick View</h1>
            {quickViews.map((item, index) => (
              <div className="flex items-center gap-1 p-1 rounded-lg text-xs text-gray-500 dark:text-gray-200 m-2">
                <p>{item.name}</p>
                <h1 className="text-lg font-bold text-[#0B2853] ml-4">
                  {item.count}
                </h1>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg col-span-4 row-span-3">9</div>
          <div className="bg-white rounded-lg col-span-1 row-span-3">10</div>
          {/* <div class="bg-white rounded-lg row-span-2">9</div> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;

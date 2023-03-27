import React, { useState } from "react";
import Header from "../components/Header";
import { earningData } from "../data/dummy";
import { NavLink } from "react-router-dom";
import { quickLinks } from "../data/link";
import { AiOutlineCloseCircle } from "react-icons/ai";
import CreateBatchForm from "../components/forms/CreateBatchForm";
import { useStateContext } from "../contexts/ContextProvider";
import Map from "../components/Map";
import PieChart from "../components/charts/PieChart";
export const pieChartData = [{
  value: "45%",
  color: "green"
}, {
  value: "25%",
  color: "red"
}, {
  value: "15%",
  color: "blue"
}, {
  value: "10%",
  color: "gray"
}];
const quickViews = [{
  name: "Total product dispatched by Manufacturer",
  count: "456"
}, {
  name: "Total product dispatched by Warehouse",
  count: "645"
}, {
  name: "Total product dispatched by Distributor",
  count: "457"
}, {
  name: "Total product sold by retailer",
  count: "255"
}];
const Dashboard = () => {
  const {
    setTitle,
    setCategory
  } = useStateContext();
  setTitle("/Dashboard");
  setCategory("Page");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    class: "grid grid-cols-5 grid-rows-4 gap-2 p-2 mt-2"
  }, earningData.map(item => /*#__PURE__*/React.createElement("div", {
    key: item.title,
    className: "bg-white h-36 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-40 lg:w-44 p-2 rounded-lg shadow-md "
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      color: item.iconColor,
      backgroundColor: item.iconBg
    },
    className: "text-5xl opacity-0.9 rounded-full  p-2 hover:drop-shadow-sm"
  }, item.icon), /*#__PURE__*/React.createElement("p", {
    className: "mt-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-lg font-semibold"
  }, item.amount), /*#__PURE__*/React.createElement("span", {
    className: `text-sm text-${item.pcColor} ml-2`
  }, item.percentage)), /*#__PURE__*/React.createElement("p", {
    className: "text-md text-blue  mt-1"
  }, item.title))), /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-lg row-span-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-sidebar-bg rounded-t-lg p-4 text-white font-semibold text-xl"
  }, "Quick Action"), quickLinks.map((link, index) => /*#__PURE__*/React.createElement(NavLink, {
    to: link.path,
    key: index,
    className: "flex items-center gap-1 pl-2 pt-1.5 pb-1.5 rounded-lg text-md font-semibold text-black dark:text-gray-200 hover:text-[#7b8cb8] m-2"
  }, link.icon, /*#__PURE__*/React.createElement("span", {
    className: "pl-6"
  }, link.name)))), /*#__PURE__*/React.createElement("div", {
    class: "bg-white rounded-lg col-span-3 row-span-3"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "p-3 text-2xl font-extrabold rounded-t-l text-[#0B2853]"
  }, "Chain Locations"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "87.5%",
      width: "100%",
      borderTop: "solid 4px #eff7ff"
    }
  }, /*#__PURE__*/React.createElement(Map, null))), /*#__PURE__*/React.createElement("div", {
    class: "bg-white rounded-lg row-span-3"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "p-3 text-2xl font-extrabold rounded-t-l text-[#0B2853]"
  }, "Quick View"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "solid 4px #20232A"
    }
  }, quickViews.map((item, index) => /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1 p-1 rounded-lg text-xs text-gray-500 dark:text-gray-200 m-2"
  }, /*#__PURE__*/React.createElement("p", null, item.name), /*#__PURE__*/React.createElement("h1", {
    className: "text-lg font-bold text-[#0B2853] ml-4"
  }, item.count))))), /*#__PURE__*/React.createElement("div", {
    class: "bg-white rounded-lg row-span-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "p-3 text-2xl font-extrabold rounded-t-l text-[#0B2853]"
  }, "Network Chart")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PieChart, null))))));
};
export default Dashboard;
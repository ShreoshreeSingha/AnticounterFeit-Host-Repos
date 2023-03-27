import React, { useContext } from "react";
import Header from "../../components/Header";
import "../User.css";
import ROUTE from "../../data/GIF/way.gif";
import EMP from "../../data/GIF/user.gif";
import USER from "../../data/GIF/customer.gif";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import OUTGOING from "../../data/GIF/complete.gif";
import { useStateContext } from "../../contexts/ContextProvider";
import INCOMING from "../../data/GIF/shipping.gif";
import SCAN from "../../data/GIF/qr-code.gif";
import { NavLink, BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const cardList = [
//   {
//       icon: EMP,
//       name: "Incoming Batch History",
//       path: "/manufacturerincomingBatch"

//   },
{
  icon: INCOMING,
  name: "Incoming Batch History",
  path: "/retailerIncomingBatch"
}, {
  icon: SCAN,
  name: "ScanHistory",
  path: "/retailerScanHistory"
}];
const RetailerActivity = () => {
  const {
    setTitle,
    setCategory
  } = useStateContext();
  setTitle("/Retailer");
  setCategory("Activity");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
    category: "Page",
    title: "Retailer Activity | Batch History"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, cardList.map((item, index) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NavLink, {
    className: "card",
    key: index,
    to: item.path
  }, /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "imgBx"
  }, /*#__PURE__*/React.createElement("img", {
    src: item.icon
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sci"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("h1", null, item.name))))))))));
};
export default RetailerActivity;
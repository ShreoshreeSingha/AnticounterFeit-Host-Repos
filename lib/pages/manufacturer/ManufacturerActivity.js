import React, { useContext } from "react";
import Header from "../../components/Header";
import "../User.css";
import SCAN from "../../data/GIF/qr-code.gif";
import ADDPRODUCT from "../../data/GIF/add-file.gif";
import ADDBATCH from "../../data/GIF/clipboard.gif";
import OUTGOING from "../../data/GIF/complete.gif";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { useStateContext } from "../../contexts/ContextProvider";
import { NavLink, BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const cardList = [
//   {
//       icon: EMP,
//       name: "Incoming Batch History",
//       path: "/manufacturerincomingBatch"

//   },
{
  icon: OUTGOING,
  name: "Outgoing Batch History",
  path: "/manufacturerOutgoingHistory"
}, {
  icon: SCAN,
  name: "ScanHistory",
  path: "/manufacturerScanHistory"
}, {
  icon: ADDBATCH,
  name: "Create Batch",
  path: "/createBatch"
}, {
  icon: ADDPRODUCT,
  name: "Add new Products",
  path: "/popupprod"
}];
const ManufacturerActivity = () => {
  const {
    setTitle,
    setCategory
  } = useStateContext();
  setTitle("/Manufacturer");
  setCategory("Activity");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
    category: "",
    title: "Manufacturer Activity | Batch History"
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
export default ManufacturerActivity;
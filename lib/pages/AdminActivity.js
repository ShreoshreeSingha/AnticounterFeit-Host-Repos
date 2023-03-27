import React from "react";
import Header from "../components/Header";
import "./AdminActivity.css";
import ROUTE from "../data/GIF/way.gif";
import EMP from "../data/GIF/user.gif";
import USER from "../data/GIF/customer.gif";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
const cardList = [{
  icon: EMP,
  name: "Add New User",
  path: "/registerUser"
}, {
  icon: ROUTE,
  name: "Re-Route",
  path: "/routeUpdate"
}, {
  icon: USER,
  name: "Users Details",
  path: "/userDetails"
}];
const AdminActivity = () => {
  const {
    setTitle,
    setCategory
  } = useStateContext();
  setTitle('/Admin Activity');
  setCategory('Page');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
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
export default AdminActivity;
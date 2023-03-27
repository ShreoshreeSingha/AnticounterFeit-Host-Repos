import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
const URL = "http://20.193.146.8:8080/api/getallbatches";
const WAIT_TIME = 2000;
const TrackerForm = () => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    const id = setInterval(() => {
      fetch(URL, {
        headers: {
          "content-type": "application/json",
          Accept: "application/json"
        }
      }).then(response => response.json()).then(res => {
        setData(res);
      });
      console.log("DATA : " + data[1].Key);
    }, WAIT_TIME);
    return () => clearInterval(id);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    category: "Page",
    title: "Batch List"
  }), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    className: "m-12"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "py-2 font-semibold text-lg"
  }, "Select Batch"), data ? /*#__PURE__*/React.createElement("div", {
    className: " inline-grid bg-white rounded-md"
  }, data.map(item => /*#__PURE__*/React.createElement(NavLink, {
    to: `/prodTracker/${item.Key}`,
    key: item.Key,
    className: "hover:bg-hover-bg hover:rounded-sm p-2"
  }, item.Key))) : /*#__PURE__*/React.createElement("p", null, "Loading..."))));
};
export default TrackerForm;
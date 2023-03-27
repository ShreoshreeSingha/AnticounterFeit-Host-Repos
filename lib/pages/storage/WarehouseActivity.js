import React from "react";
import Header from "../../components/Header";
import "../User.css";
import OUTGOING from "../../data/GIF/complete.gif";
import INCOMING from "../../data/GIF/shipping.gif";
import SCAN from "../../data/GIF/qr-code.gif";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
const cardList = [{
  icon: OUTGOING,
  name: "Outgoing Batch History",
  path: "/storageOutgoingHistory"
}, {
  icon: INCOMING,
  name: "Incoming Batch History",
  path: "/storageIncomingHistory"
}, {
  icon: SCAN,
  name: "ScanHistory",
  path: "/storageScanHistory"
}];
const WarehouseActivity = () => {
  const {
    setTitle,
    setCategory
  } = useStateContext();
  setTitle("/Storage");
  setCategory("Activity");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
    category: "Page",
    title: "Storage Activity | Batch History"
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
export default WarehouseActivity;
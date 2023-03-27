import React from "react";
import NetworkGraph from "../components/network/NetworkGraph";
import { useStateContext } from "../contexts/ContextProvider";
function Network() {
  const {
    setTitle,
    setCategory
  } = useStateContext();
  setTitle('/Network');
  setCategory('Page');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: " h-[92%] bg-white mt-1 "
  }, /*#__PURE__*/React.createElement(NetworkGraph, null)));
}
export default Network;
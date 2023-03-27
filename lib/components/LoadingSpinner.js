import React from "react";
const LoadingSpinner = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "animate-bounce ",
    role: "status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-black"
  }, "Loading.....")));
};
export default LoadingSpinner;
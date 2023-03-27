import React from "react";
const Header = ({
  category,
  title
}) => /*#__PURE__*/React.createElement("div", {
  className: "m-2"
}, /*#__PURE__*/React.createElement("p", {
  className: "text-lg text-gray-400"
}, category), /*#__PURE__*/React.createElement("p", {
  className: "text-2xl text-center font-extrabold tracking-tight text-[#0B2853]"
}, title));
export default Header;
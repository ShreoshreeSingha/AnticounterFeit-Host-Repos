import React from 'react';
const ChartsHeader = ({
  category,
  title
}) => /*#__PURE__*/React.createElement("div", {
  className: " mb-10"
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
  className: "text-lg text-gray-400"
}, "Chart"), /*#__PURE__*/React.createElement("p", {
  className: "text-3xl font-extrabold tracking-tight dark:text-gray-200 text-slate-900"
}, category)), /*#__PURE__*/React.createElement("p", {
  className: "text-center dark:text-gray-200 text-xl mb-2 mt-3"
}, title));
export default ChartsHeader;
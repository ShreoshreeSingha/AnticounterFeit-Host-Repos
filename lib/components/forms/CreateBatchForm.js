import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Button from "../UI/Button/Button";
import { useStateContext } from "../../contexts/ContextProvider";
import CreateBatch from "../../pages/CreateBatch";
const CreateBatchForm = () => {
  const route = ["Manufacturer", "Storage-96", "Distributor-15", "Retailer-99"];

  // const handleClick = async() => {
  //   const jsondata = await CreateBatch(route);
  //   console.log(jsondata);
  // };

  let navigate = useNavigate();
  const handleClick = () => {
    console.log(route);
    navigate(`/newBatch?route=${route.toString()}`);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "p-10 text-3xl"
  }, "New Batch")), /*#__PURE__*/React.createElement("h1", {
    className: "pl-10"
  }, "Select Route"), /*#__PURE__*/React.createElement("div", {
    className: "inline-flex items-center ml-10"
  }, /*#__PURE__*/React.createElement("select", {
    className: "border-l border-t border-b border-gray-200 rounded-l-md w-1/2 text-base md:text-lg px-80 py-3 mr-8"
  }, /*#__PURE__*/React.createElement("option", null, "1"), /*#__PURE__*/React.createElement("option", null, "2"), /*#__PURE__*/React.createElement("option", null, "3")), /*#__PURE__*/React.createElement(Button, {
    className: "bg-orange-500 h-12 hover:bg-orange-600 hover:border-orange-600 text-white font-bold capitalize px-3 py-2 text-base md:text-lg rounded-r-md border-t border-r border-b border-orange-500",
    onClick: () => {}
  }, "Create")));
};
export default CreateBatchForm;
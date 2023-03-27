import React, { useState } from "react";
import Button from "../components/UI/Button/Button";
import QRCode from "qrcode.react";
import Header from "../components/Header";
import { routeLists } from "../data/link";
import LoadingScreen from "../components/LoadingScreen";
import { useStateContext } from "../contexts/ContextProvider";
const CreateBatch = () => {
  const [inputValue, setInputValue] = useState("");
  const {
    setTitle,
    setCategory
  } = useStateContext();
  const [data, setData] = React.useState();
  const [msg, setMsg] = React.useState("");
  const [batchId, setbatchId] = React.useState("");
  const [base64, setbase64] = React.useState("");
  // const route = ["Manufacturer", "Distributor-1", "Storage-2", "Retailer-4"];
  const apiUrl = "http://20.193.146.8:8080/api/addbatch";
  const [route, setRoute] = useState([]);
  const handleChange = event => {
    setInputValue(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log("The value of the input is:", route);
  };
  const handleRouteChange = event => {
    const selectedRoute = event.target.value.split(",");
    setRoute(selectedRoute);
  };
  const jsonBody = {
    route: route
  };
  setTitle("/Manufacturer");
  setCategory("Create Batch");
  const apicall = () => {
    //API CALL
    fetch(apiUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(jsonBody)
    }).then(res => res.json()).then(d => {
      setData(d);
      setMsg(d.msg);
      setbatchId(d.batchId);
      setbase64(d.base64code);
      console.log("DATA TYPE OF : " + typeof data);
      console.log(d);
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, batchId === "" ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
    category: "Page",
    title: "Create Batch"
  }), /*#__PURE__*/React.createElement("h1", {
    className: "pl-12 pt-6 pb-4"
  }, "Select Route"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
    className: "inline-flex items-center w-1/2 ml-12",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("select", {
    className: "rounded-lg text-base md:text-lg px-[5%] py-4 mr-12 ",
    value: route.join(","),
    onChange: handleRouteChange
  }, routeLists.map((item, index) => /*#__PURE__*/React.createElement("option", {
    value: item.checkpoints
  }, item.checkpoints)))), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    className: "ml-16",
    onClick: () => apicall({
      route: JSON.stringify(route)
    })
  }, "Create"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flex-col flex text-center mx-24 absolute top-1/8 left-1/8"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "mt-16"
  }, "Response Message : ", msg)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "mt-4"
  }, "Batch ID : ", batchId)), /*#__PURE__*/React.createElement("div", {
    className: "pt-10 ml-[29%]"
  }, batchId === null ? "Generated QR Code Will be Displayed Here" : /*#__PURE__*/React.createElement(QRCode, {
    value: batchId,
    size: 200
  })))));
};
export default CreateBatch;
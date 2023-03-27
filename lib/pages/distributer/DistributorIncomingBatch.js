import React, { useState, useEffect } from "react";
import { AiOutlineImport, AiOutlineExport, AiOutlineCloudDownload } from "react-icons/ai";
import Header from "../../components/Header";
import TablePagination from "../../components/UI/TablePagination";
// import FileUpload from "../components/UI/FileUpload";
import LoadingSpinner from "../../components/LoadingSpinner";
import FileExport from "../../components/UI/FileExport";
import { useStateContext } from "../../contexts/ContextProvider";
import Button from "../../components/UI/Button/Button";
function DistributorIncomingBatch() {
  const {
    setTitle,
    setCategory
  } = useStateContext();
  const [data, setData] = useState([]);
  const [showExport, setShowExport] = useState(false);
  const [filterParam, setFilterParam] = useState("");
  const [displayedData, setDisplayedData] = useState([]);

  // rest of component code

  useEffect(() => {
    fetch("http://20.193.146.8:8080/api/getallbatches").then(response => response.json()).then(data => {
      setData(data.filter(item => item.Record.route.includes("Distributor")));
    }).catch(error => console.error(error));
    console.log("Dataddd: " + JSON.stringify(data));
    //const filterData = data.filter((item) => item.Record.route.includes("R1"));
  }, []);
  console.log("Data: " + JSON.stringify(data));

  // const filterData = displayedData.filter((item) =>
  //   item.Record.route.includes("R4")
  // );

  //console.log("data:" + filterData);
  //const recievedFilterData = filterData;

  const handleSearchChange = event => {
    setFilterParam(event.target.value);
  };
  const handleSearchSubmit = event => {
    event.preventDefault();
    console.log("inside func");
    const filteruserData = data.filter(item => item && item.Key.includes(filterParam) || item.Record.route.includes(filterParam) || item.Record.actualPath.includes(filterParam) || item.Record.currentLocation.includes(filterParam));
    setData(filteruserData);
  };
  //displayedData = filterData;

  //const userdata = filteruserData(filterData);

  //console.log("user Data" + userdata);
  //console.log("ff" + filterData);

  // var pageSize = 2;
  const [showPopup, setShowPopup] = useState(false);
  const exportClick = () => {
    setShowExport(true);
  };
  setTitle("/Distributor");
  setCategory("Incoming Batches");

  // const handleClick = () => {
  //   setShowPopup(true);
  // };

  function handleTableDataFromMyComponent(data) {
    // console.log(`Received data from MyComponent:${JSON.stringify(data)}`);
    setDisplayedData(data);
    //console.log("Displayed data:" + displayedData);
    // console.log("Inside handleTableDataFromMyComponent FUNCTION ");
    console.log("Displayed Data55: " + JSON.stringify(data));
    // Do something with the data here
  }

  // function handleRawDataFromMyComponent(data) {
  //   console.log("Received data from Local System:", JSON.stringify(data));
  //   setData(data);
  //   // Do something with the data here
  // }

  // function closePopup() {
  //   setShowPopup(false);
  // }
  function closePopup() {
    setShowPopup(false);
    setShowExport(false);
  }
  // console.log("TYPE OF DATA: " + typeof data);
  // console.log("STATE DATA: " + JSON.stringify(data));

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    category: "",
    title: "Distributor | Incoming Batches"
  }), showExport && /*#__PURE__*/React.createElement(FileExport, {
    data: data,
    onCloseRecieved: closePopup
  }), /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white mt-2 flex flex-wrap "
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSearchSubmit
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Search",
    className: "w-52 h-8",
    value: filterParam
    // onChange={(e) => setFilterParam(e.target.value)}
    ,
    onChange: handleSearchChange
  }))), /*#__PURE__*/React.createElement("div", {
    className: " flex align-baseline m-4"
  }, /*#__PURE__*/React.createElement(Button, {
    className: "",
    onClick: exportClick
  }, "Export"))), /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-scroll bg-white shadow-md"
  }, /*#__PURE__*/React.createElement("table", {
    className: " min-h-[70vh] w-full border-collapse text-left text-sm text-gray-500"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "bg-gray-50 border-t-1"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    scope: "col",
    className: "px-6 py-4 font-medium text-gray-900"
  }, "batchId"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    className: "px-6 py-4 font-medium text-gray-900"
  }, "actualPath"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    className: "px-6 py-4 font-medium text-gray-900"
  }, "currentLocation"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    className: "px-6 py-4 font-medium text-gray-900"
  }, "route"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    className: "px-6 py-4 font-medium text-gray-900"
  }, "soldStatus"))), data != "" ? /*#__PURE__*/React.createElement("tbody", {
    class: "divide-y divide-gray-100 border-t border-gray-100"
  }, displayedData.map(item => /*#__PURE__*/React.createElement("tr", {
    class: "hover:bg-gray-50",
    key: item.id
  }, /*#__PURE__*/React.createElement("td", {
    class: "px-6 py-1 font-medium text-gray-900"
  }, item.Key), /*#__PURE__*/React.createElement("td", {
    className: "px-6 py-1font-medium text-gray-900"
  }, item.Record.actualPath), /*#__PURE__*/React.createElement("td", {
    className: "px-6 py-1 font-medium text-gray-900"
  }, item.Record.currentLocation), /*#__PURE__*/React.createElement("td", {
    className: "px-6 py-1font-medium text-gray-900"
  }, item.Record.route[0], "-", item.Record.route[1], "-", item.Record.route[2], "-", item.Record.route[3]), /*#__PURE__*/React.createElement("td", {
    className: "px-6 py-1font-medium text-gray-900"
  }, item.Record.soldStatus.toString())))) : /*#__PURE__*/React.createElement("div", {
    className: "text-lg"
  }, /*#__PURE__*/React.createElement(LoadingSpinner, null))), /*#__PURE__*/React.createElement(TablePagination, {
    data: data
    // pageSize={pageSize}
    ,
    onDataReceived: handleTableDataFromMyComponent
  }))));
}
export default DistributorIncomingBatch;
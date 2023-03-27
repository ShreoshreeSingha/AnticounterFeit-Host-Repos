import React, { useState } from "react";
import { AiOutlineImport, AiOutlineExport } from "react-icons/ai";
import QRCode from "qrcode.react";
import Header from "../components/Header";
import TablePagination from "../components/UI/TablePagination";
import FileUpload from "../components/UI/FileUpload";
import LoadingSpinner from "../components/LoadingSpinner";
import Navbar from "../components/Navbar";
import { useStateContext } from "../contexts/ContextProvider";
import FileExport from "../components/UI/FileExport";
import Button from "../components/UI/Button/Button";
const URL = "http://20.193.146.8:8080/api/getallbatches";
const TransactionMaster = () => {
  const {
    setTitle,
    setCategory
  } = useStateContext();
  const [data, setData] = React.useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [displayedData, setDisplayedData] = useState([]);
  const [showExport, setShowExport] = useState(false);
  const [filterParam, setFilterParam] = useState("");
  //const [recievedFilterData,setre]

  setTitle("/Transaction Master");
  setCategory("Data");

  // React.useEffect(() => {
  // },[displayedData])

  //var pageSize = 5;

  // this.deleteProducts = this.deleteProducts.bind(this);

  const handleClick = () => {
    setShowPopup(true);
  };
  const exportClick = () => {
    setShowExport(true);
  };
  function handleTableDataFromMyComponent(data) {
    console.log("Received tabledata from MyComponent: " + JSON.stringify(data));
    setDisplayedData(data);
    //console.log("Displayed data:" +JSON.stringify(displayedData));
    //filterData(displayedData);
    // console.log(`Displayed data:${data}`);
    // Do something with the data here
  }

  function handleRawDataFromMyComponent(data) {
    console.log("Received data from MyComponent:", JSON.stringify(data));
    setData(data);
    // Do something with the data here
  }

  // const handleDelete = (index) =>{
  //     const d = [...data];
  //     d.splice(index,1);
  //     setData(d);
  // };

  function closePopup() {
    setShowPopup(false);
    setShowExport(false);
  }

  // //console.log("RECORD DATA:"+ JSON.stringify(data));

  // console.log(`TYPE OF DATA: ${typeof data}`);
  // console.log(`STATE DATA: ${JSON.stringify(data)}`);

  React.useEffect(() => {
    fetch(URL, {
      headers: {
        "content-type": "application/json",
        Accept: "application/json"
      }
    }).then(response => response.json()).then(data => {
      setData(data);
    });
    console.log(`DATA PRINT : ${JSON.stringify(data)}`);
  }, []);
  // const exportData= JSON.stringify(data);
  // console.log("DISPLAYED DATA:", exportData);
  // console.log("RECORD DATA:", data);

  // const filterData = (data) =>
  //   data.filter(
  //     (item) =>
  //       (item && item.Key?.includes(filterParam)) ||
  //       item.Record.route.includes(filterParam) ||
  //       item.Record.actualPath.includes(filterParam) ||
  //       item.Record.currentLocation.includes(filterParam)
  //   );

  const handleSearchChange = event => {
    setFilterParam(event.target.value);
  };
  const handleSearchSubmit = event => {
    event.preventDefault();
    // Here you can perform the search logic based on the searchTerm
    // and update the searchResults state accordingly.
    // For simplicity, let's assume that we have a list of items like this:
    console.log("inside func");
    const results = data.filter(item => item && item.Key.includes(filterParam) ||
    // item.Record.batchId.includes(filterParam) ||
    item.Record.route.includes(filterParam) || item.Record.actualPath.includes(filterParam) || item.Record.currentLocation.includes(filterParam));
    setData(results);
  };

  //console.log("RECORD DATA:"+ JSON.stringify(data));

  //const recievedFilterData = filterData(displayedData);

  // console.log("RECORD DATA:", recievedFilterData);

  return /*#__PURE__*/React.createElement(React.Fragment, null, showPopup && /*#__PURE__*/React.createElement(FileUpload, {
    onDataReceived: handleRawDataFromMyComponent,
    onCloseRecieved: closePopup
  }), showExport && /*#__PURE__*/React.createElement(FileExport, {
    data: displayedData,
    onCloseRecieved: closePopup
  }), /*#__PURE__*/React.createElement("div", {
    className: "m-2 rounded-lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white mt-3 flex justify-between flex-wrap"
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
    onClick: handleClick
  }, "Import"), /*#__PURE__*/React.createElement(Button, {
    className: "",
    onClick: exportClick
  }, "Export"))), /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-scroll bg-white shadow-md"
  }, /*#__PURE__*/React.createElement("table", {
    className: " min-h-[70vh] w-[100%] border-collapse text-left text-sm text-gray-500"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "bg-gray-50"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    scope: "col",
    className: "px-6 py-4 font-medium text-gray-900"
  }, "AC ID"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    className: "px-6 py-4 font-medium text-gray-900"
  }, "Current Location"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    className: "px-6 py-4 font-medium text-gray-900"
  }, "Route"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    className: "px-6 py-4 font-medium text-gray-900"
  }, "Actual Path"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    className: "px-6 py-4 font-medium text-gray-900"
  }, "Sold Status"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    className: "px-6 py-4 font-medium text-gray-900"
  }, "QR Code"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    className: "px-6 py-4 font-medium text-gray-900"
  }))), data != "" ? /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-gray-100 border-t border-gray-100"
  }, displayedData.map(item => /*#__PURE__*/React.createElement("tr", {
    className: "hover:bg-gray-50",
    key: item.id
  }, /*#__PURE__*/React.createElement("td", {
    className: "px-2 py-2"
  }, item.Record.batchId), /*#__PURE__*/React.createElement("td", {
    className: "px-6 py-2"
  }, item.Record.currentLocation), /*#__PURE__*/React.createElement("td", {
    className: "px-6 py-2"
  }, item.Record.route), /*#__PURE__*/React.createElement("td", {
    className: "px-6 py-2"
  }, item.Record.actualPath), /*#__PURE__*/React.createElement("td", {
    className: "px-6 py-2"
  }, item.Record.soldStatus.toString()), /*#__PURE__*/React.createElement("td", {
    className: "px-6 py-2"
  }, /*#__PURE__*/React.createElement(QRCode, {
    value: item.Record.batchId,
    size: 100
  }))))) : /*#__PURE__*/React.createElement("div", {
    className: "text-lg"
  }, /*#__PURE__*/React.createElement(LoadingSpinner, null))), /*#__PURE__*/React.createElement(TablePagination, {
    data: data
    // pageSize={pageSize}
    ,
    onDataReceived: handleTableDataFromMyComponent
  }))));
};
export default TransactionMaster;
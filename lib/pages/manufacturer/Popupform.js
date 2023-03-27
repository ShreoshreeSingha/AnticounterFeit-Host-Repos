/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from "react";
// import Header from "../components/Header";
import { AiOutlineImport, AiOutlineExport } from "react-icons/ai";
import TablePagination from "../../components/UI/TablePagination";
import AddProduct from "./AddProduct";
import LoadingSpinner from "../../components/LoadingSpinner";
// import Navbar from "../components/Navbar";
import { useStateContext } from "../../contexts/ContextProvider";
import Button from "../../components/UI/Button/Button";
import FileExport from "../../components/UI/FileExport";
import FileUpload from "../../components/UI/FileUpload";
import { NavLink } from "react-router-dom";
const URL = "http://20.193.146.8:8080/api/data/get/productmaster";
const Popupform = () => {
  const {
    setTitle,
    setCategory
  } = useStateContext();
  const [data, setData] = React.useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [showImport, setShowImport] = useState(false);
  const [displayedData, setDisplayedData] = useState([]);
  const [filterParam, setFilterParam] = useState("");
  const filterData = () => data.filter(item => item && item.Key?.includes(filterParam) || item.doc.productName.includes(filterParam) || item.doc.productCategory.includes(filterParam) || item.doc.manufacturingDate.includes(filterParam) || item.doc.manufacturingLocation.includes(filterParam));

  // const tableRef = useRef(null);

  // const { onDownload } = useDownloadExcel({
  //   currentTableRef: tableRef.current,
  //   filename: "Products table",
  //   sheet: "Products"
  // });

  // const fs = require('fs');

  //   // Format the data as a CSV string
  // const csvData = displayedData.map(row => Object.values(row).join(',')).join('\n');

  //   // Convert the data to a file
  //   fs.writeFile('data.csv', csvData, (err) => {
  //     if (err) throw err;

  //     // Serve the file to the user
  //     res.download('data.csv', (err) => {
  //       if (err) throw err;

  //     });
  //   });

  setTitle("Manufacturer");
  setCategory("Product Data");

  // React.useEffect(() => {
  // },[displayedData])

  const pageSize = 5;
  const handleClick = () => {
    setShowPopup(true);
  };
  const exportClick = () => {
    setShowExport(true);
  };
  const importClick = () => {
    setShowImport(true);
  };
  function handleTableDataFromMyComponent(data) {
    console.log("Received data from MyComponent:", data);
    setDisplayedData(data);
    // Do something with the data here
  }

  function handleRawDataFromMyComponent(data) {
    console.log("Received data from MyComponent:", JSON.stringify(data));
    setData(data);
    // Do something with the data here
  }

  function closePopup() {
    setShowPopup(false);
    setShowExport(false);
    setShowImport(false);
  }
  console.log(`TYPE OF DATA: ${typeof data}`);
  console.log(`STATE DATA: ${JSON.stringify(data)}`);
  React.useEffect(() => {
    fetch(URL, {
      headers: {
        "content-type": "application/json",
        Accept: "application/json"
      }
    }).then(response => response.json()).then(data => {
      setData(data);
    });
    console.log(`DATA : ${JSON.stringify(data)}`);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, showImport && /*#__PURE__*/React.createElement(FileUpload, {
    onDataReceived: handleRawDataFromMyComponent,
    onCloseRecieved: closePopup
  }), showExport && /*#__PURE__*/React.createElement(FileExport, {
    data: displayedData,
    onCloseRecieved: closePopup
  }), /*#__PURE__*/React.createElement("div", {
    className: "m-2 rounded-lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white mt-3 flex flex-wrap "
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    placeholder: "Search",
    className: "w-52 h-8",
    onChange: e => setFilterParam(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    className: " flex align-baseline m-4"
  }, /*#__PURE__*/React.createElement(Button, {
    className: ""
  }, /*#__PURE__*/React.createElement(NavLink, {
    to: "/addProduct"
  }, " Add Product")), /*#__PURE__*/React.createElement(Button, {
    className: "",
    onClick: importClick
  }, "Import"), /*#__PURE__*/React.createElement(Button, {
    className: "",
    onClick: exportClick
  }, "Export"))), /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-scroll bg-white shadow-md"
  }, /*#__PURE__*/React.createElement("table", {
    className: " min-h-[70vh] w-full border-collapse text-left text-sm text-gray-500"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "bg-gray-50"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    scope: "col",
    className: "px-6 py-4 font-medium text-gray-900"
  }, "Product Name"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    className: "px-6 py-4 font-medium text-gray-900"
  }, "Product Category"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    className: "px-6 py-4 font-medium text-gray-900"
  }, "Manufacturing Date"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    className: "px-6 py-4 font-medium text-gray-900"
  }, "Manufacturing Location"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    className: "px-6 py-4 font-medium text-gray-900"
  }, "MRP"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    className: "px-6 py-4 font-medium text-gray-900"
  }))), data != "" ? /*#__PURE__*/React.createElement("tbody", {
    className: "divide-y divide-gray-100 border-t border-gray-100"
  }, filterData().map(item => /*#__PURE__*/React.createElement("tr", {
    className: "hover:bg-gray-50",
    key: item.id
  }, /*#__PURE__*/React.createElement("td", {
    className: "px-6 py-2"
  }, item.doc.productName), /*#__PURE__*/React.createElement("td", {
    className: "px-6 py-2"
  }, item.doc.productCategory), /*#__PURE__*/React.createElement("td", {
    className: "px-6 py-2"
  }, item.doc.manufacturingDate), /*#__PURE__*/React.createElement("td", {
    className: "px-6 py-2"
  }, item.doc.manufacturingLocation), /*#__PURE__*/React.createElement("td", {
    className: "px-6 py-2"
  }, item.doc.price)))) : /*#__PURE__*/React.createElement("div", {
    className: "text-lg"
  }, /*#__PURE__*/React.createElement(LoadingSpinner, null))), /*#__PURE__*/React.createElement(TablePagination, {
    data: data,
    pageSize: pageSize,
    onDataReceived: handleTableDataFromMyComponent
  }))));
};
export default Popupform;
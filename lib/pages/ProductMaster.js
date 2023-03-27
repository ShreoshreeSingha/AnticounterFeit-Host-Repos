import React, { useState } from "react";
import Header from "../components/Header";
import TablePagination from "../components/UI/TablePagination";
import { AiOutlineImport, AiOutlineExport } from "react-icons/ai";
import FileUpload from "../components/UI/FileUpload";
import LoadingSpinner from "../components/LoadingSpinner";
import Navbar from "../components/Navbar";
import { useStateContext } from "../contexts/ContextProvider";
import FileExport from "../components/UI/FileExport";
import Qrcodegen from "../components/UI/Qrcodegen";
import Button from "../components/UI/Button/Button";
import QRCode from "qrcode.react";
const URL = "http://20.193.146.8:8080/api/data/get/productmaster";
const ProductMaster = () => {
  const {
    setTitle,
    setCategory
  } = useStateContext();
  const [data, setData] = React.useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [showQrcode, setShowQrcode] = useState(false);
  const [displayedData, setDisplayedData] = useState([]);
  //const [receivedFilterData, setReceivedFilterData] = useState([]);
  const [filterParam, setFilterParam] = useState("");

  //const recievedFilterData = filterData(displayedData);

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

  setTitle("/Product Master");
  setCategory("Data");

  // React.useEffect(() => {
  // },[displayedData])

  // var pageSize = 5;

  const handleClick = () => {
    setShowPopup(true);
  };
  const exportClick = () => {
    setShowExport(true);
  };
  const QrCodeClick = () => {
    setShowQrcode(true);
  };
  function handleTableDataFromMyComponent(data) {
    console.log("Received data from MyComponent:", data);
    setDisplayedData(data);
    //filterData(displayedData);
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
    setShowQrcode(false);
  }
  console.log("TYPE OF DATA: " + typeof data);
  console.log("STATE DATA: " + JSON.stringify(data));
  React.useEffect(() => {
    fetch(URL, {
      headers: {
        "content-type": "application/json",
        Accept: "application/json"
      }
    }).then(response => response.json()).then(data => {
      setData(data);
      // filter(data);
      // console.log("filter call");
    });

    console.log("DATA : " + JSON.stringify(data));
    // filter(data);
    // console.log("filter call");
  }, []);

  // const filterData = (data) =>
  //   data.filter(
  //     (item) =>
  //       (item && item.Key?.includes(filterParam)) ||
  //       item.doc.productName.includes(filterParam) ||
  //       item.doc.productCategory.includes(filterParam) ||
  //       item.doc.manufacturingDate.includes(filterParam) ||
  //       item.doc.manufacturingLocation.includes(filterParam)
  //   );

  // const filteredData = data.filter((item) =>
  // item.doc.manufacturingLocation.includes(filterParam.toLowerCase())
  // );

  // function filter(data){
  //   const filterdata = data.filter(
  //         (item) =>
  //           (item && item.Key?.includes(filterParam)) ||
  //           item.doc.productName.includes(filterParam) ||
  //           item.doc.productCategory.includes(filterParam) ||
  //           item.doc.manufacturingDate.includes(filterParam) ||
  //           item.doc.manufacturingLocation.includes(filterParam)
  //       );

  //   setData(filterdata);
  // }

  // const receivedFilterData = filterData(displayedData);

  const handleSearchChange = event => {
    setFilterParam(event.target.value);
  };
  const handleSearchSubmit = event => {
    event.preventDefault();
    // Here you can perform the search logic based on the searchTerm
    // and update the searchResults state accordingly.
    // For simplicity, let's assume that we have a list of items like this:
    console.log("inside func");
    const results = data.filter(item => item && item.Key?.includes(filterParam) || item.doc._id.includes(filterParam) || item.doc.productName.includes(filterParam) || item.doc.productCategory.includes(filterParam) || item.doc.manufacturingDate.includes(filterParam) || item.doc.manufacturingLocation.includes(filterParam));
    setData(results);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, showPopup && /*#__PURE__*/React.createElement(FileUpload, {
    onDataReceived: handleRawDataFromMyComponent,
    onCloseRecieved: closePopup
  }), showExport && /*#__PURE__*/React.createElement(FileExport, {
    data: displayedData,
    onCloseRecieved: closePopup
  }), showQrcode && /*#__PURE__*/React.createElement(Qrcodegen, {
    data: _id,
    onCloseRecieved: closePopup
  }), /*#__PURE__*/React.createElement("div", {
    className: "m-2 rounded-lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white mt-3 flex flex-wrap "
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
    class: "overflow-x-scroll bg-white shadow-md"
  }, /*#__PURE__*/React.createElement("table", {
    class: " min-h-[70vh] w-full border-collapse text-left text-sm text-gray-500"
  }, /*#__PURE__*/React.createElement("thead", {
    class: "bg-gray-50"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    scope: "col",
    class: "px-6 py-4 font-medium text-gray-900"
  }, "Product ID"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    class: "px-6 py-4 font-medium text-gray-900"
  }, "Product Name"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    class: "px-6 py-4 font-medium text-gray-900"
  }, "Product Category"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    class: "px-6 py-4 font-medium text-gray-900"
  }, "Manufacturing Date"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    class: "px-6 py-4 font-medium text-gray-900"
  }, "Manufacturing Location"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    class: "px-6 py-4 font-medium text-gray-900"
  }, "Path History"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    class: "px-6 py-4 font-medium text-gray-900"
  }, "MRP"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    class: "px-6 py-4 font-medium text-gray-900"
  }, "Show QRCode"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    class: "px-6 py-4 font-medium text-gray-900"
  }))), data != "" ? /*#__PURE__*/React.createElement("tbody", {
    class: "divide-y divide-gray-100 border-t border-gray-100"
  }, displayedData.map(item => /*#__PURE__*/React.createElement("tr", {
    class: "hover:bg-gray-50",
    key: item.id
  }, /*#__PURE__*/React.createElement("td", {
    class: "px-6 py-2"
  }, item.doc._id), /*#__PURE__*/React.createElement("td", {
    class: "px-6 py-2"
  }, item.doc.productName), /*#__PURE__*/React.createElement("td", {
    class: "px-6 py-2"
  }, item.doc.productCategory), /*#__PURE__*/React.createElement("td", {
    class: "px-6 py-2"
  }, item.doc.manufacturingDate), /*#__PURE__*/React.createElement("td", {
    class: "px-6 py-2"
  }, item.doc.manufacturingLocation), /*#__PURE__*/React.createElement("td", {
    class: "px-6 py-2"
  }, item.doc.route), /*#__PURE__*/React.createElement("td", {
    class: "px-6 py-2"
  }, item.doc.price), /*#__PURE__*/React.createElement("td", {
    class: "px-6 py-2"
  }, /*#__PURE__*/React.createElement(QRCode, {
    value: item.id,
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
export default ProductMaster;
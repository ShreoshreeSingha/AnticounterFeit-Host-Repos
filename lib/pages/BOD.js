import React, { useState } from "react";
import Header from "../components/Header";
import TablePagination from "../components/UI/TablePagination";
import { AiOutlineImport, AiOutlineExport } from "react-icons/ai";
import FileUpload from "../components/UI/FileUpload";
import LoadingSpinner from "../components/LoadingSpinner";
import Navbar from "../components/Navbar";
import { useStateContext } from "../contexts/ContextProvider";
import FileExport from "../components/UI/FileExport";
import { MdNotificationAdd } from "react-icons/md";
import { NavLink } from "react-router-dom";
import ADDBOD from "../pages/AddBOD";
import Button from "../components/UI/Button/Button";
const URL = "http://20.193.146.8:8080/api/data/get/bodmaster";
const BODMaster = () => {
  const {
    setTitle,
    setCategory
  } = useStateContext();
  const [data, setData] = React.useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [displayedData, setDisplayedData] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [filterParam, setFilterParam] = useState("");
  setTitle("/BOD Master");
  setCategory("Data");

  // React.useEffect(() => {
  // },[displayedData])

  // var pageSize = 10;

  const handleClick = () => {
    setShowPopup(true);
  };
  const exportClick = () => {
    setShowExport(true);
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
  }
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  // const handleDelete = (item) => {
  //   setData(data.filter((i) => i.id !== item.id));
  // };

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
    });
    console.log("DATA : " + JSON.stringify(data));
  }, []);

  // const filterData = (data) =>
  // data.filter(
  //   (item) =>
  //     (item && item.Key?.includes(filterParam)) ||
  //     item.doc.startingPoint.includes(filterParam) ||
  //     item.doc.endingPoint.includes(filterParam) ||
  //     item.doc.transitType.includes(filterParam)
  // );

  // const receivedfilterData = filterData(displayedData);
  const handleSearchChange = event => {
    setFilterParam(event.target.value);
  };
  const handleSearchSubmit = event => {
    event.preventDefault();
    // Here you can perform the search logic based on the searchTerm
    // and update the searchResults state accordingly.
    // For simplicity, let's assume that we have a list of items like this:
    console.log("inside func");
    const results = data.filter(item => item && item.Key?.includes(filterParam) || item.doc.startingPoint.includes(filterParam) || item.doc.endingPoint.includes(filterParam) || item.doc.transitType.includes(filterParam));
    setData(results);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, showPopup && /*#__PURE__*/React.createElement(FileUpload, {
    onDataReceived: handleRawDataFromMyComponent,
    onCloseRecieved: closePopup
  }), showExport && /*#__PURE__*/React.createElement(FileExport, {
    data: displayedData,
    onCloseRecieved: closePopup
  }), modalIsOpen && /*#__PURE__*/React.createElement(ADDBOD, {
    onCloseRecieved: closeModal
  }), /*#__PURE__*/React.createElement("div", {
    className: "m-2 rounded-lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white mt-3 flex flex-wrap "
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSearchSubmit
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Search",
    className: "w-52 h-8",
    value: filterParam,
    onChange: handleSearchChange
    //onChange={(e) => setFilterParam(e.target.value)}
  }))), /*#__PURE__*/React.createElement("div", {
    className: " flex align-baseline m-4"
  }, /*#__PURE__*/React.createElement(Button, null, /*#__PURE__*/React.createElement(NavLink, {
    to: "/addBOD"
  }, "Add BOD")), /*#__PURE__*/React.createElement(Button, {
    onClick: handleClick
  }, "Import"), /*#__PURE__*/React.createElement(Button, {
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
  }, "Path ID"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    class: "px-6 py-4 font-medium text-gray-900"
  }, "Starting Point"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    class: "px-6 py-4 font-medium text-gray-900"
  }, "Ending Point"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    class: "px-6 py-4 font-medium text-gray-900"
  }, "Transit Type"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    class: "px-6 py-4 font-medium text-gray-900"
  }, "Average Time Taken"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    class: "px-6 py-4 font-medium text-gray-900"
  }, "Distance"), /*#__PURE__*/React.createElement("th", {
    scope: "col",
    class: "px-6 py-4 font-medium text-gray-900"
  }))), data != "" ? /*#__PURE__*/React.createElement("tbody", {
    class: "divide-y divide-gray-100 border-t border-gray-100"
  }, displayedData.map(item => /*#__PURE__*/React.createElement("tr", {
    class: "hover:bg-gray-50",
    key: item.id
  }, /*#__PURE__*/React.createElement("td", {
    class: "px-6 py-2"
  }, item.doc.pathID), /*#__PURE__*/React.createElement("td", {
    class: "px-6 py-2"
  }, item.doc.startingPoint), /*#__PURE__*/React.createElement("td", {
    class: "px-6 py-2"
  }, item.doc.endingPoint), /*#__PURE__*/React.createElement("td", {
    class: "px-6 py-2"
  }, item.doc.transitType), /*#__PURE__*/React.createElement("td", {
    class: "px-6 py-2"
  }, item.doc.avgTimeTaken), /*#__PURE__*/React.createElement("td", {
    class: "px-6 py-2"
  }, item.doc.distance), /*#__PURE__*/React.createElement("td", {
    class: "px-6 py-2"
  })))) : /*#__PURE__*/React.createElement("div", {
    className: "text-lg"
  }, /*#__PURE__*/React.createElement(LoadingSpinner, null))), /*#__PURE__*/React.createElement(TablePagination, {
    data: data
    // pageSize={pageSize}
    ,
    onDataReceived: handleTableDataFromMyComponent
  }))));
};
export default BODMaster;
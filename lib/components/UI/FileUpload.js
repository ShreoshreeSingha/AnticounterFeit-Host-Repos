import React from "react";
import Papa from "papaparse";
import { AiOutlineClose } from "react-icons/ai";
import { CiImport } from "react-icons/ci";
import Warning from "../Warning";
import Button from "./Button/Button";
import Header from "../../components/Header";
const FileUpload = props => {
  const [data, setData] = React.useState([]);
  const [file, setFile] = React.useState([]);
  const [showWarning, setShowWarning] = React.useState(false);
  const handleData = props.onDataReceived;
  const onClick = props.onCloseRecieved;

  // handleFileUpload that will be called when the user selects a file
  function handleFileUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = async event => {
      const fileContent = event.target.result;
      setFile(fileContent);

      // Call a function to process the file content
      const processedData = await processData(fileContent);

      // Update the state with the processed data
      setData(processedData);
      handleData(processedData);
    };
    if (/\.(json)$/i.test(file.name) || /\.(csv)$/i.test(file.name)) {
      console.log("File Selceted");
    } else {
      /*#__PURE__*/React.createElement(Warning, null);
    }
    reader.readAsText(file);
  }

  // processData that will be called when the file content is loaded
  async function processData(fileContent) {
    // Parse the file content as JSON or CSV
    const data = parseFile(fileContent);

    // Process the data as needed
    const processedData = await processFileData(data);

    // Return the processed data
    return processedData;
  }

  // parseFile function to parse the file content as JSON or CSV
  function parseFile(fileContent) {
    const parsedData = fileContent.startsWith("{") ? JSON.parse(fileContent) : Papa.parse(fileContent, {
      header: true
    }).data;
    return parsedData;
  }
  async function processFileData(data) {
    // Perform any processing on the data here
    // ...
    let dataArray = [];
    if (JSON.stringify(data).startsWith("{")) {
      dataArray = data.data;
    } else {
      dataArray = data;
    }

    // Simulate an asynchronous operation that takes some time
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Return the processed data
    return dataArray;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-white shadow-lg rounded-lg w-1/2 h-2/3 fixed top-[20%] left-[25%] z-[5]"
  }, /*#__PURE__*/React.createElement(Header, {
    category: "",
    title: "Import File Here"
  }), /*#__PURE__*/React.createElement("button", {
    className: "absolute top-0 right-0 p-4 text-xl hover:text-red-600 ",
    onClick: onClick
  }, /*#__PURE__*/React.createElement(AiOutlineClose, null)), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col justify-center m-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center text-7xl m-2"
  }, /*#__PURE__*/React.createElement(CiImport, null)), showWarning && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Warning, {
    content: "Warning: .csv/.json file supported."
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center m-2"
  }, /*#__PURE__*/React.createElement("p", null, "Upload Files")), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center m-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "file",
    onChange: handleFileUpload
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, file.name)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center m-\u20B9"
  }, /*#__PURE__*/React.createElement(Button, null, "Upload"))));
};
export default FileUpload;
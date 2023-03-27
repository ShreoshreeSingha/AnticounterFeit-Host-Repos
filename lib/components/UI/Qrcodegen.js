import React from "react";
import { CSVLink } from "react-csv";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { AiOutlineClose } from "react-icons/ai";
import QRCode from "qrcode.react";
import Button from "./Button/Button";
import Header from "../Header";
const Qrcodegen = props => {
  // const [selectedOption, setSelectedOption] = useState(null);
  console.log("Props Data: " + props.data);
  const {
    data
  } = props;
  const onClick = props.onCloseRecieved;
  console.log("Inside Export data: " + data);
  const csvData = data.map(row => Object.values(row).join(",")).join("\n");
  // Convert the data to a file
  // console.log("csvData ::" + csvData);

  return /*#__PURE__*/React.createElement("div", {
    className: "bg-white shadow-lg rounded-lg w-1/2 h-2/3 fixed top-[20%] left-[25%] z-[5]"
  }, /*#__PURE__*/React.createElement(QRCode, {
    value: data.props,
    size: 200
  }), /*#__PURE__*/React.createElement(Header, {
    category: "",
    title: "Scan Qr code"
  }), /*#__PURE__*/React.createElement("button", {
    className: "absolute top-0 right-0 p-4 text-xl hover:text-red-600 ",
    onClick: onClick
  }, /*#__PURE__*/React.createElement(AiOutlineClose, null)), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col justify-center m-12"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between m-2"
  }, /*#__PURE__*/React.createElement(CSVLink, {
    data: csvData
  }, /*#__PURE__*/React.createElement(Button, null, "CSV")), /*#__PURE__*/React.createElement(DownloadTableExcel, {
    filename: "data table",
    sheet: "data",
    currentTableRef: data.current
  }, /*#__PURE__*/React.createElement(Button, null, "Excel")))));
};
export default Qrcodegen;
import React, { useState } from "react";
import { userData } from "../data/userData";
import Header from "../components/Header";
import TablePagination from "../components/UI/TablePagination";
import { AiOutlineImport, AiOutlineExport } from "react-icons/ai";
import FileUpload from "../components/UI/FileUpload";
import LoadingSpinner from "../components/LoadingSpinner";
import Navbar from "../components/Navbar";
import { useStateContext } from "../contexts/ContextProvider";
import FileExport from "../components/UI/FileExport";

// const url = 'https://honest-rabbits-juggle-103-86-0-98.loca.lt/api/data/product';

const UserDetails = () => {
  // const selectionsettings = { persistSelection: false };
  // const toolbarOptions = ["Delete","Update"];
  const {
    setTitle,
    setCategory
  } = useStateContext();
  const [data, setData] = React.useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [displayedData, setDisplayedData] = useState([]);
  setTitle('User Details Table');
  setCategory('Data');
  var pageSize = 10;
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
  }
  console.log("TYPE OF DATA: " + typeof data);
  console.log("STATE DATA: " + JSON.stringify(data));

  //   React.useEffect(async () => {
  //     await fetch(url, {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((d) => {
  //         const { response } = d;
  //         const resData = JSON.stringify(response)
  //           .slice(1, -1)
  //           .replace(/\\/g, "");
  //         // console.log("response data : " + resData)
  //         const dat = JSON.parse(resData).data
  //         console.log("DATA : " + JSON.stringify(dat[0]))
  //         setData(dat);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, [])

  // const routeItems = [
  //   { rName: 'R-1', rId: '1' },
  //   { rName: 'R-2', rId: '2' },
  //   { rName: 'R-3', rId: '3' }
  //   ];
  //   const routeParams = {
  //       params: {
  //           actionComplete: () => false,
  //           allowFiltering: true,
  //           dataSource: new DataManager(routeItems),
  //           fields: { text: "rName", value: "rName" },
  //           query: new Query()
  //       }
  //   };

  return /*#__PURE__*/React.createElement(React.Fragment, null);
};
export default UserDetails;
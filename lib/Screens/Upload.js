import React, { useState } from "react";
const Upload = () => {
  // let rawData = readFileSync("../data/BODMasterData.json");
  // let data = JSON.parse(rawData);
  // console.log(data);
  const [fileData, setFileData] = useState(null);
  const handleFileRead = e => {
    const content = e.target.result;
    setFileData(content);
  };
  const handleFileUpload = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = handleFileRead;
    reader.readAsText(file);
  };
  const auth = "admin:adminpw@";
  const apiUrl = `http://${auth}20.193.146.8:5984/mychannel_fabcar/`;

  // const version = 'CgMBBgA=';
  const customId = "bod";

  // fetch(URL + customId, {
  //   fileData,
  //   '~version' : 'CgMBBgA='
  // })
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });

  const jsonBody = {
    fileData: fileData
  };
  const apicall = () => {
    //API CALL
    fetch(apiUrl + customId, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(jsonBody)
    }).then(res => res.json()).catch(error => {
      console.error(error);
    });
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    type: "file",
    onChange: handleFileUpload
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: apicall
  }, "Upload File")), fileData && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "File Data:"), /*#__PURE__*/React.createElement("p", null, fileData)));
};
export default Upload;
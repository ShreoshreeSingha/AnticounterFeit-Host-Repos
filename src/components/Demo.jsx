import React, { useState } from "react";
import Header from "../components/Header";
import Button from "../components/UI/Button/Button";

const URL = "http://20.193.146.8:8080/api/data/product";

const ProductMaster = () => {

  const [data, setData] = React.useState([]);
  const [file, setfile] = React.useState([]);
  const [uploadedFileData, setUploadedFileData] = React.useState([]);
  var lines = [];
  var headers = [];

  const handleFileSelect = (event) => {
    setfile(event.target.files[0]);
  };
  

  function displayCsvData(event) {
    if (/\.(json)$/i.test(file.name)) {
      // file is a JSON file
      console.log("INSIDE .JSON")
      const reader = new FileReader(event)
      reader.readAsText(file);
      reader.onload = function () {
        const tempData = JSON.parse(reader.result);
        // process JSON data
        setUploadedFileData(tempData);
        // console.log("TYPE OF JSON DATA: " + typeof(uploadedFileData));
        // console.log("JSON DATA: " + JSON.stringify(uploadedFileData));
      };
    } else if (/\.(csv)$/i.test(file.name)) {
      // file is a CSV file
      console.log("INSIDE .CSV")
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        // process CSV data
        lines = reader.result.split("\n");
        headers = lines[0].split(",");
        const tempData = [];
        for (let i = 1; i < lines.length; i++) {
          const values = lines[i].split(",");
          const row = {};
          for (let j = 1; j < headers.length; j++) {
            row[headers[j]] = values[j];
          }
          tempData.push(row);
        }
        setUploadedFileData(tempData);
        console.log("CHECK 1: "+  JSON.stringify(uploadedFileData))
        uploadedFileData.map((temp, index) => {
          tempData[index] = JSON.parse(
            JSON.stringify(tempData[index]).replace("\\r", "")
          );
          setUploadedFileData(tempData);
          tempData[index].MRP =
            tempData[index].MRP != undefined
              ? JSON.parse(
                  JSON.stringify(tempData[index].MRP).replace("\\r", "")
                )
              : null;
          setUploadedFileData(tempData);
          // console.log("DATA UPLOAD : " + JSON.stringify(tempData[index]))
          //console.log(temp.MRP.replace('\\r',''))
        });
        // console.log("FINAL DATA "+JSON.stringify(uploadedFileData))
      };
    } else {
      // file is not a JSON or CSV file
      console.log("Invalid file format. Please upload a JSON or CSV file.");
    }
    
  }
  console.log("FINAL DATA "+JSON.stringify(uploadedFileData))

  React.useEffect(() => {
    fetch(URL, {
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        setData(res.data);
      });
    console.log("DATA : " + JSON.stringify(data));
  }, []);

  return (
    <>
      <Header category="Page" title="Product Master" />
      <div className="p-8 bg-white m-2 rounded-lg">
        <div className=" inline-flex my-4">
          {/* <input className="py-2 m-0 w-[50%]" type="file" onChange={handleFileUpload} accept=".csv/" /> */}
          <input type="file" onChange={handleFileSelect} />
          <Button className=" mx-2" onClick={displayCsvData}>
            Import
          </Button>
        </div>
        <div>{JSON.stringify(uploadedFileData)}</div>
        {/* {csvData.map((item, index) => (
          <div>
            {JSON.stringify(item)}
          </div>
        ))} */}
        {/* <table>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Manufacturing Date</th>
              <th>Manufacturing Location</th>
              <th>MRP</th>
            </tr>
          </thead>
          <tbody>
            {uploadedFileData.map((product) => (
              <tr key={product.ProductID}>
                <td>{product.ProductID}</td>
                <td>{product.ProductName}</td>
                <td>{product.ProductCategory}</td>
                <td>{product.ManufacturingDate}</td>
                <td>{product.ManufacturingLocation}</td>
                <td>{product.MRP}</td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
    </>
  );
};

export default ProductMaster;

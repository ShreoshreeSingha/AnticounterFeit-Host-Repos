import React, { useState, useEffect } from "react";
import Header from "../../components/Header";

function DistributerScanHistory() {
  const [data, setData] = useState([]);
  const [filterParam, setFilterParam] = useState("");
  // rest of component code
  useEffect(() => {
    fetch("http://20.193.146.8:8080/api/getallbatches")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const filterData = () => data.filter((item) => item.Record.route[3] === "R1");

  return (
    <>
      <Header category="Page" title="WareHouse | Scan History" />
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>actualPath</th>
            <th>batchId</th>
            <th>currentLocation</th>
            <th>route</th>
            <th>soldStatus</th>
          </tr>
        </thead>
        <tbody>
          {filterData().map((item) => (
            <tr key={item.id}>
              <td>{item.Key}</td>
              <td>{item.Record.actualPath}</td>
              <td>{item.Record.batchId}</td>
              <td>{item.Record.currentLocation}</td>
              <td>{item.Record.route}</td>
              <td>{item.Record.soldStatus.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default DistributerScanHistory;

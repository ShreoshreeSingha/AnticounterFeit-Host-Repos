import React, { useState, useEffect } from "react";
import Header from "../../components/Header";

function ScanHistory() {
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
      <div className="m-2 rounded-lg">
      <div class="overflow-hidden bg-white shadow-md">
      <table class=" min-h-[70vh] w-full border-collapse text-left text-sm text-gray-500">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">batchId</th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">actualPath</th>
            {/* <th scope="col" class="px-6 py-4 font-medium text-gray-900">batchId</th> */}
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">currentLocation</th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">route</th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">soldStatus</th>
          </tr>
        </thead>
        <tbody class= "divide-y divide-gray-100 border-t border-gray-100">
          {filterData().map((item) => (
            <tr class="hover:bg-gray-50" key={item.id}>
              <td class="px-3 py-2">{item.Key}</td>
              <td class="px-3 py-2">{item.Record.actualPath}</td>
              {/* <td class="px-3 py-2">{item.Record.batchId}</td> */}
              <td class="px-3 py-2">{item.Record.currentLocation}</td>
              <td class="px-3 py-2">{item.Record.route[0]}-{item.Record.route[1]}-{item.Record.route[2]}-{item.Record.route[3]}</td>
              <td class="px-3 py-2">{item.Record.soldStatus.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
    </>
  );
}
export default ScanHistory;

import React, { useState, useEffect } from 'react';

const Try = ({ data, pageSize }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [displayedData, setDisplayedData] = useState([]);

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / pageSize));
    setDisplayedData(data.slice((currentPage - 1) * pageSize, currentPage * pageSize));
  }, [data, currentPage, pageSize]);

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / pageSize));
    setDisplayedData(data.slice((currentPage - 1) * pageSize, currentPage * pageSize));
  }, [data, currentPage, pageSize]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
        </thead>
        <tbody>
          {displayedData.map((row) => (
            <tr key={row.id}>
              <td>{row.column1}</td>
              <td>{row.column2}</td>
              <td>{row.column3}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {Array.from(Array(totalPages)).map((_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Try;
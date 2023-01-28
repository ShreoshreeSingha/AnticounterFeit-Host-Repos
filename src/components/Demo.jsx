import axios from "axios";
import React, { useEffect } from "react";

const Demo = () => {
  useEffect(() => {
    axios
      .get("https://admin:adminpw/swift-schools-pay-20-197-0-18.loca.lt/", {
        auth: {
          username: "admin",
          password: "adminpw",
        },
        headers: {
          "Content-Type": "application/json",
          "Access-Control-allow-origin": "*",
        },
      })
      .then((response) => {
        setData(response.data.rows);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>hello</div>;
};

export default Demo;

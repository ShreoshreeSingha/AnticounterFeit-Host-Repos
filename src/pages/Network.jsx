import React from "react";
import NetworkGraph from "../components/network/NetworkGraph";

function Network() {
  return (
    <div>
      <h1>Network Graph</h1>
      <div className=" h-[92%] ">
        <NetworkGraph />
      </div>
    </div>
  );
}

export default Network;

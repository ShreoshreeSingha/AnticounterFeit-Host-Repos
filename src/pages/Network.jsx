import React from "react";
import NetworkComponent from "../components/network/NetworkComponent";
import { useStateContext } from "../contexts/ContextProvider";

const Network = () => {
  const { setTitle, setCategory } = useStateContext();
  setTitle("/My Network");
  setCategory("Page");
  return (
    <>
      <div>
        <div className="bg-white m-2 rounded-lg">
          <h1>h</h1>
          <h1>e</h1>
          <h1>l</h1>
        </div>
        <div className="bg-white mx-2 rounded-lg ">
          <NetworkComponent />
        </div>
      </div>
    </>
  );
};

export default Network;

import React from "react";
import Demo from "../components/Demo";
import NetworkComponent from "../components/network/NetworkComponent";
import { useStateContext } from "../contexts/ContextProvider";

const Network = () => {
  const { setTitle, setCategory } = useStateContext();
  setTitle("/My Network");
  setCategory("Page");
  return (
    <>
      <div>
        <div className="mx-2 rounded-lg h-[92vh] ">
          <Demo />
        </div>
      </div>
    </>
  );
};

export default Network;

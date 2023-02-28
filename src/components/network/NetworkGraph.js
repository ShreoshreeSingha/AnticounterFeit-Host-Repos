import React, { useState, useRef, useEffect } from "react";
import { Network } from "vis-network";

import Button from "../UI/Button/Button";

const NetworkGraph = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [isAddNodePopupOpen, setIsAddNodePopupOpen] = useState(false);
  const [newNodeId, setNewNodeId] = useState("");
  const [newNodeName, setNewNodeName] = useState("");
  const [newNodeX, setNewNodeX] = useState(0);
  const [newNodeY, setNewNodeY] = useState(0);
  const [instruction, setInstruction] = useState("");
  const [showInstruction, setShowInstruction] = useState(false);
  const networkContainerRef = useRef(null);

  const addNode = () => {
    const newNode = {
      id: newNodeId,
      label: newNodeName,
      x: newNodeX,
      y: newNodeY,
    };
    setNodes([...nodes, newNode]);
    setIsAddNodePopupOpen(false);
  };

  const handleClosePopup = () => {
    setIsAddNodePopupOpen(false);
  };

  const handleOpenAddNodePopup = (event) => {
    setInstruction("Click anywhere in screen to create a node.")
    setShowInstruction(true);
    const { x, y } = event.pointer.canvas;
    setShowInstruction(false);
    setNewNodeX(x);
    setNewNodeY(y);
    setIsAddNodePopupOpen(true);
  };

  const handleNodeIdChange = (e) => {
    setNewNodeId(e.target.value);
  };

  const handleNodeNameChange = (e) => {
    setNewNodeName(e.target.value);
  };

  const handleNodeXChange = (e) => {
    setNewNodeX(parseInt(e.target.value));
  };

  const handleNodeYChange = (e) => {
    setNewNodeY(parseInt(e.target.value));
  };

  useEffect(() => {
    const networkContainer = networkContainerRef.current;
    if (!networkContainer) return;

    const network = new Network(networkContainer, { nodes, edges }, {});

    const handleAddNode = (event) => {
      if (isAddNodePopupOpen) return;

      handleOpenAddNodePopup(event);
    };

    network.on("click", handleAddNode);

    return () => {
      network.off("click", handleAddNode);
      network.destroy();
    };
  }, [nodes, edges, isAddNodePopupOpen]);

  return (
    <div>
      <Button onClick={handleOpenAddNodePopup}>Add Node</Button>
      {
        showInstruction && (
        <div className=" text-red-600 text-lg">{instruction}</div>
        )
      }
      <div style={{ height: "500px" }} ref={networkContainerRef} />
      {isAddNodePopupOpen && (
        <div className="bg-white shadow-lg rounded-lg w-1/2 h-1/2 fixed top-[20%] left-[25%] z-[5]">
          <h1 className="m-2 p-1 font-semibold text-xl">Fill Node Details</h1>
          <div className=" inline-block">
            <div>
              <input
                type="text"
                value={newNodeId}
                onChange={handleNodeIdChange}
                placeholder="Node ID"
              />
            </div>
            <div>
              <input
                type="text"
                value={newNodeName}
                onChange={handleNodeNameChange}
                placeholder="Node Name"
              />
            </div>
            {/* <div>
              <label>Node X Position:</label>
              <input
                type="number"
                value={newNodeX}
                onChange={handleNodeXChange}
              />
            </div> */}
            {/* <div>
              <label>Node Y Position:</label>
              <input
                type="number"
                value={newNodeY}
                onChange={handleNodeYChange}
              />
            </div> */}
          </div>
          <div className="m-2 p-1">
            <Button onClick={addNode}>Add Node</Button>
            <Button onClick={handleClosePopup}>Cancel</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NetworkGraph;

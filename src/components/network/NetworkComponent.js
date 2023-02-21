import Graph from "react-graph-vis";
import React, { useState } from "react";
import { nodes_data, edges_data } from "../../data/NetworkData";

const options = {
  layout: {
    hierarchical: false,
  },
  // source: {
  //   color: { border: "white" },
  // },
  edges: {
    color: "#000000",
  },
  nodes: {
    icon: {},
  },
  groups: {
    brandParty: {
      shape: "circularImage",
      image: require("../../data/image/logo-edited.png"),
      color: "rgb(255,255,255,1)",
      size: "20",
      x: "40",
    },
    manufacturer: {
      shape: "circularImage",
      image: require("../../data/image/factory-plant.png"),
      color: "rgb(255,255,255,1)",
    },
    retailer: {
      shape: "circularImage",
      image: require("../../data/image/online-shopping.png"),
      color: "rgb(255,255,255,1)",
    },
    distributor: {
      shape: "circularImage",
      image: require("../../data/image/box.png"),
      color: "rgb(255,255,255,1)",
    },
    warehouse: {
      shape: "circularImage",
      image: require("../../data/image/storage-stacks.png"),
      color: "rgb(255,255,255,1)",
    },
  },
};

function randomColor() {
  const red = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  const green = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  const blue = Math.floor(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
  return `#${red}${green}${blue}`;
}

const NetworkComponent = () => {
  const createNode = (x, y) => {
    const color = randomColor();
    setState(({ graph: { nodes, edges }, counter, ...rest }) => {
      const id = counter + 1;
      const from = Math.floor(Math.random() * (counter - 1)) + 1;
      return {
        graph: {
          nodes: [...nodes, { id, label: `Node ${id}`, color, x, y }],
          edges: [...edges, { from, to: id }],
        },
        counter: id,
        ...rest,
      };
    });
  };
  const [state, setState] = useState({
    counter: 5,
    graph: {
      nodes: nodes_data,
      edges: edges_data,
    },
    events: {
      select: ({ nodes, edges }) => {
        console.log("Selected nodes:");
        console.log(nodes);
        console.log("Selected edges:");
        console.log(edges);
        alert("Selected node: " + nodes);
      },
      doubleClick: ({ pointer: { canvas } }) => {
        createNode(canvas.x, canvas.y);
      },
    },
  });
  const { graph, events } = state;
  return (
    <div>
      <Graph
        graph={graph}
        options={options}
        events={events}
        style={{ height: "640px" }}
      />
    </div>
  );
};

export default NetworkComponent;

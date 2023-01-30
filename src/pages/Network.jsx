import Graph from "react-graph-vis";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { SiShopware } from "react-icons/si";
import Header from "../components/Header";

var DIR = "../data/image";

var nodes = null;
var edges = null;
var network = null;

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
      image: require("../data/image/logo-edited.png"),
      color: "rgb(255,255,255,1)",
      size: "20",
      x: "40",
    },
    manufacturer: {
      shape: "circularImage",
      image: require("../data/image/factory-plant.png"),
      color: "rgb(255,255,255,1)",
    },
    retailer: {
      shape: "circularImage",
      image: require("../data/image/online-shopping.png"),
      color: "rgb(255,255,255,1)",
    },
    distributor: {
      shape: "circularImage",
      image: require("../data/image/box.png"),
      color: "rgb(255,255,255,1)",
    },
    warehouse: {
      shape: "circularImage",
      image: require("../data/image/storage-stacks.png"),
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

const Network = () => {
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
      nodes: [
        {
          id: 1,
          label: "Brand Party",
          group: "brandParty",
        },
        {
          id: 2,
          label: "Manufacturer 1",
          group: "manufacturer",
        },
        {
          id: 3,
          label: "Manufacturer 2",
          group: "manufacturer",
        },
        { id: 4, label: "Warehouse 1", group: "warehouse" },
        { id: 5, label: "Warehouse 2", group: "warehouse" },
        { id: 6, label: "Warehouse 3", group: "warehouse" },
        { id: 7, label: "Warehouse 4", group: "warehouse" },
        {
          id: 8,
          label: "Distributor 1",
          group: "distributor",
        },
        {
          id: 9,
          label: "Distributor 2",
          group: "distributor",
        },
        {
          id: 10,
          label: "Distributor 3",
          group: "distributor",
        },
        {
          id: 11,
          label: "Distributor 4",
          group: "distributor",
        },
        {
          id: 12,
          label: "Distributor 5",
          group: "distributor",
        },
        {
          id: 13,
          label: "Distributor 6",
          group: "distributor",
        },
        {
          id: 14,
          label: "Distributor 7",
          group: "distributor",
        },
        {
          id: 15,
          label: "Distributor 8",
          group: "distributor",
        },
        { id: 16, label: "Retailer 1", group: "retailer" },
        { id: 17, label: "Retailer 2", group: "retailer" },
        { id: 18, label: "Retailer 3", group: "retailer" },
        { id: 19, label: "Retailer 4", group: "retailer" },
        { id: 20, label: "Retailer 5", group: "retailer" },
        { id: 21, label: "Retailer 6", group: "retailer" },
        { id: 22, label: "Retailer 7", group: "retailer" },
        { id: 23, label: "Retailer 8", group: "retailer" },
        { id: 24, label: "Retailer 9", group: "retailer" },
        { id: 25, label: "Retailer 10", group: "retailer" },
        { id: 26, label: "Retailer 11", group: "retailer" },
        { id: 27, label: "Retailer 12", group: "retailer" },
        { id: 28, label: "Retailer 13", group: "retailer" },
        { id: 29, label: "Retailer 14", group: "retailer" },
        { id: 30, label: "Retailer 15", group: "retailer" },
        { id: 31, label: "Retailer 16", group: "retailer" },
      ],
      edges: [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 },
        { from: 3, to: 6 },
        { from: 3, to: 7 },
        { from: 4, to: 8 },
        { from: 4, to: 9 },
        { from: 5, to: 10 },
        { from: 5, to: 11 },
        { from: 6, to: 12 },
        { from: 6, to: 13 },
        { from: 7, to: 14 },
        { from: 7, to: 15 },

        { from: 6, to: 15 },
        { from: 7, to: 15 },

        { from: 8, to: 16 },
        { from: 8, to: 17 },
        { from: 9, to: 18 },
        { from: 9, to: 19 },
        { from: 10, to: 20 },
        { from: 10, to: 21 },
        { from: 11, to: 22 },
        { from: 11, to: 23 },
        { from: 12, to: 24 },
        { from: 12, to: 25 },
        { from: 13, to: 26 },
        { from: 13, to: 27 },
        { from: 14, to: 28 },
        { from: 14, to: 29 },
        { from: 15, to: 30 },
        { from: 15, to: 31 },
      ],
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
      <Header category="Page" title="Network" />
      <Graph
        graph={graph}
        options={options}
        events={events}
        style={{ height: "640px" }}
      />
    </div>
  );
};

export default Network;

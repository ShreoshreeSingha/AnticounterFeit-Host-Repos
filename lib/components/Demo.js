import React, { useState } from "react";
import Graph from "react-graph-vis";
import Button from "./UI/Button/Button";
function Demo() {
  const [graph, setGraph] = useState({
    nodes: [{
      id: 1,
      label: "Node 1"
    }, {
      id: 2,
      label: "Node 2"
    }, {
      id: 3,
      label: "Node 3"
    }],
    edges: [{
      from: 1,
      to: 2
    }, {
      from: 2,
      to: 3
    }]
  });
  const options = {
    layout: {
      hierarchical: false
    },
    edges: {
      color: "#000000"
    },
    height: "500px"
  };
  const events = {
    select: function (event) {
      const {
        nodes,
        edges
      } = event;
      console.log("Selected nodes:", nodes);
      console.log("Selected edges:", edges);
    }
  };
  const createNode = () => {
    const newNode = {
      id: graph.nodes.length + 1,
      label: `Node ${graph.nodes.length + 1}`
    };
    setGraph({
      nodes: [...graph.nodes, newNode],
      edges: [...graph.edges]
    });
  };
  const updateNode = (id, newLabel) => {
    const nodes = graph.nodes.map(node => {
      if (node.id === id) {
        return {
          ...node,
          label: newLabel
        };
      }
      return node;
    });
    setGraph({
      nodes,
      edges: graph.edges
    });
  };
  const deleteNode = id => {
    const nodes = graph.nodes.filter(node => node.id !== id);
    const edges = graph.edges.filter(edge => edge.from !== id && edge.to !== id);
    setGraph({
      nodes,
      edges
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Graph, {
    graph: graph,
    options: options,
    events: events
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    onClick: createNode
  }, "Create Node"), /*#__PURE__*/React.createElement(Button, {
    onClick: () => updateNode(1, "Updated Node")
  }, "Update Node"), /*#__PURE__*/React.createElement(Button, {
    onClick: () => deleteNode(1)
  }, "Delete Node")));
}
export default Demo;
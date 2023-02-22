import React, { useState } from "react";
import Graph from "react-graph-vis";

import Button from "./UI/Button/Button";
import { nodes_data, edges_data } from "../data/NetworkData";

function Demo() {
  const [graph, setGraph] = useState({
    nodes: nodes_data,
    edges: edges_data,
  });

  const options = {
    edges: {
      color: "#000000",
    },
    layout: {
      hierarchical: false,
      improvedLayout: true,
    },
    edges: {
      color: "#000000",
    },
    height: "500px",
    interaction: {
      dragNodes: false,
    },
    nodes: {
      shape: "box",
    },
    physics: false,
    configure: {
      enabled: false,
    },
      manipulation: {
    enabled: true,
    initiallyActive: true,
    addNode: false,
    addEdge: true,
    editEdge: true,
    deleteNode: true,
    deleteEdge: true,
    controlNodeStyle: {
      // The style for the control node
      shape: "dot",
      size: 6,
      color: {
        background: "#ffffff",
        border: "#000000"
      }
    }
  },
  interaction: {
    navigationButtons: true,
    

  },
  };

  const events = {
    select: function (event) {
      const { nodes, edges } = event;
      console.log("Selected nodes:", nodes);
      console.log("Selected edges:", edges);
    },
  // doubleClick: function (event) {
  //   const { nodes } = event;
  //   if (nodes.length > 0) {
  //     const nodeId = nodes[0];
  //     const updatedGraph = { ...graph };
  //     const node = updatedGraph.nodes.find((n) => n.id === nodeId);
  //     if (node.hidden) {
  //       node.hidden = false;
  //       updatedGraph.edges.push(...node.edges);
  //     } else {
  //       node.hidden = true;
  //       updatedGraph.edges = updatedGraph.edges.filter(
  //         (edge) => edge.from !== nodeId && edge.to !== nodeId
  //       );
  //     }
  //     setGraph(updatedGraph);
  //   }
  // },
  };

  const createNode = () => {
    const newNode = {
      id: graph.nodes.length + 1,
      label: `Node ${graph.nodes.length + 1}`,
    };
    setGraph({ nodes: [...graph.nodes, newNode], edges: [...graph.edges] });
  };

  const updateNode = (id, newLabel) => {
    const nodes = graph.nodes.map((node) => {
      if (node.id === id) {
        return { ...node, label: newLabel };
      }
      return node;
    });
    setGraph({ nodes, edges: graph.edges });
  };

  const deleteNode = (id) => {
    const nodes = graph.nodes.filter((node) => node.id !== id);
    const edges = graph.edges.filter(
      (edge) => edge.from !== id && edge.to !== id
    );
    setGraph({ nodes, edges });
  };

  const addEdge = (from, to) => {
    const newEdge = { from, to };
    setGraph((prevGraph) => ({
      nodes: prevGraph.nodes,
      edges: [...prevGraph.edges, newEdge],
    }));
  };

  const removeEdge = (from, to) => {
    setGraph((prevGraph) => ({
      nodes: prevGraph.nodes,
      edges: prevGraph.edges.filter(
        (edge) => edge.from !== from || edge.to !== to
      ),
    }));
  };

  return (
    <>
      <div>
        <Graph graph={graph} options={options} events={events} />
      </div>
      <div>
        <Button onClick={createNode}>Create Node</Button>
        <Button onClick={() => updateNode(1, "Updated Node")}>
          Update Node
        </Button>
        <Button onClick={() => deleteNode(1)}>Delete Node</Button>
        <Button onClick={() => addEdge(1, 3)}>Add Edge</Button>
        <Button onClick={() => removeEdge(1, 2)}>Remove Edge</Button>
      </div>
    </>
  );
}

export default Demo;

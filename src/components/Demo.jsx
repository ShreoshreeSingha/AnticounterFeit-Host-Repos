import React, { useState } from "react";
import Graph from "react-graph-vis";

import Button from './UI/Button/Button'

const Demo = () => {
  const [graph, setGraph] = useState({
    nodes: [
      { id: 1, label: "Node 1" },
      { id: 2, label: "Node 2" },
      { id: 3, label: "Node 3" },
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 3, to: 1 },
    ],
  });

  const [formState, setFormState] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleNodeSubmit = (event) => {
    event.preventDefault();
    const newNode = {
      id: graph.nodes.length + 1,
      label: formState.label,
    };
    setGraph({
      ...graph,
      nodes: [...graph.nodes, newNode],
    });
    setFormState({});
  };

  const handleNodeUpdate = (event, nodeId) => {
    event.preventDefault();
    const updatedNode = {
      ...graph.nodes.find((node) => node.id === nodeId),
      label: formState.label,
    };
    setGraph({
      ...graph,
      nodes: graph.nodes.map((node) =>
        node.id === nodeId ? updatedNode : node
      ),
    });
    setFormState({});
  };

  const handleNodeDelete = (event, nodeId) => {
    event.preventDefault();
    setGraph({
      ...graph,
      nodes: graph.nodes.filter((node) => node.id !== nodeId),
      edges: graph.edges.filter(
        (edge) => edge.from !== nodeId && edge.to !== nodeId
      ),
    });
    setFormState({});
  };

  const options = {
    layout: {
      hierarchical: false,
    },
    edges: {
      color: "#000000",
    },
  };

  return (
    <div>
      <div className="w-48 inline-flex">
        <form onSubmit={handleNodeSubmit}>
          <label>
            Label:
            <input
            className="w-36"
              type="text"
              name="label"
              value={formState.label || ""}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Add Node</button>
        </form>
        {graph.nodes.map((node) => (
          <div key={node.id}>
            <form onSubmit={(event) => handleNodeUpdate(event, node.id)}>
              <label>
                Label:
                  <input
                    className="w-36"
                    type="text"
                    name="label"
                    value={formState.label || node.label}
                    onChange={handleInputChange}
                  />
              </label>
              <button type="submit">Update Node</button>
            </form>
            <button onClick={(event) => handleNodeDelete(event, node.id)}>
              Delete Node
            </button>
          </div>
        ))}
      </div>
      <div className="h-[100vh]">
        <Graph graph={graph} options={options} />
      </div>
    </div>
  );
};

export default Demo;

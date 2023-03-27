import React, { useState } from "react";
const EdgeForm = ({
  edge,
  onUpdate,
  onDelete
}) => {
  console.log("Edge: " + JSON.stringify(edge.label));
  const [label, setLabel] = useState(edge.label);
  const [weight, setWeight] = useState(edge.weight);
  const handleSubmit = event => {
    event.preventDefault();
    onUpdate({
      label,
      weight
    });
  };
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "label"
  }, "Label:"), /*#__PURE__*/React.createElement("input", {
    id: "label",
    value: label,
    onChange: event => setLabel(event.target.value)
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "weight"
  }, "Weight:"), /*#__PURE__*/React.createElement("input", {
    id: "weight",
    value: weight,
    onChange: event => setWeight(event.target.value)
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Update"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onDelete
  }, "Delete"));
};
export default EdgeForm;
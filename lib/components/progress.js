const ProgressBar = props => {
  const {
    bgcolor,
    completed
  } = props;
  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50
  };
  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right"
  };
  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: containerStyles
  }, /*#__PURE__*/React.createElement("div", {
    style: fillerStyles
  }, /*#__PURE__*/React.createElement("span", {
    style: labelStyles
  }, `${completed}%`)));
};
export default ProgressBar;
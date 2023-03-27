import React from "react";
import { useEffect } from "react";
import { GiConsoleController } from "react-icons/gi";
import ProgressBar from "../components/progress";
const URL = "http://20.193.146.8:8080/api/history/ffe20abfb5da1497f079cd44a422a1846c9eee98";
const Tracker = () => {
  const [currentLocation, setCurrentLocation] = React.useState("");
  const [path, setPath] = React.useState([]);
  const [distributorColor, setDistributorColor] = React.useState("red");
  const [storageColor, setStorageColor] = React.useState("red");
  const [retailerColor, setRetailerColor] = React.useState("red");
  const [distributorIcon, setDistributorIcon] = React.useState(100);
  const [storageIcon, setStorageIcon] = React.useState(100);
  const [manufacturerIcon, setManufacturerIcon] = React.useState(100);
  const [retailerIcon, setRetailerIcon] = React.useState(100);
  const WAIT_TIME = 2000;
  useEffect(() => {
    const id = setInterval(() => {
      fetch(URL, {
        headers: {
          "content-type": "application/json",
          Accept: "application/json"
        }
      }).then(res => res.json()).then(data => {
        console.log(data);
        const {
          Value
        } = data[0];
        console.log("VALUE : " + Value);
        console.log("LOCATION : " + Value.currentLocation);
        setCurrentLocation(Value.currentLocation);
        handleChange(Value.currentLocation);
      });
    }, WAIT_TIME);
    return () => clearInterval(id);
  }, [storageColor, distributorColor, retailerColor]);
  const handleChange = value => {
    if (value === "Distributor-1") {
      setDistributorColor("green");
      setRetailerColor("red");
      setStorageColor("red");
      setDistributorIcon(150);
      setManufacturerIcon(100);
      setRetailerIcon(100);
      setStorageIcon(100);
    } else if (value === "Storage-2") {
      setDistributorColor("green");
      setRetailerColor("red");
      setStorageColor("green");
      setDistributorIcon(100);
      setManufacturerIcon(100);
      setRetailerIcon(100);
      setStorageIcon(150);
    } else if (value === "Retailer-4") {
      setDistributorColor("green");
      setRetailerColor("green");
      setStorageColor("green");
      setDistributorIcon(100);
      setManufacturerIcon(100);
      setRetailerIcon(150);
      setStorageIcon(100);
    } else if (value === 'Manufacturer') {
      setDistributorIcon(100);
      setManufacturerIcon(150);
      setRetailerIcon(100);
      setStorageIcon(100);
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    class: "grid grid-rows-3 grid-cols-6 h-[75%] w-[75%] mt-8",
    style: {
      position: "relative",
      left: "10%",
      right: "15%",
      top: "10%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    class: ""
  }), /*#__PURE__*/React.createElement("div", {
    class: "",
    style: {
      alignSelf: "center",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: require("../data/image/box.png"),
    height: distributorIcon,
    width: distributorIcon
  })), /*#__PURE__*/React.createElement("div", {
    class: ""
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "10%",
      backgroundColor: storageColor,
      marginTop: "45%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    class: "",
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "10%",
      width: "45%",
      backgroundColor: storageColor,
      marginTop: "45%",
      position: "relative",
      zIndex: "999"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "59%",
      width: "10%",
      backgroundColor: storageColor,
      marginTop: "45%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    class: ""
  }), /*#__PURE__*/React.createElement("div", {
    class: "",
    style: {
      alignSelf: "center",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: require("../data/image/retailer.png"),
    height: retailerIcon,
    width: retailerIcon
  })), /*#__PURE__*/React.createElement("div", {
    class: ""
  }), /*#__PURE__*/React.createElement("div", {
    class: "",
    style: {}
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: "10%",
      backgroundColor: distributorColor,
      marginLeft: "45%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    class: ""
  }), /*#__PURE__*/React.createElement("div", {
    class: "",
    style: {}
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: "10%",
      backgroundColor: storageColor,
      marginLeft: "45%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    class: ""
  }), /*#__PURE__*/React.createElement("div", {
    class: "",
    style: {}
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: "10%",
      backgroundColor: retailerColor,
      marginLeft: "45%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    class: "",
    style: {
      alignSelf: "center",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: require("../data/image/warehouse.png"),
    height: manufacturerIcon,
    width: manufacturerIcon
  })), /*#__PURE__*/React.createElement("div", {
    class: " ",
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "10%",
      width: "45%",
      backgroundColor: distributorColor,
      marginTop: "55.5%",
      position: "relative",
      zIndex: "999"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "65.5%",
      width: "10%",
      backgroundColor: distributorColor,
      paddingBottom: "45%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    class: ""
  }), /*#__PURE__*/React.createElement("div", {
    class: "",
    style: {
      alignSelf: "center",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: require("../data/image/manufacturer.png"),
    height: storageIcon,
    width: storageIcon
  })), /*#__PURE__*/React.createElement("div", {
    class: ""
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "10%",
      backgroundColor: retailerColor,
      marginTop: "55.5%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    class: " ",
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "10%",
      width: "45%",
      backgroundColor: retailerColor,
      marginTop: "55.5%",
      position: "relative",
      zIndex: "999"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "65.5%",
      width: "10%",
      backgroundColor: retailerColor,
      paddingBottom: "45%"
    }
  }))));
};
export default Tracker;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from "react";
import { useParams } from 'react-router-dom';
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import { Box, Typography } from "@material-ui/core";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import LoadingScreen from "../components/LoadingScreen.js";
import "./prodTracker.css";
import Header from "../components/Header.jsx";
function Tracker() {
  // const batchId = props.location.state.batchId
  let batchId = useParams();
  console.log("PROPS: " + batchId.id);
  const [currentLocation, setCurrentLocation] = React.useState("");
  const [activeStep, setActiveStep] = React.useState(0);
  const [location, setLocation] = React.useState("");
  const [path, setPath] = React.useState([]);
  const [load, upadateLoad] = React.useState(true);
  const [ccc, setCcc] = React.useState("");
  const URL = "http://20.193.146.8:8080/api/history/" + batchId.id;
  const WAIT_TIME = 2000;

  // const { batchId } = match.state;

  // Allowed extensions for input file

  // React.useEffect(() => {
  //   const id = setInterval(() => {
  //     fetch(URL, {
  //       method: 'GET',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       }})
  //     .then(res => res.json())
  //     .then(data =>
  //         {
  //           const {response} = data;
  //           const route = JSON.stringify(response).slice(1,-1).replace(/\\/g,'')
  //           const routeArr = JSON.parse(route)[0]['Value']['route']

  //           setPath(routeArr)
  //           path.map(loc => {
  //             if(location === loc){
  //               setActiveStep(path.indexOf(location))
  //             }
  //           })
  //           setLocation(JSON.parse(route)[0]['Value']['currentLocation'])
  //       })
  //       .catch(err=>{
  //         console.log(err);
  //       })
  //   }, WAIT_TIME);
  //   return () => clearInterval(id);
  //   // const rec = require('../assets/Product_Master.csv')
  //   // csvtojson(rec);
  // }, [path, location, activeStep]);

  React.useEffect(() => {
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
        console.log("VALUE : " + JSON.stringify(Value));
        console.log("LOCATION : " + Value.currentLocation);
        setCurrentLocation(Value.currentLocation);
        setPath(Value.route);
        console.log("PATH : " + path);
        setLocation(data[0]['Value']['currentLocation']);
        console.log("Location: " + location);
        path.map(loc => {
          if (location === loc) {
            setActiveStep(path.indexOf(location));
            console.log('INDEX OF : ' + path.indexOf(location));
          }
        });
      });
    }, WAIT_TIME);
    return () => clearInterval(id);
  }, [path, location, activeStep]);
  const steps = [{
    label: "",
    description: `A person or company that produces finished goods from raw materials by using various tools,\n 
      equipment, and processes, and then sells the goods to consumers, wholesalers, distributors, retailers,\n 
      or to other manufacturers for the production of more complex goods`
  }, {
    label: "",
    description: `In the distributorship process, a distributor buys goods from a manufacturer and sells the goods to consumers, 
        sometimes through stores in the distribution channel. 
        Depending on the product or service, distributors can sell goods straight to consumers or to other businesses`
  }, {
    label: "",
    description: `Storage is the activity of storing products at warehouses and logistics centers. \n
      Its role is to provide a steady supply of goods to the market to fill the temporal gap between producers and consumers.\n 
      It also plays an important role in maintaining quality at warehouses and logistics centers and value of products`
  }, {
    label: "",
    description: `A retailer, or merchant, is an entity that sells goods such as clothing, groceries, \n
      or cars directly to consumers through various distribution channels with the goal of earning a profit.\n 
      This merchant can operate in a physical building or online.`
  }];

  //   const [csvdata, setCsvData] = React.useState([]);

  //     const csvtojson = (dtr) => {
  //       Papa.parse(dtr, {
  //         header: true,
  //         complete: function (results) {
  //           setCsvData(results.data)
  //           console.log(csvdata.length)
  //         },

  //     });
  //     // fetch('../assets/Location Master.csv')
  //     // .then((cdd) => {
  //     //   console.log(cdd)
  //     // })
  // }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    category: "/Page",
    title: "Product Tracking Status"
  }), /*#__PURE__*/React.createElement("section", {
    id: "trackerbg"
  }, currentLocation === "" ? /*#__PURE__*/React.createElement(LoadingScreen, {
    load: load
  }) : /*#__PURE__*/React.createElement(LoadingScreen, {
    load: !load
  }), /*#__PURE__*/React.createElement("div", {
    className: "overflow-y-scroll overflow-auto h-[80vh] ml-2",
    style: {}
  }, /*#__PURE__*/React.createElement(Stepper, {
    activeStep: activeStep,
    orientation: "vertical",
    id: "stepper"
  }, path.map((label, index) => {
    const stepProps = {};
    const labelProps = {};
    return /*#__PURE__*/React.createElement(Step, _extends({
      key: label
    }, stepProps), /*#__PURE__*/React.createElement(StepLabel, _extends({}, labelProps, {
      id: "stepLabel"
    }), label), /*#__PURE__*/React.createElement(StepContent, null));
  })))));
}
export default Tracker;
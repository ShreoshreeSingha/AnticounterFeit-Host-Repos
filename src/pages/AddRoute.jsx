import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import {
  AiFillMinusCircle,
  AiOutlineMinus,
  AiOutlineArrowRight,
} from "react-icons/ai";
import Header from "../components/Header";
import Button from "../components/UI/Button/Button";
import Warning from "../components/Warning";
import { bodData } from "../data/bodData";
import { AiOutlineClose } from "react-icons/ai";
import { useStateContext } from "../contexts/ContextProvider";



const apiPostUrl = "http://20.193.146.8:8080/api/data/bod";
const apiGetUrl = "http://20.193.146.8:8080/api/updateRoute";

const WAIT_TIME = 2000;

const AddRoute = (props) => {
  const { setTitle , setCategory } = useStateContext();
  const [numSelects, setNumSelects] = useState(2);
  const [selectedValues, setSelectedValues] = useState([]);
  const [showWarning, setShowWarning] = React.useState(false);
  const [data, setData] = useState([]);
  const [responseData, setResponseData] = useState([]);
  const [routeId, setRouteId] = React.useState("");
  const [checkpoints, setCheckpoints] = React.useState("");
  const [totalDistance, setTotalDistance] = React.useState("");
  const [avgTimeTaken, setAvgTimeTaken] = React.useState("");
  const [route, setRoute] = useState([]);
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
    { value: "option6", label: "Option 6" },
  ];

  const onClick = props.onCloseRecieved;

  setTitle('/Add Route')
  setCategory('Data')


  const addSelect = () => {
    setShowWarning(false);
    setNumSelects(numSelects + 1);
    setSelectedValues([selectedValues.slice(-1, 0)]);
    console.log("INSIDE ADD SELECT");
  };

  const removeSelect = () => {
    if (numSelects <= 2) {
      setShowWarning(true);
    }
    if (numSelects > 2) {
      setNumSelects(numSelects - 1);
      setSelectedValues([selectedValues.slice(0, -1)]);
    }
    console.log("INSIDE REMOVE SELECT");
  };

  const handleChange = (index) => (event) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = event.target.value;
    setSelectedValues(newSelectedValues);
    console.log("INSIDE HANDLE CHANGE");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //the distance & time should be made dynamic accordin to the api defination
    const newRoute = selectedValues.filter((value) => value !== undefined);
    const jsonBody = {
      route: newRoute,
      totalDistance: "100km",
      avgTimeTaken: "28hrs",
    };
    console.log("Selected values:", newRoute);
    console.log("Json Body", jsonBody);
    apicall(jsonBody);
  };

  // const route = ["Manufacturer", "Distributor-1", "Storage-2", "Retailer-4"];
  // const totalDistance = "100Kms";
  // const avgTimeTaken = "78hrs";

  // const jsonBody = {
  //   route: route,
  //   totalDistance: "100Kms",
  //   avgTimeTaken: "78hrs",
  // };

  // API CALL TO FETCH BOD DATA
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(apiPostUrl);
      const json = await response.json();
      setData(json.data);
      console.log(`DATA : ${JSON.stringify(data.data[0].startingPoint)}`);
    };
    fetchData();
  }, []);

  // API CALL TO SEND ADD ROUTE REQUEST
  const apicall = (body) => {
    // API CALL
    fetch(apiGetUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((d) => {
        setResponseData(d);
        // setRouteId(d.routeId);
        // setCheckpoints(d.checkpoints);
        // setTotalDistance(d.totalDistance);
        // setAvgTimeTaken(d.avgTimeTaken);
        console.log(`DATA TYPE OF : ${typeof responseData}`);
        console.log(d);
      });
  };

  return (
    <>
    <div className="bg-white shadow-lg rounded-lg w-1/2 h-3/3 fixed top-[10%] left-[25%] z-[5]">
      <button
        className="absolute top-0 right-0 p-4 text-xl hover:text-red-600 "
        onClick={onClick}
      >
        <AiOutlineClose />
      </button> 
      {routeId == "" ? (
        <>
          {/* <Header category="Page" title="Add Route" /> */}
          <div className="mx-12 my-4">
            {data ? (
              <form onSubmit={handleSubmit}>
                <button
                  className="rounded-full bg-hover-bg p-1 hover:bg-[#3497c1] mr-2 "
                  onClick={removeSelect}
                >
                  {" "}
                  <AiOutlineMinus className="text-3xl" />
                </button>
                <button
                  className="rounded-full bg-hover-bg p-1 hover:bg-[#3497c1] mr-2"
                  onClick={addSelect}
                >
                  <IoMdAdd className="text-3xl" />
                </button>
                <br />
                <br />
                {showWarning && (
                  <div>
                    <Warning content="Warning: You must add atleast 2 location." />
                  </div>
                )}
                {Array.from({ length: numSelects }, (_, i) => (
                  <select
                    key={i}
                    value={selectedValues[i]}
                    onChange={handleChange(i)}
                    className="rounded-lg text-base md:text-lg px-[5%] py-3 mr-2 mt-2"
                  >
                    {data.map((option) => (
                      <option
                        key={option.startingPoint}
                        value={option.startingPoint}
                      >
                        {option.startingPoint}
                      </option>
                    ))}
                  </select>
                ))}
                <br />
                <br />
                <h1 className="font-semibold">
                  Selected values: [{selectedValues.join(", ")}]
                </h1>
                <h1 className="font-semibold">
                  Total checkpoints: {numSelects}
                </h1>
              </form>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <Button
            type="submit"
            className="absolute bottom-0 left-0 m-12"
            onClick={handleSubmit}
            // onClick={() =>
            //   apicall({
            //     route: JSON.stringify(route),
            //     totalDistance: JSON.stringify(totalDistance),
            //     avgTimeTaken: JSON.stringify(avgTimeTaken),
            //   })
            // }
          >
            Create
          </Button>
        </>
      ) : (
        <div className="flex-col flex text-center mx-24 absolute top-1/8 left-1/8">
          <div>
            <p className="mt-16">Response Message : </p>
          </div>
          <div>
            {/* <p className="mt-4">Route Id : {routeId}</p>
              <p className="mt-4">Checkpoints : {checkpoints}</p>
              <p className="mt-4">Total Distance : {totalDistance}</p>
              <p className="mt-4">Average Time Taken : {avgTimeTaken}</p> */}
          </div>
          <div className="pt-10 ml-[29%]">
            {batchId === null ? (
              "Generated Route Details Will be Displayed Here"
            ) : (
              // <QRCode value={batchId} size={200} />
              <h1>Check!</h1>
            )}
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default AddRoute;

import React from "react";
import Button from "../components/UI/Button/Button";
import QRCode from "qrcode.react";
const CreateBatch = () => {
  const [data, setData] = React.useState();
  const [msg, setMsg] = React.useState("");
  const [batchId, setbatchId] = React.useState("");
  const [base64, setbase64] = React.useState("");
  const route = ["Manufacturer", "Storage-96", "Distributor-15", "Retailer-99"];
  const apiUrl = "https://early-feet-pick-49-37-250-69.loca.lt/api/addbatch";

  const jsonBody = {
    route: route,
  };

  const apicall = () => {
    //API CALL
    fetch(apiUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonBody),
    })
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setMsg(d.msg);
        setbatchId(d.batchId);
        setbase64(d.base64code);
        console.log("DATA TYPE OF : " + typeof data);
      });
  };

  return (
    <>
      {batchId === "" ? (
        <div>
          <div>
            <h1 className="pl-12 pt-10 text-3xl">New Batch</h1>
          </div>
          <h1 className="pl-12 pt-6 pb-4">Select Route</h1>
          <div>
            <form className="inline-flex items-center w-1/2 ml-12" >
            <select class="border-l border-t border-b border-gray-200 rounded-l-md text-base md:text-lg px-[50%] py-4 mr-12">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            </form>
            <Button
              className="ml-16"
              onClick={() => apicall({ route: JSON.stringify(route) })}
            >
              Create
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className="bg-white flex-col flex text-center mx-24">
            <div>
              <p className="mt-16">Response Message : {msg}</p>
            </div>
            <div>
              <p className="mt-4">Batch ID : {batchId}</p>
            </div>
            <div className="pt-10 ml-[29%]">
              {batchId === null ? "Generated QR Code Will be Displayed Here" : <QRCode value={batchId} size={200} />}
            </div>
          </div>
        </>
      )}
      {/* <div>
        <h1 className="p-10 text-3xl">New Batch</h1>
      </div>
      <h1 className="pl-10">Select Route</h1>
      <div className="inline-flex items-center ml-10">
        
       { batchId === '' ? (
            <>
            <div>
              <h1 className="p-10 text-3xl">New Batch</h1>
            </div>
            <h1 className="pl-10">Select Route</h1>
            <div className="inline-flex items-center ml-10">
              <select class="border-l border-t border-b border-gray-200 rounded-l-md w-1/2 text-base md:text-lg px-80 py-3 mr-8">
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <Button class="bg-orange-500 h-12 hover:bg-orange-600 hover:border-orange-600 text-white font-bold capitalize px-3 py-2 text-base md:text-lg rounded-r-md border-t border-r border-b border-orange-500"
              onClick={apicall({'route' : JSON.stringify(route)})}
              >
                Create
              </Button>
            </div>
          </>
       ) : (
        <div className="bg-white absolute top-[50%] left-0">
          <div>
            <p>{msg}</p>
          </div>
          <div>
            <p>{batchId}</p>
          </div>
          <div>
            { batchId === null ? '' :<QRCode value={batchId} size={200} />}  
          </div>
        </div>
       )}
        
      </div> */}
    </>
  );
};

export default CreateBatch;

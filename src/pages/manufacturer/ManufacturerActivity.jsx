import React from "react";
import Header from "../../components/Header";
import "../AdminActivity.css";
import ROUTE from "../../data/GIF/way.gif";
import EMP from "../../data/GIF/user.gif";
import USER from "../../data/GIF/customer.gif";
import { NavLink } from "react-router-dom";



const cardList = [
//   {
//       icon: EMP,
//       name: "Incoming Batch History",
//       path: "/manufacturerincomingBatch"
      
//   },
  {
      icon: ROUTE,
      name: "Outgoing Batch History",
      path: "/manufacturerOutgoingHistory"
   
  },
  {
      icon: USER,
      name: "ScanHistory",
      path: "/manufacturerScanHistory"
  },
];

const ManufacturerActivity = () => {
  return (
  <>
    <div>
      <Header category="Page" title="Warehouse Activity | Batch History" />
      <div>
          <div className="container">
            {cardList.map((item, index) => (
              <div>
                <NavLink className="card" key={index} to={item.path}>
                  <div className="content">
                    <div className="imgBx">
                    <img src={item.icon}></img>
                    </div> 
                  </div> 
                  <div className="sci">
                    <p>
                        <h1>{item.name}</h1>
                    </p>
                  </div>
                </NavLink>
                {/* <h1>{item.name}</h1> */}
                </div>
              ))}
          </div>
      </div>
    </div>
  </>
  );
};

export default ManufacturerActivity;

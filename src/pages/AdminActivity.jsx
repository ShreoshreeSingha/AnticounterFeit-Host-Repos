import React from "react";
import Header from "../components/Header";
import "./AdminActivity.css";
import ROUTE from "../data/GIF/way.gif";
import EMP from "../data/GIF/user.gif";
import USER from "../data/GIF/customer.gif";



const cardList = [
  {
      icon: EMP,
      name: "generate user ID",
      
  },
  {
    icon: ROUTE,
    name: "RE-Route",
   
  },
  {
    icon: USER,
    name: "User Details",
    
  },
]

const AdminActivity = () => {
  return (
  <>
    <div>
      <Header category="Page" title="Admin Activity" />
      <div>
          <div className="container">
            {cardList.map((item, index) => (
                <div className="card">
                  <div className="content">
                    <div className="imgBx">
                    <img src={item.icon}></img>
                    </div> 
                  </div> 
                  <ul className="sci">
                    <li>
                      <a href="/registerUser">{item.name}</a>
                    </li>
                  </ul>
                </div>
              ))}
          </div>
      </div>
    </div>
  </>
  );
};

export default AdminActivity;

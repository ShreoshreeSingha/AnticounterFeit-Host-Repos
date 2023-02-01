import React from "react";
import Header from "../components/Header";
import "./AdminActivity.css";
import ROUTE from "../data/GIF/way.gif";
import EMP from "../data/GIF/user.gif";
import USER from "../data/GIF/customer.gif";



const AdminActivity = () => {
  return (
  <>
    <div>
      <Header category="Page" title="Admin Activity" />
      <div>
          <div class="container">
            <div class="card">
              <div class="content">
                <div class="imgBx">
                  <img src={EMP}></img>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a href="/registerUser">Generate User Id</a>
                </li>
              </ul>
            </div>
            <div class="card">
              <div class="content">
                <div class="imgBx">
                  <img src={ROUTE}></img>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a href="/registerUser">Re-Route</a>
                </li>
              </ul>
            </div>
            <div class="card">
              <div class="content">
                <div class="imgBx">
                  <img src={USER}></img>
                </div>
              </div>
              <ul class="sci">
                <li>
                  <a href="/registerUser">User History</a>
                </li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  </>
  );
};

export default AdminActivity;

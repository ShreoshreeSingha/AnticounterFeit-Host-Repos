import React, { useState, useEffect, useContext } from "react";
import Home from "./components/Home/Home";
import HomeAdmin from "./pages/admin/HomeAdmin";
import HomeManufacturer from "./pages/manufacturer/HomeManufacturer";
import HomeDistributor from "./pages/distributer/HomeDistributor";
import HomeStorage from "./pages/storage/HomeStorage";
import HomeRetailer from "./pages/retailer/HomeRetailer";
import Login from "./components/Login/Login";
import { AuthContext } from "./contexts/auth-context";

function App() {
  const { isAuth, userRole, login } = useContext(AuthContext);
  return (
    <>
      <div>{!isAuth && <Login onLogin={login} />}</div>
      {isAuth && (
        <div>
          {userRole === "admin@gmail.com" ? <HomeAdmin /> : ""}
          {userRole === "manufacturer@gmail.com" ? <HomeManufacturer /> : ""}
          {userRole === "distributor@gmail.com" ? <HomeDistributor /> : ""}
          {userRole === "storage@gmail.com" ? <HomeStorage /> : ""}
          {userRole === "retailer@gmail.com" ? <HomeRetailer /> : ""}
        </div>
      )}
    </>
  );
}

export default App;

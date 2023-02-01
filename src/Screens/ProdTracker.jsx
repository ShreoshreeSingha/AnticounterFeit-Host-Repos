import React from "react";
import Header from "../components/Header";
import Manufacuter from "../data/image/manufacturer.png";
import Retailer from "../data/image/retailer.png";
import Warehouse from "../data/image/warehouse2.png";
import Distributor from "../data/image/distributor.png";
import "./prodTracker.css";


const ProdTracker = () =>{
    return(
        <>
            <div>
                <Header category="page" title="Product Tracker"/>   
                <div className="Content"> 
                    <div className="Icon_Content_first">
                        <div className="Icon">
                            <img src={Manufacuter}></img>
                            <p>Manufacturer</p>
                        </div> 
                        <div className="Card">
                        <div className="first_desc"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem recusandae laudantium</p></div>
                        </div>
                    </div> 
                    <div className="Icon_Content_second">
                        <div className="Card">
                            <div className="first_desc"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto corporis voluptas </p></div>
                        </div>
                        <div className="Icon">
                            <img src={Warehouse}></img>
                            <p>Warehouse</p>
                            <div className="Card">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div> 
                    </div> 
                    <div className="Icon_Content_third">
                        <div className="Card">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Place</p>
                        </div>
                        <div className="Icon">
                            <div className="Card">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                            </div>
                            <img src={Distributor}></img>
                            <p>Distributor</p>
                        </div> 
                    </div> 
                    <div className="Icon_Content_forth">
                        <div className="Icon">
                            <img src={Retailer}></img>
                            <p>Retailer</p>
                        </div> 
                        <div className="Card">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum cumque quae fugit deleniti placeat. T</p>
                        </div>
                    </div>                        
                </div>                    
            </div>
        </>
    );
};

export default ProdTracker;
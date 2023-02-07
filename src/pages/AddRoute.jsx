import React from "react";
import { useState } from 'react';
import Button from "../components/UI/Button/Button";

let nextId = 0;

const AddRoute = () =>{

    const [name, setName] = useState('');
    const [routes, setRoutes] = useState([]);

    return(
        <>
        <div>
            <div>
            <form className="inline-flex items-center w-1/2 ml-12" >
            <select class="border-l border-t border-b border-gray-200 rounded-l-md text-base md:text-lg px-[50%] py-4 mr-12" value={name}
                    onChange={e => setName(e.target.value)}>
              <option>m1</option>
              <option>m2</option>
              <option>m3</option>
              <option>w2</option>
              <option>w1</option>
              <option>w3</option>
              <option>r1</option>
              <option>r2</option>
              <option>r3</option>
              <option>m4</option>
              <option>w4</option>
              <option>r4</option>     
            </select>
            </form>
            </div>
            <Button className="m-4 left-20 relative" onClick={() => {
                setName('');
                routes.push({
                id: nextId++,
                name: name,
                
                });
            }}>Add</Button>
            <ul>
                {routes.map(route => (
                <li key={route.id}>{route.name}</li>
                ))}
            </ul>
        </div>
        
        </>
    );
};

export default AddRoute ;
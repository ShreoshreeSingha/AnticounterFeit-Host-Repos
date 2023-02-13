import React, { useState } from "react";
import Header from "../components/Header";
import Button from "../components/UI/Button/Button";
import "./RegisterUser.css";
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phonenumber: "",
    confirmpass: "",
  });

  const updateFormData = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const { firstName, lastName, email, password, phonenumber, confirmpass } =
    formData;

  // handleChange(event) {
  //     this.setState({value: event.target.value});
  //   }

  return (
    <>
      <Header category="/Page" title="REGISTER NEW USER" />

      <div class="w-[80%] mx-auto p-4 rounded-lg shadow-lg bg-white my-2 ">
        {/* <div class="flex">
          <h3 class="font-bold uppercase text-lg">Register New User</h3>
        </div> */}
        <div class="grid grid-cols-1 gap-1 md:grid-cols-2 mt-2 pr-8">
          <input
            class="w-full bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="First Name*"
          />
          <input
            class="w-full bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Last Name*"
          />
          <input
            class="w-full bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email*"
          />
          <input
            class="w-full bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Phone*"
          />
          <select class="w-full left-0.5 relative bg-gray-100 text-gray-900 my-1 mx-3 p-3 rounded-lg focus:outline-none focus:shadow-outline">
            <option>Manufacturer</option>
            <option>Warehouse</option>
            <option>Retailer</option>
          </select>
        </div>

        <div className="m-3">
          <Button>Add User</Button>
        </div>
      </div>
    </>
  );
};

export default RegisterUser;

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

//   handleChange(event) {
//       this.setState({value: event.target.value});
//     }

  return (
    <>
      <Header category="Page" title="Generate User Id" />
      <div class="block px-12 py-6 rounded-lg shadow-lg bg-white max-w-3xl absolute left-1/4">
        <form>
          <div class="grid grid-cols-2 gap-4">
            <div class="form-group mb-6">
              <input
                type="text"
                class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput123"
                aria-describedby="emailHelp123"
                placeholder="First name"
                onChange={(e) => updateFormData(e)}
              />
            </div>
            <div class="form-group mb-6">
              <input
                type="text"
                class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput124"
                aria-describedby="emailHelp124"
                placeholder="Last name"
                onChange={(e) => updateFormData(e)}
              />
            </div>
          </div>
          <div class="form-group mb-6">
            <input
              type="email"
              class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput125"
              placeholder="Phone Number"
              onChange={(e) => updateFormData(e)}
            />
          </div>
          <div class="form-group mb-6">
            <input
              type="email"
              class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput125"
              placeholder="Email address"
              onChange={(e) => updateFormData(e)}
            />
          </div>
          <div class="form-group mb-6">
            <input
              type="password"
              class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput126"
              placeholder="Password"
              onChange={(e) => updateFormData(e)}
            />
          </div>
          <div class="form-group mb-6">
            <input
              type="password"
              class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput126"
              placeholder="Confirm Password"
              onChange={(e) => updateFormData(e)}
            />
          </div>
          <Button
            type="submit"
            class="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Add 
          </Button>
        </form>
      </div>
    </>
  );
};

export default RegisterUser;

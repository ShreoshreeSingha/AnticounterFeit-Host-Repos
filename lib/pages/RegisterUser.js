import React, { useState } from "react";
import Header from "../components/Header";
import Button from "../components/UI/Button/Button";
import "./RegisterUser.css";
import { useStateContext } from "../contexts/ContextProvider";
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';

const RegisterUser = () => {
  const {
    setTitle,
    setCategory
  } = useStateContext();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phonenumber: "",
    confirmpass: "",
    manufacturer: "",
    warehouse: "",
    distributor: "",
    retailer: ""
  });
  setTitle('Register User');
  setCategory('Data');
  const [userId, setuserId] = React.useState("");
  const apiUrl = "";
  const updateFormData = event => {
    setFormData(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log("The value of the input is:", formData);
  };
  const handleCreateUserClick = () => {
    // fetch(apiUrl,{
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",},
    //   body: JSON.stringify(formData)
    // })
    // .then((response) => response.json())
    // .then((d) =>{ 
    //   setuserId(d.userId);
    // // .catch(error => console.error(error));
    // console.log("Submit Data:"+formData);
    // console.log(d);
    // });

    alert("click");
  };

  // const { firstName, lastName, email, password, phonenumber, confirmpass } =
  //   formData;

  // handleChange(event) {
  //     this.setState({value: event.target.value});
  //   }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    class: "w-[80%] mx-auto p-4 rounded-lg shadow-lg bg-white my-2 "
  }, /*#__PURE__*/React.createElement("div", {
    class: "grid grid-cols-1 gap-1 md:grid-cols-2 mt-2 pr-8"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("input", {
    class: "w-full bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline",
    type: "text",
    placeholder: "First Name*",
    value: formData.firstName,
    onChange: updateFormData
  }), /*#__PURE__*/React.createElement("input", {
    class: "w-full bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline",
    type: "text",
    placeholder: "Last Name*",
    value: formData.lastName,
    onChange: updateFormData
  }), /*#__PURE__*/React.createElement("input", {
    class: "w-full bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline",
    type: "email",
    placeholder: "Email*",
    value: formData.email,
    onChange: updateFormData
  }), /*#__PURE__*/React.createElement("input", {
    class: "w-full bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline",
    type: "number",
    placeholder: "Phone*",
    value: formData.phonenumber,
    onChange: updateFormData
  }), /*#__PURE__*/React.createElement("input", {
    class: "w-full bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline",
    type: "text",
    placeholder: "Password*",
    value: formData.password,
    onChange: updateFormData
  }), /*#__PURE__*/React.createElement("input", {
    class: "w-full bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline",
    type: "text",
    placeholder: "Confirm Password*",
    value: formData.confirmpass,
    onChange: updateFormData
  }), /*#__PURE__*/React.createElement("select", {
    class: "w-full left-0.5 relative bg-gray-100 text-gray-900 my-1 mx-3 p-3 rounded-lg focus:outline-none focus:shadow-outline"
    // value={formData}
    ,
    onChange: updateFormData
  }, /*#__PURE__*/React.createElement("option", {
    value: formData.manufacturer
  }, "Manufacturer"), /*#__PURE__*/React.createElement("option", {
    value: formData.warehouse
  }, "Warehouse"), /*#__PURE__*/React.createElement("option", {
    value: formData.distributor
  }, "Distributor"), /*#__PURE__*/React.createElement("option", {
    value: formData.retailer
  }, "Retailer")))), /*#__PURE__*/React.createElement("div", {
    className: "m-3"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    onClick: () => handleCreateUserClick()
  }, "Add User"))));
};
export default RegisterUser;
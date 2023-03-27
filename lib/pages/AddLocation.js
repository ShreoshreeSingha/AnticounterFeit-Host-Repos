import React, { useState } from "react";
import Header from "../components/Header";
import { useStateContext } from "../contexts/ContextProvider";
import Button from "../components/UI/Button/Button";
import { AiOutlineClose } from "react-icons/ai";
const AddLocation = props => {
  const {
    setTitle,
    setCategory
  } = useStateContext();
  const [formData, setFormData] = useState({
    locationName: "",
    locationType: "",
    streetAddress: "",
    city: "",
    country: "",
    state: "",
    storageCapacity: "",
    status: ""
  });
  setTitle("/Add Location");
  setCategory("Data");
  const onClick = props.onCloseRecieved;
  const apiUrl = "";

  // const handleInputChange  = (event) =>{
  //   setFormData( event.target.value);
  // };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await fetch("http://20.193.146.8:8080/api/data/locationmaster", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setFormData({
          locationName: "",
          locationType: "",
          streetAddress: "",
          city: "",
          country: "",
          state: "",
          storageCapacity: "",
          status: ""
        });
        alert("New Location added successfully!");
      } else {
        throw new Error("Failed to add location");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to add location");
    }
  };
  const handleInputChange = event => {
    const {
      name,
      value
    } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // const handleCreateUserClick = () =>{
  //   // fetch(apiUrl,{
  //   //   method: "POST",
  //   //   headers: {
  //   //     Accept: "application/json",
  //   //     "Content-Type": "application/json",},
  //   //   body: JSON.stringify(formData)
  //   // })
  //   // .then((response) => response.json())
  //   // .then((d) =>{
  //   //   setuserId(d.userId);
  //   // // .catch(error => console.error(error));
  //   // console.log("Submit Data:"+formData);
  //   // console.log(d);
  //   // });
  //   alert("Click here")

  // };

  // const { firstName, lastName, email, password, phonenumber, confirmpass } =
  //   formData;

  // handleChange(event) {
  //     this.setState({value: event.target.value});
  //   }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "w-[80%] mx-auto p-4 rounded-lg shadow-lg bg-white my-2"
  }, /*#__PURE__*/React.createElement("div", {
    class: "grid grid-cols-1 gap-1 md:grid-cols-2 mt-8"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("input", {
    class: "w-[97%] bg-gray-100 text-gray-900 mt-1 p-2 rounded-lg focus:outline-none focus:shadow-outline",
    type: "text",
    name: "locationName",
    placeholder: "Location Name*",
    value: formData.locationName,
    onChange: handleInputChange
  }), /*#__PURE__*/React.createElement("input", {
    class: "w-[97%] bg-gray-100 text-gray-900 mt-1 p-2 rounded-lg focus:outline-none focus:shadow-outline",
    type: "text",
    name: "locationType",
    placeholder: "Location Type*",
    value: formData.locationType,
    onChange: handleInputChange
  }), /*#__PURE__*/React.createElement("input", {
    class: "w-[97%] bg-gray-100 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline",
    type: "text",
    name: "streetAddress",
    placeholder: "Street Address*",
    value: formData.streetAddress,
    onChange: handleInputChange
  }), /*#__PURE__*/React.createElement("input", {
    class: "w-[97%] bg-gray-100 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline",
    type: "text",
    name: "city",
    placeholder: "City*",
    value: formData.city,
    onChange: handleInputChange
  }), /*#__PURE__*/React.createElement("input", {
    class: "w-[97%] bg-gray-100 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline",
    type: "text",
    name: "state",
    placeholder: "State*",
    value: formData.state,
    onChange: handleInputChange
  }), /*#__PURE__*/React.createElement("input", {
    class: "w-[97%] bg-gray-100 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline",
    type: "text",
    name: "country",
    placeholder: "Country*",
    value: formData.country,
    onChange: handleInputChange
  }), /*#__PURE__*/React.createElement("input", {
    class: "w-[97%] bg-gray-100 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline",
    type: "text",
    name: "storageCapacity",
    placeholder: "Storage Capacity*",
    value: formData.storageCapacity,
    onChange: handleInputChange
  }), /*#__PURE__*/React.createElement("input", {
    class: "w-[97%] bg-gray-100 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline",
    type: "text",
    name: "status",
    placeholder: "Status*",
    value: formData.status,
    onChange: handleInputChange
  }), /*#__PURE__*/React.createElement("div", {
    className: "m-2"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit"
  }, "Add Location"))))));
};
export default AddLocation;
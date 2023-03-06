import React, { useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/UI/Button/Button";
import { AiOutlineClose } from "react-icons/ai";
import { useStateContext } from "../../contexts/ContextProvider";
//import Warning from "../../Warning";
const AddProduct = (props) => {
  const { setTitle, setCategory } = useStateContext();
  useState(false);
  const [formData, setFormData] = useState({
    //productId: "",
    productName: "",
    productCategory: "",
    manufacturingDate: "",
    manufacturingLocation: "",
    mrp: "",
  });

  setTitle("/Add Product");
  setCategory("Manufacturer");

  const apiUrl = "";

  const updateFormData = (event) => {
    setFormData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("The value of the input is:", formData);
  };

  const onClick = props.onCloseRecieved;

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
    alert("Click here");
  };

  // const { firstName, lastName, email, password, phonenumber, confirmpass } =
  //   formData;

  // handleChange(event) {
  //     this.setState({value: event.target.value});
  //   }
  return (
    <>
      {/* <Header category="Page" title="Manufacturer |Add Product" /> */}
    <div className="bg-white shadow-lg rounded-lg w-1/2 h-2/3 fixed top-[20%] left-[25%] z-[5]">
      <button
        className="absolute top-0 right-0 p-4 text-xl hover:text-red-600 "
        onClick={onClick}
      >
        <AiOutlineClose />
      </button>     
      <div className="w-[90%]  mx-auto p-4 bg-white m-2  rounded-lg relative top-20">
        {/* <button
          className="absolute top-0 right-0 p-4 text-xl hover:text-red-600 "
          onClick={onClick}
        >
          <AiOutlineClose />
        </button> */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-2 m-5">
            <input
              className="w-full bg-gray-100 text-gray-900 m-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              value={formData.productName}
              onChange={updateFormData}
              placeholder="Product Name*"
            />
            <input
              className="w-full bg-gray-100 text-gray-900 m-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              value={formData.productCategory}
              onChange={updateFormData}
              placeholder="Product Category*"
            />
            <input
              className="w-full bg-gray-100 text-gray-900 m-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              value={formData.manufacturingDate}
              onChange={updateFormData}
              placeholder="Manufacturing Date*"
            />
            <input
              className="w-full bg-gray-100 text-gray-900 m-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              value={formData.manufacturingLocation}
              onChange={updateFormData}
              placeholder="Manufacturing Location*"
            />
            <input
              className="w-full bg-gray-100 text-gray-900 m-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              value={formData.mrp}
              onChange={updateFormData}
              placeholder="MRP*"
            />

            {/* <div class="my-4">
            <textarea placeholder="Message*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
        </div> */}
            <div className="m-4">
              <Button type="submit" onClick={() => handleCreateUserClick()}>
                Add Product
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddProduct;

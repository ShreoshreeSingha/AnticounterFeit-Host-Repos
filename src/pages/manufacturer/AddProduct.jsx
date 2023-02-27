import React from "react";
import Header from "../../components/Header";
import Button from "../../components/UI/Button/Button";

const AddProduct = () => (
  <>
    <Header category="Page" title="Manufacturer |Add Product" />
    <div className="w-[90%] mx-auto p-4 bg-white m-2  rounded-lg">
      <div className="grid grid-cols-2 gap-5 md:grid-cols-2 m-5">
        <input
          className="w-full bg-gray-100 text-gray-900 m-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Product Name*"
        />
        <input
          className="w-full bg-gray-100 text-gray-900 m-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Product Category*"
        />
        <input
          className="w-full bg-gray-100 text-gray-900 m-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Manufacturing Date*"
        />
        <input
          className="w-full bg-gray-100 text-gray-900 m-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Manufacturing Location*"
        />
        <input
          className="w-full bg-gray-100 text-gray-900 m-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="MRP*"
        />
      </div>
      {/* <div class="my-4">
            <textarea placeholder="Message*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
        </div> */}
      <div className="m-4">
        <Button>Add Product</Button>
      </div>
    </div>
  </>
);

export default AddProduct;

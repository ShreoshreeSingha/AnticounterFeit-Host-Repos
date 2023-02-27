import React, {useState} from 'react';
import Header from '../components/Header';
import { useStateContext } from "../contexts/ContextProvider";
import Button from "../components/UI/Button/Button";

const AddLocation = () => {
  const { setTitle , setCategory } = useStateContext();
  const [formData, setFormData] = useState({
    locationName:"",
    locationType:"",
    streetAddress:"",
    city:"",
    country:"",
    state:"",
    storagecapacity:"",
    status:"",
  });


  setTitle('/Add Location')
  setCategory('Data')

  const apiUrl="";

  const updateFormData = (event) =>{
    setFormData( event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("The value of the input is:", formData);
    
  };


    const handleCreateUserClick = () =>{
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
      alert("Click here")
      
    };

  // const { firstName, lastName, email, password, phonenumber, confirmpass } =
  //   formData;

  // handleChange(event) {
  //     this.setState({value: event.target.value});
  //   }

  return (
    <>
        
      {/* <div class="w-[80%] mx-auto p-4 rounded-lg shadow-lg bg-white my-2 ">
        <div class="grid grid-cols-2 gap-1 md:grid-cols-2 mt-8">
          <form onSubmit={handleSubmit}>
          <input
            class="w-[95%] bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Location Name*"
            value={formData.locationName}
            onChange={updateFormData}
          />
          <input
            class="w-[95%] bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Location Type*"
            value={formData.locationType}
            onChange={updateFormData}
          />
          <input
            class="w-full bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Street Address*"
            value={formData.streetAddress}
            onChange={updateFormData}
          />
          <input
            class="w-full bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="City*"
            value={formData.city}
            onChange={updateFormData}
          />
          <input
            class="w-full bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="State*"
            value={formData.state}
            onChange={updateFormData}
          />
          <input
            class="w-full bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Country*"
            value={formData.country}
            onChange={updateFormData}
          />
          <input
            class="w-full bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Storage Capacity*"
            value={formData.storagecapacity}
            onChange={updateFormData}
          />
          <input
            class="w-full bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Status*"
            value={formData.status}
            onChange={updateFormData}
          />

           <select class="w-full left-0.5 relative bg-gray-100 text-gray-900 my-1 mx-3 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          // value={formData}
          onChange={updateFormData}
          >
            <option value={formData.manufacturer}>Manufacturer</option>
            <option value={formData.warehouse}>Warehouse</option>
            <option value={formData.distributor}>Distributor</option>
            <option value={formData.retailer}>Retailer</option>
          </select> 
          </form>
        </div>

        <div className="m-3">
          <Button onClick={() => handleCreateUserClick} >Add Location</Button>
        </div>
      </div> */}
      <div className="w-[80%] mx-auto p-4 rounded-lg shadow-lg bg-white my-2">
        <div class="grid grid-cols-1 gap-1 md:grid-cols-2 mt-8">
        <form onSubmit={handleSubmit}>
            <input class="w-[97%] bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" 
                placeholder="Location Name*"
                value={formData.locationName}
                onChange={updateFormData}
                />
            <input class="w-[97%] bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" 
                placeholder="Location Type*"
                value={formData.locationType}
                onChange={updateFormData} 
                />
            <input class="w-[97%] bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" 
                placeholder="Street Address*"
                value={formData.streetAddress}
                onChange={updateFormData}
                />
            <input class="w-[97%] bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" 
                placeholder="City*"
                value={formData.city}
                onChange={updateFormData}
                />
            <input class="w-[97%] bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" 
                placeholder="State*"
                value={formData.state}
                onChange={updateFormData} 
                />
            <input class="w-[97%] bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" 
                placeholder="Country*"
                value={formData.country}
                onChange={updateFormData} 
                />
            <input class="w-[97%] bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" 
                placeholder="Storage Capacity*"
                value={formData.storagecapacity}
                onChange={updateFormData}
                />
            <input class="w-[97%] bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" 
                placeholder="Status*"
                value={formData.status}
                onChange={updateFormData}
                 />
          
            <div className="m-3">
              <Button type="submit" onClick={() => handleCreateUserClick()}>Add Location</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddLocation
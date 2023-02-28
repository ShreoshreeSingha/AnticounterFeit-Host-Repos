import React, {useState} from 'react';
import Header from '../components/Header';
import { useStateContext } from "../contexts/ContextProvider";
import Button from "../components/UI/Button/Button";

const AddBOD = () => {
  const { setTitle , setCategory } = useStateContext();
  const [formData, setFormData] = useState({
    pathId:"",
    startingPoint:"",
    endingPoint:"",
    transitType:"",
    avgTimeTaken:"",
    distance:"",
    
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
        
      <div className="w-[80%] mx-auto p-4 rounded-lg shadow-lg bg-white my-2">
        <div class="grid grid-cols-1 gap-1 md:grid-cols-2 mt-8">
        <form onSubmit={handleSubmit}>
            <input class="w-[97%] bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" 
                placeholder="Path ID*"
                value={formData.pathId}
                onChange={updateFormData}
                />
            <input class="w-[97%] bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" 
                placeholder="Starting Point*"
                value={formData.startingPoint}
                onChange={updateFormData} 
                />
            <input class="w-[97%] bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" 
                placeholder="Ending Point*"
                value={formData.endingPoint}
                onChange={updateFormData}
                />
            <input class="w-[97%] bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" 
                placeholder="Transit Type*"
                value={formData.transitType}
                onChange={updateFormData}
                />
            <input class="w-[97%] bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" 
                placeholder="Average Time Taken*"
                value={formData.avgTimeTaken}
                onChange={updateFormData} 
                />
            <input class="w-[97%] bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" 
                placeholder="Distance*"
                value={formData.distance}
                onChange={updateFormData} 
                />          
            <div className="m-3">
              <Button type="submit" onClick={() => handleCreateUserClick()}>Add BOD</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddBOD;
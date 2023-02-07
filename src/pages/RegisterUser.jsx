import React, {useState} from "react";
import Header from "../components/Header";
import "./RegisterUser.css";
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';


const RegisterUser = ()=>{
    
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phonenumber:"",
        confirmpass:""
      });
    
      const updateFormData = event =>
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });

        const { firstName, lastName, email, password, phonenumber, confirmpass } = formData;


        // handleChange(event) {
        //     this.setState({value: event.target.value});
        //   }

    return(
        <>
            {/* <div>
                <Header category="Page" title="Generate User Id" />
                <div className="Form_content">
                         <form>
                                <input
                                    value={firstName}
                                    onChange={e => updateFormData(e)}
                                    placeholder="First name"
                                    type="text"
                                    name="firstName"
                                    required
                                />
                                <input
                                    value={lastName}
                                    onChange={e => updateFormData(e)}
                                    placeholder="Last name"
                                    type="text"
                                    name="lastName"
                                    required
                                />
                                <input
                                    value={email}
                                    onChange={e => updateFormData(e)}
                                    placeholder="Email address"
                                    type="email"
                                    name="email"
                                    required
                                />
                                <input
                                    value={phonenumber}
                                    onChange={e => updateFormData(e)}
                                    placeholder="Phone Number"
                                    type="text"
                                    name="phonenumber"
                                    required
                                />
                                <input
                                    value={password}
                                    onChange={e => updateFormData(e)}
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    required
                                />
                                <input
                                    value={confirmpass}
                                    onChange={e => updateFormData(e)}
                                    placeholder="Confirm Password"
                                    type="password"
                                    name="password"
                                    required
                                /> */}
                                {/* <select value={this.state.value} onChange={this.handleChange}>
                                    <option value="grapefruit">Grapefruit</option>
                                    <option value="lime">Lime</option>
                                    <option value="coconut">Coconut</option>
                                    <option value="mango">Mango</option>
                                </select> */}
{/* 
                            <button className="Submit_bttn" type="submit">Add User</button>
                        </form> 
                </div>
            </div> */}

            <div class="inline-flex justify-center items-center w-[100%] h-[95%] bg-white">
            
            <div class="absolute w-[80%] mx-auto my-4 px-4 lg:px-20">

                <div class="w-full p-8 my-4 md:px-12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                    <div class="flex">
                        <h3 class="font-bold uppercase text-3xl">Register New User</h3>
                    </div>
                    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                        <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="First Name*" />
                        <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Last Name*" />
                        <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email" placeholder="Email*" />
                        <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="number" placeholder="Phone*" />
                        <select class="w-full left-0.5 relative bg-gray-100 text-gray-900 m-3 p-3 rounded-lg focus:outline-none focus:shadow-outline">
                            <option>Manufacturer</option>
                            <option>Warehouse</option>
                            <option>Retailer</option>
                        </select>
                    </div>
                        
                    <div class="my-2 w-1/2 lg:w-1/4">
                        <button class="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 left-5 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                            Add User
                        </button>
                    </div>
                </div>
            </div>
            </div>



        </>
    );
};

export default RegisterUser;
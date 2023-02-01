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
            <div>
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
                                />
                                {/* <select value={this.state.value} onChange={this.handleChange}>
                                    <option value="grapefruit">Grapefruit</option>
                                    <option value="lime">Lime</option>
                                    <option value="coconut">Coconut</option>
                                    <option value="mango">Mango</option>
                                </select> */}

                            <button type="submit">Add User</button>
                        </form> 
                </div>
            </div>
        </>
    );
};

export default RegisterUser;
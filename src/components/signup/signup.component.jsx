import React from "react";

import "./signup.styles.css";

import FormInput from "../form-input/form-input";
import BlackLogoScreen from "../logo-black-screen/dirtcube-logo-black.component";

class SignUp extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         fullName: "",
         username: "",
         email: "",
         password: "",
         confirmPassword: ""
      };

   }

   handleChange = (e) => {
      e.preventDefault();
      const {value, name} = e.target;
      this.setState({[name] : value}, () => {
         console.log("this.state", this.state);
      })
   };

   handleSubmit = (e) => {
     e.preventDefault();
     const formData = new FormData();
     formData.append("fullName", this.state.fullName);
     formData.append("username", this.state.username);
     formData.append("email", this.state.email);
     formData.append("password", this.state.password);
     // const request = new XMLHttpRequest();
     // request.open("POST", "http://10.0.1.6:5000/user");
     // request.send(formData);
      fetch("http://10.0.1.6:5000/user", {
         method: "post",
         body : formData
      }).then(res => console.log(res))
          .catch(e => console.log(e));
   };

   render() {
      const {fullName, username, email, password, handleChange} = this.state;
      return (
          <div className="container">
             <div className="left-side">
                <div>
                   <BlackLogoScreen/>
                </div>
             </div>
             <div className="right-side">
                <div className="right-side-content">
                   <span className="page-title">Please complete to create your account</span>
                   <FormInput handleChange={this.handleChange}/>
                   <button className="btn btn-sign-up btn-blue" form="form1" type="submit" onClick={this.handleSubmit}>Sign up</button>
                   <div className="login">
                      <span className="login-link">Already have an account</span>
                   </div>
                </div>
             </div>
          </div>
      )
   }
}

export default SignUp;
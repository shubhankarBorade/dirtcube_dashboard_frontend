import React from "react";

import "./form-input.styles.css";
import "../signup/signup.styles.css";

const FormInput = ({handleChange, ...otherProps}) => (
   <div>
      <form className="text-box" id="form1">
         <input className="placeholder-text" type="text" name="fullName" placeholder="full name" onChange={handleChange}/>
         <input className="placeholder-text" type="text" name = "username" placeholder="Username" onChange={handleChange} {...otherProps}/>
         <input className="placeholder-text" type="email" name = "email" placeholder="email" onChange={handleChange} {...otherProps}/>
         <input className="placeholder-text" type="password" name="password" placeholder="password" onChange={handleChange} {...otherProps}/>
         <input className="placeholder-text" type="password" name="confirmPassword"  placeholder="confirm password" onChange={handleChange} {...otherProps}/>
         {/*<button className="btn btn-sign-up btn-blue" form="form1" type="submit" onSubmit={handleSubmit}>Sign up</button>*/}
      </form>
   </div>
);

export default FormInput;
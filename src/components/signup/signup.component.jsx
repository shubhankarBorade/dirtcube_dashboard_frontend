import React from "react";

import PlaceholderText from "../placeholder-text/placeholder-text.component";

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

   render() {
      return (
          <div>
             <div className="page-header">
                <span>Please complete to create your account</span>
                <PlaceholderText fullName={"Shubhankar"} username={"Shubh"} email={"shborade@gmail.com"} password={"1234"}/>
             </div>
          </div>
      )
   }
}

export default SignUp;
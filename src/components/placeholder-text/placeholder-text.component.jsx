import React from "react";

const PlaceholderText = ({fullName, username, email, password}) => (
   <div className="text-box">
      <span className="placeholder-text">{fullName}</span>
      <br className="placeholder-line"/>
      <span className="placeholder-text">{username}</span>
      <br className="placeholder-line"/>
      <span className="placeholder-text">{email}</span>
      <br className="placeholder-line"/>
      <span className="placeholder-text">{password}</span>
      <br className="placeholder-line"/>
   </div>
);

export default PlaceholderText;
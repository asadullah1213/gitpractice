import React from "react";
import "./existed.css";

function ExistingUser() {
  return (
    <>
      <div className="form">
        <div className="data_form">
          {" "}
          <span>EMAIL</span>
          <input type="email" name="Email" id="Email" />
          <span>PASSWORD</span>
          <input type="password" name="Password" id="Password" />
        </div>
      </div>
    </>
  );
}

export default ExistingUser;

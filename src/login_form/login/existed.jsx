import React, { useState } from "react";
import "./existed.css";

function ExistingUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleUserPassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

  };


  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <div className="data_form">
            <span>EMAIL</span>
            <input
              type="email"
              name="Email"
              id="Email"
              value={email}
              onChange={handleUserEmail}
            />
            <span>PASSWORD</span>
            <input
              type="password"
              name="Password"
              id="Password"
              value={password}
              onChange={handleUserPassword}
            />
          </div>
        </div>
        <button id='login' type='submit'>Login</button>
      </form>
    </>
  );
}

export default ExistingUser;

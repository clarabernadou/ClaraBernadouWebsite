import "../sign.css";
import React, {} from "react";
import Logo from "../../assets/logo/groupomania-logo.png"

export default function Login() {
  return (
    <div className="sign">
    <div className="signWrapper">
      <header className="signHeader">
        <img className="signLog" src={Logo} />
      </header>
      <div className="signBody">
        <form className="signForm">
          <input 
            placeholder="Email"
            className="signInp"
          />
          <input 
            placeholder="Password"
            className="signInp"
          />
          <button
            className="signHavAcc"
          >
            Already have an account ? Sign Up
          </button>
          <button 
            className="signBtn">
            Sign In
          </button>
        </form>      
      </div>
    </div>
  </div>
  );
}

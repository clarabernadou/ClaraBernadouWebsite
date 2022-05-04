import React from "react";
//import { useEffect } from "react";
import "../sign.css";
import Logo from "../../assets/logo/groupomania-logo.png"

export default function Login() {

  // useEffect(() => {
  //   console.log("ltest");
  // }, [])
  
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

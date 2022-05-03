import React from "react";
//import { useEffect } from "react";
import "./login.css";

export default function Login() {

  // useEffect(() => {
  //   console.log("ltest");
  // }, [])
  
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Groupomania</h3>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="haveAccount">You do not have an account ? Sign up</button>
            <button className="loginButton">Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
}

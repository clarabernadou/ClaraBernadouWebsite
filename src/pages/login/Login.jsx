import "../sign.css";
import React, { useState } from "react";
import axios from "axios";
import Logo from "../../assets/logo/groupomania-logo.png"

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const setUsername = props.setUsername
  console.log(email)

  const login = async(e) => {
    e.preventDefault()
    const response = await axios.post("http://localhost:8080/api/auth/signin", {"email": email, "password": password})
    localStorage.setItem("token", response.data.token)
    localStorage.setItem("username", response.data.username)
    console.log(response)
  }

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
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            placeholder="Password"
            className="signInp"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="signHavAcc"
          >
            Already have an account ? Sign Up
          </button>
          <button 
            className="signBtn"
            onClick={login}>
            Sign In
          </button>
        </form>      
      </div>
    </div>
  </div>
  );
}

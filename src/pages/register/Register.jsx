import "../sign.css";
import Logo from "../../assets/logo/groupomania-logo.png"
import React, { useState } from "react";
import axios from "axios";

export default function Register(props) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const register = async (e) => {
  e.preventDefault()

  let form = new FormData();
  form.append('Username', username)
  form.append('Email', email)
  form.append('Password', password)

  const response = axios.post('http://localhost:8080/api/auth/signup', {form})
    console.log(response)
  
  props.setUsers([...props.users, response.data])

  setUsername('')
  setEmail('')
  setPassword('')
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
            placeholder="Username" 
            className="signInp" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input 
            placeholder="Email" 
            className="signInp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            placeholder="Password" 
            className="signInp" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            to={{pathname: "/signin"}} 
            className="signHavAcc"
          >
            Already have an account ? Log in
          </button>
          <button 
            className="signBtn" 
            onClick={(e) => { register(e)}}>
            Sign Up
          </button>
        </form>      
      </div>
    </div>
  </div>
);
}

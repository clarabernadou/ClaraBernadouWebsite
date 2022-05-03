import "./register.css";
import Logo from "../../assets/logo/groupomania-logo.png"
import React, { useState } from "react";
import axios from "axios";

export default function Register(props) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const user = async (e) => {
    e.preventDefault()

    let form = new FormData();
    form.apprend('Username', username)
    form.apprend('Email', email)
    form.apprend('Password', password)

    const response = await axios.post('http://localhost:8080/api/auth/signup', form)

    props.setUsers([...props.users, response.data])

    setUsername('')
    setEmail('')
    setPassword('') 
  }
  
  return (
    <div className="register">
      <div className="registerWrapper">
        <header className="registerHeader">
          <img className="registerLogo" src={Logo} />
        </header>
        <div className="registerBody">

          <form className="registerForm">
            <input 
              placeholder="Username" 
              className="registerInput" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input 
              placeholder="Email" 
              className="registerInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input 
              placeholder="Password" 
              className="registerInput" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button to={{pathname: "/signin"}} className="haveAccount">Already have an account ? Log in</button>
            <button 
              className="registerButton" 
              onClick={(e) => { user(e)}}
            >
              Sign Up
            </button>
          </form>
          
        </div>
      </div>
    </div>
  );
}

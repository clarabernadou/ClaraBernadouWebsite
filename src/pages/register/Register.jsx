import "../sign.css";
import Logo from "../../assets/logo/groupomania-logo.png"
import React, { useState } from "react";
import axios from "axios";

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(username)
    
const register = async (e) => {
  e.preventDefault()

  let form = new FormData();
  form.append('username', username)
  form.append('Email', email)
  form.append('Password', password)
  
  const response = await axios.post('http://localhost:8080/api/auth/signup', {username, email, password})
  window.location.href="/signin"
  console.log(response)
  
  //props.setUsers([...props.users, response.data])

  setUsername('')
  setEmail('')
  setPassword('')

}
const NotHaveAccount = e => {
    e.preventDefault()
    window.location.href = "/signin";
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
            type="text"
            placeholder="Username" 
            className="signInp" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input 
            type="email"
            placeholder="Email" 
            className="signInp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password"
            placeholder="Password" 
            className="signInp" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button  
            className="signHavAcc"
            onClick={ NotHaveAccount }
          >
            Already have an account ? Log in
          </button>
          <button 
            className="signBtn" 
            onClick={ register }>
            Sign Up
          </button>
        </form>      
      </div>
    </div>
  </div>
);
}

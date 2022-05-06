
import "./profile.css";

import React, {useEffect, useState} from "react";

import Topbar from "../../components/topbar/Topbar";
import axios from "axios";

export default function Profile() {
  
  const [username, setUsername] = useState('');  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');
  
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      window.location.href = "/signin";
    }
  }, []);

  const logout = e => {
    e.preventDefault()
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    window.location.href = "/signin";
  }

  const modifyAccount = e => {
    e.preventDefault()
  }

  const deleteAccount = async(e) => {
    e.preventDefault()
    const response = await axios.delete('http://localhost:8080/api/auth/profile', {"username":username, "email":email, "password":password, "userId":userId})
    if(response){
    return window.location.href = "/signin";
    }else{
      console.log("Error")
    }

    setUsername('')
    setEmail('')
    setPassword('')
    setUserId('')
  }

  return (
    <>
      <Topbar />
      <div className="profile">
          <div className="profileTop">
              <img
                className="profileUserImg"
                src="assets/person/7.jpeg"
                alt=""
              />
          <div className="registerBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button 
              className="loginButton"
              onClick={ modifyAccount }
              >
                Modify
              </button>
        </div>
        </div>
        <hr />
          <div className="profileBottom">
            <div className="profileButton">
              <button 
                className="loginButtonRed"
                onClick={ deleteAccount }
                >
                  Delete acount
                </button>
              <button 
                className="loginButton"
                onClick= {logout}
                >
                  Log out
                </button>
            </div>
          </div>
      </div>
    </>
  );
}

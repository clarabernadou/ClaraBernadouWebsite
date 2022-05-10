// CSS
import "./profile.css";
// Utils
import React, {useEffect, useState} from "react";
import axios from "axios";
// Components
import Topbar from "../../components/topbar/Topbar";
// Images
import Random from "../../assets/personne-random.png";

export default function Profile() {
  
  const [username, setUsername] = useState('');  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  
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

  const modifyAccount = async(e) => {
    e.preventDefault()

    let form = new FormData();
    form.append('username', username)
    form.append('Email', email)
    form.append('Password', password)

    const id = localStorage.getItem('userId')
    console.log(id)
    
    const response = await axios.put(`http://localhost:8080/api/auth/profile/update/${id}`, {username, email, password})
    console.log(response)
  }

  const deleteAccount = async(e) => {
    e.preventDefault()
    const response = await axios.delete('http://localhost:8080/api/auth/profile/delete', {"username":username, "email":email, "password":password, "userId":userId})
    if(response){
    return window.location.href = "/signin";
    }else{
      console.log("Error")
    }

    setUsername('')
    setEmail('')
    setPassword('')
    setUserId('')
    setSelectedFile('')
  }
  

  return (
    <>
      <Topbar />
      <div className="profile">
          <div className="profileTop">
            <input 
                className="btnProfileImg"
                name="file"
                type="file"
                id="file"
                aria-label="file-input"
                value={selectedFile}
                onChange={(e) => setSelectedFile(e.target.value)}
              />
              <label
                htmlFor="file" 
                aria-label="icon-upload"
              >
                <img className="profileUserImg" src={Random} />
              </label>
          <div className="registerBox">
            <input 
              type="text" 
              placeholder="Username"
              className="loginInput" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="loginInput" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password" 
              placeholder="Password" 
              className="loginInput" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit" 
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

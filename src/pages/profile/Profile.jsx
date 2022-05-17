// CSS
import "./profile.css";
// Utils
import React, {useEffect, useState} from "react";
import axios from "axios";
// Components
import Topbar from "../../components/topbar/Topbar";
// Images
//import Random from "../../assets/personne-random.png";

export default function Profile() {
  
  const [username, setUsername] = useState(localStorage.getItem("username"));  
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [selectedFile, setSelectedFile] = useState('');
  const [imageUrl, setImageUrl] = useState('');

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
    const id = localStorage.getItem('userId');
    const response = await axios.put(`http://localhost:8080/api/auth/profile/update/${id}`, {username, email, imageUrl})
    console.log(response);
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("imageUrl", imageUrl);
  }

  const deleteAccount = async(e) => {
    e.preventDefault()
    const id = localStorage.getItem('userId');

    const response = await axios.delete(`http://localhost:8080/api/auth/profile/delete/${id}`)
    if(response){
      return window.location.href = "/signin";
    }else{
      console.log("Error")
    }

    setUsername('')
    setEmail('')
    setSelectedFile('')
    setImageUrl('')
  }
  console.log(selectedFile);
  
  const uploadFile = async(file)=> {
    const id = localStorage.getItem('userId');

    const formData = new FormData();
    formData.append('imageUrl', file.name);


    const response = await axios.post(`http://localhost:8080/api/upload_file/${id}`, formData);
    console.log(response);
  }


  return (
    <>
      <Topbar />
      <div className="profile">
          <form className="profileTop">
            <input 
                className="btnProfileImg"
                name="file"
                type="file"
                id="file"
                aria-label="file-input"
                value={selectedFile}
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  uploadFile(e.target.files[0]);
                  setSelectedFile(e.target.files[0]);
                }}
              />
              <label
                htmlFor="file" 
                aria-label="icon-upload"
              >
                <img className="profileUserImg" src={selectedFile} />
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
              <button
                type="submit" 
                className="loginButton"
                onClick={ modifyAccount }
                disabled={!email, !username}
                >
                  Modify
                </button>
          </div>
        </form>
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

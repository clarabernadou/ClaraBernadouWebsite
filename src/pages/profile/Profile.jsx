//Import utils
import React, {useEffect, useState} from "react";
import axios from "axios";
//Import components
import Topbar from "../../components/topbar/Topbar";
//Import images
//import Random from "../../assets/personne-random.png";
//Import CSS
import "./profile.css";

export default function Profile() {
  
  const [username, setUsername] = useState(localStorage.getItem("username"));  
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [selectedFile, setSelectedFile] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  //Use effect which launches the action as soon as the page loads
  useEffect(() => {
    if (!localStorage.getItem('token')) { //Recovery token in local storage
      window.location.href = "/signin"; //Navigate
    }
  }, []);

  //To disconnect the user
  const logout = e => {
    e.preventDefault() //To prevent the default event

    //Delete informations from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('userId');

    window.location.href = "/signin"; //Navigate
  }

  //To edit account information
  const modifyAccount = async(e) => {
    e.preventDefault() //To prevent the default event
    const id = localStorage.getItem('userId'); //Recovery userId in localstorage

    //Recovery the backend with Axios
    const response = await axios.put(`http://localhost:8080/api/auth/profile/update/${id}`, {username, email, imageUrl})

    //TEST
    console.log('-----------------------------------------')
    console.log('Response console.log (update profile) ⬇️')
    console.log(response);

    //Add the new information in localstorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("imageUrl", imageUrl);
  }

  //To delete the user account
  const deleteAccount = async(e) => {
    e.preventDefault() //To prevent the default event
    const id = localStorage.getItem('userId'); //Recovery userId in localstorage

    //Recovery the backend with Axios
    const response = await axios.delete(`http://localhost:8080/api/auth/profile/delete/${id}`)

    //Create a condition
    if(response){
      return window.location.href = "/signin"; //Navigate
    }else{
      console.log("Error") //Error
    }

    setUsername('')
    setEmail('')
    setSelectedFile('')
    setImageUrl('')
  }
  
  //To upload a profile picture
  const uploadFile = async(file)=> {
    const id = localStorage.getItem('userId'); //Recovery userId in localstorage

    //Form for push infos to array in database
    const formData = new FormData();
    formData.append('imageUrl', file.name);

    //Recovery the backend with Axios
    const response = await axios.post(`http://localhost:8080/api/upload_file/${id}`, formData);

    //TEST
    console.log('-----------------------------------------')
    console.log('Response console.log (update profile) ⬇️')
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

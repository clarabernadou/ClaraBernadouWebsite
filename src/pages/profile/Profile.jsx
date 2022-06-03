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
    const response = await axios.put(`http://localhost:8080/api/auth/profile/update/${id}`, {username, email})

    //TEST
    console.log('-----------------------------------------')
    console.log('Response console.log (update profile) ⬇️')
    console.log(response);

    //Add the new information in localstorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
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
  }
  return (
    <>
      <Topbar />
      <div className="profile">
          <form className="profileTop">
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
              <div className="BtnAlignItems">
                <button
                  type="submit" 
                  className="loginButton"
                  onClick={ modifyAccount }
                  disabled={!email, !username}
                  >
                    Modify
                  </button>
              </div>
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
                onClick= { logout }
                >
                  Log out
                </button>
            </div>
          </div>
      </div>
    </>
  );
}

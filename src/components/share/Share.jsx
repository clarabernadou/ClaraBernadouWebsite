/* ############################# IMPORT ############################# */
// CSS
import "./share.css"; 
// Axios
import axios from "axios"; 
// React and utils
import React from "react";  
import { useState } from "react";
// Icons from Mui
import FileUploadIcon from '@mui/icons-material/FileUpload';

/* ########################################################## */
// Create a function
export default function Share(props) {
  // Add useState
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  // Create a async event
  const post = async (e) => {
    e.preventDefault();

    // Add the user
    //const setUser = props.setUser
    const setUser = 15
    console.log(setUser)
    console.log(description);
    console.log(selectedFile)

    // Add the config
     const config = {
      headers: {
        //'Authorization': `Bearer${props.token}`,
        "Content-Type": "application/json"
      }
  }

    let form = new FormData();
    form.append('userId', setUser)
    form.append('description', description)
    form.append('imageUrl', selectedFile)

    const response = await axios.post('http://localhost:8080/api/home/', {selectedFile, description}, config)
    console.log(response)
    
    props.setPosts([...props.posts, response.data])

    setDescription('')
    setSelectedFile('')
  }

/* ############################# FORM ############################# */
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <div className="shareInfosContainer">
            <div className="shareName">
              <span className="shareProfileName">Username</span>
            </div>
          </div>
        </div>
        <form>
          <div className="postInput">
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What's in your mind "
              aria-label='content-input'
              className="shareInput"
            />
          </div>
            <div className="mediasOption">
              <input 
                className="shareFiles"
                name="file"
                type="file"
                id="file"
                aria-label="file-input"
                value={selectedFile}
                onChange={(e) => setSelectedFile(e.target.value)}
              />
              <label 
                className="shareIcon"
                htmlFor="file" 
                aria-label="icon-upload"
              >
                <FileUploadIcon />
              </label>
            </div>
            <div className="postButton">
              <button 
                onClick={(e) => { post(e)}}
                className="shareButton">
                Share
                </button>
            </div>
          </form>
      </div>
    </div>
  );
}

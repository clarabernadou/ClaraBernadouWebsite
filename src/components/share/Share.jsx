// Import CSS
import "./share.css"; 
// Import utils
import axios from "axios";
import React from "react";  
import { useState } from "react";
// Import icons
import FileUploadIcon from '@mui/icons-material/FileUpload';

// Create a function
export default function Share(props) {
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  
  const post = async (e) => {
    e.preventDefault();
    
    // Add the config
     const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    const data = {
      userId: localStorage.getItem('userId'),
      description: description,
      imageUrl: selectedFile
    };

    const response = await axios.post('http://localhost:8080/api/publication/create', data, config)
      console.log('Error')
    
    props.setPosts([...props.posts, response.data])

    setDescription('')
    setSelectedFile('')
  }
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <div className="shareInfosContainer">
            <div className="shareName">
              <span className="shareProfileName">{localStorage.getItem('username')}</span>
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

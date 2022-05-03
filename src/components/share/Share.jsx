import "./share.css";
import React from "react";
import { useState } from "react";
import axios from "axios";
import FileUploadIcon from '@mui/icons-material/FileUpload';

export default function Share(props) {
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState('');

  const post = async (e) => {
    e.preventDefault();

    const setUser = props.setUser

    // const config = {
    //   headers: {
    //     'Authorization': `Bearer${props.token}`
    //   }
    // }

    let form = new FormData();
    form.append('image', selectedFile)
    form.append('name', setUser) 
    form.append('descrition', description)

    const response = await axios.post('http://localhost:8080/api/home/', form)

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
                onChange={(e) => {setSelectedFile(e.target.files[0])}}
                aria-label="file-input"
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

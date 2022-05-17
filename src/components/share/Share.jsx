// Import utils
import React, { useState } from "react";
import axios from "axios";
// Import icons
import FileUploadIcon from '@mui/icons-material/FileUpload';
// Images
import Random from "../../assets/personne-random.png";
// Import CSS
import "./share.css"; 

// Create a function
export default function Share(props) {
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState('');
  
  const post = async (e) => {
    e.preventDefault();

    // Add the config
    console.log('Voici cette image');
    console.log(selectedFile);
    // const config = {
    //   headers: {
    //      "Content-Type": "application/json"
    //    }
    // }
    let form = new FormData()
    form.append('userId', localStorage.getItem('userId'))
    form.append('image', selectedFile);
    form.append('description', description);
    console.log(form.data)
    console.log(selectedFile)
      const response = await axios({
        method: "post",
        baseURL: 'http://localhost:8080/api/publication/create',
        headers: {'Content-Type' : 'multipart/form-data'},
        data: form
      })
      console.log(response.data)
      props.setPosts([...props.posts, response.data])
      setDescription('')
      setSelectedFile('')
  }
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={Random} alt="" />
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
                //value={selectedFile}
                onChange={(e) => { setSelectedFile(e.target.files[0]) }}
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

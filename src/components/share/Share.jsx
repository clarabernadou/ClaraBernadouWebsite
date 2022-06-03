// Import utils
import React, { useState } from "react";
import axios from "axios";
// Import CSS
import "./share.css"; 

// Create a function
export default function Share(props) {
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState('');

  const post = async (e) => {
    e.preventDefault(); //To prevent the default event

    //Form for push infos to array in database
    let form = new FormData()
    form.append('userId', localStorage.getItem('userId'));
    form.append('username', props.username);
    form.append('image', selectedFile);
    form.append('description', description);

    console.log(form);

      //Recovery the backend with Axios
      const response = await axios({
        method: "post",
        baseURL: `http://localhost:8080/api/publication/create`,
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type' : 'multipart/form-data'
        },
        data: form
      })

      //TEST
      console.log('-----------------------------------------')
      console.log('Response data console.log ⬇️')
      console.log(response.data)
      
      setDescription('')
      setSelectedFile('')
      window.location.reload();
  }
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
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
              placeholder="Write whatever you want..."
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
                onChange={(e) => { setSelectedFile(e.target.files[0]) }}
              />
              <label 
                className="shareIcon"
                htmlFor="file" 
                aria-label="icon-upload"
              >
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

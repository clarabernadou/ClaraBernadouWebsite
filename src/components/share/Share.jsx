import "./share.css";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Share(props) {
  const [description, setDescription] = useState('');

  function onCreatePost(e) {
    e.preventDefault();
    console.log(description);
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
        <form onSubmit={onCreatePost}>
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
              <div className="shareIcon"/>
            </div>
            <div className="postButton">
              <button 
                type='submit' 
                className="shareButton">
                Share
                </button>
            </div>
          </form>
      </div>
    </div>
  );
}

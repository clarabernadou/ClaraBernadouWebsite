// Import utils
import React, { useState } from "react";
import axios from "axios";

// Create a function
export default function Share(props) {
  const [descriptionComment, setDescriptionComment] = useState('');

  const comment = async (e) => {
    e.preventDefault(); //To prevent the default event
    //Add the config
    const config = {
      headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }
    console.log(config);

      //Recovery the backend with Axios
      const response = await axios.post(`http://localhost:8080/api/:publicationId/comments`, {
        username: localStorage.getItem('username'),
        descriptionComment: descriptionComment,
        publicationId: props.publicationId,
      }, config);
      console.log(response);

      setDescriptionComment('')
  }

  const reload = async (e) => {
    e.preventDefault();
    window.location.reload(false);
  }
  return (
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
              value={descriptionComment}
              onChange={(e) => setDescriptionComment(e.target.value)}
              placeholder="Write a comment..."
              aria-label='content-input'
              className="shareInput"
            />
          </div>
            <div className="postButton">
              <button 
                onClick={(e) => { comment(e), reload(e)}}
                className="shareButton">
                Comment
              </button>
            </div>
          </form>
      </div>
  );
}
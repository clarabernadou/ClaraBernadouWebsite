//Import CSS
import "../post/post.css"
import "../comment/comment.css"
//Import utils
import React, { useState, useEffect } from "react";
import axios from "axios";
//Import icons
import { MoreVert } from "@mui/icons-material";

export default function Comment({ comment }) {
  //Create a state to make appear and disappear a button
  const [showBtn, setShowBtn] = useState(true);
  //Add use effect which launches the action as soon as the page loads
  useEffect(() => {
      setShowBtn(false);
  }, []);

  //Define id with comment id
  const id = comment.id

  //Add async function for delete comment
  const deleteComment = async(e) => {
    e.preventDefault() //To prevent the default event
    //Add the config
    const config = {
      headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}` //Authorization with token stored in localStorage
      }
    }
    //Recovery the backend with Axios
    const deleteResponse = await axios.delete(`http://localhost:8080/api/comments/delete/${id}`, config);
    //Create condition for reload if deleteResponse is ok, else error
    if(deleteResponse){
      window.location.reload(false);
    }else{
      console.error("error");
    }
  }
  return (
  <div className="commentContainer">
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <div className="postInfosContainer">
              <div className="postName">
                <span className="postProfileName">
                  {comment.username}
                </span>
              </div>
            </div>
          </div>
          <div className="postTopRight">
            <MoreVert onClick={() => setShowBtn(!showBtn)} />
            {showBtn && 
              <div className="deleteModifyBtn">
                <button className="deleteBtn" onClick={ deleteComment }>Delete</button>
              </div>}
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{comment.descriptionComment}</span>
        </div>
      </div>
    </div>
  </div>
  );
}
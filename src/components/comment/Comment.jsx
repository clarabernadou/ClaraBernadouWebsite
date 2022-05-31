//Import utils
import React, { useState, useEffect } from "react";
import axios from "axios";
//Import icons
import { MoreVert } from "@mui/icons-material";
//Import CSS
import "../post/post.css"
import "../comment/comment.css"

export default function Comment({ comment }) {
  const [showBtn, setShowBtn] = useState(true);
  useEffect(() => {
      setShowBtn(false);
  }, []);

  const id = comment.id

  const deleteComment = async(e) => {
    e.preventDefault() //To prevent the default event

    //Recovery the backend with Axios
    const deleteResponse = await axios.delete(`http://localhost:8080/api/comments/delete/${id}`);
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
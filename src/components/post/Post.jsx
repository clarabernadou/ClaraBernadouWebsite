//Import CSS
import "./post.css";
//Import utils
import React, { useState, useEffect } from "react";
import axios from "axios";
//Import icons
import { MoreVert } from "@mui/icons-material";
import Comment from "../comment/Comment";
import ShareComment from "../shareComment/shareComment";

export default function Post({ post }) {
  const [showBtn, setShowBtn] = useState(true);
  useEffect(() => {
      setShowBtn(false);
  }, []);

  const id = post.id

  const deletePost = async(e) => {
    e.preventDefault() //To prevent the default event

    //Recovery the backend with Axios
    const deleteResponse = await axios.delete(`http://localhost:8080/api/publication/delete/${id}`);
    if(deleteResponse){
      window.location.reload(false);
    }else{
      console.error("error");
    }
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <div className="postInfosContainer">
              <div className="postName">
                <span className="postProfileName">
                  {post.username}
                </span>
              </div>
            </div>
          </div>
          <div className="postTopRight">
            <MoreVert onClick={() => setShowBtn(!showBtn)} />
            {showBtn && 
              <div className="deleteModifyBtn">
                <button className="deleteBtn" onClick={ deletePost }>Delete</button>
              </div>}
          </div>
        </div>
        <div className="postCenter">
          <img className="postImg" src={post.imageUrl} alt="" />
          <span className="postText">{post.description}</span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <span className="postCommentText">{post.comments.length} comments</span>
          </div>
        </div>
      </div>
      <hr />
      <ShareComment publicationId={post.id} />
      {post.comments.map((c) => (
        <Comment key={c.id} comment={c} />
      ))}
    </div>
  );
}
//Import utils
import React from "react";
//Import icons
import { MoreVert } from "@mui/icons-material";
//Import CSS
import "../post/post.css"

export default function Comment({ comment }) {
  
  return (
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
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{comment.descriptionComment}</span>
        </div>
      </div>
    </div>
  );
}
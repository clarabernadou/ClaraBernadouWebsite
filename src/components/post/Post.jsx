// Import CSS
import "./post.css";
// Import utils
import React, { useState } from "react";
// Import icons
import { MoreVert } from "@mui/icons-material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
// Images
import Random from "../../assets/personne-random.png";

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Random}
              alt=""
            />
            <div className="postInfosContainer">
              <div className="postName">
                <span className="postProfileName">
                  {localStorage.getItem('username')}
                </span>
              </div>
            </div>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <img className="postImg" src={post.imageUrl} alt="" />
          <span className="postText">{post.description}</span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
          <div className="postBottomRight">
            <span className="postLikeCounter">{like}</span>
            <ThumbUpIcon className="likeIcon" onClick={ likeHandler } />
            <span className="postLikeCounter">{like}</span>
            <ThumbDownIcon className="likeIcon" onClick={ likeHandler } />
          </div>
        </div>
      </div>
    </div>
  );
}
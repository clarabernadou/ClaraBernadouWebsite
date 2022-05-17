import React from "react";
import Post from "../comment/Comment";
import Share from "../shareComment/shareComment";
import "../feed/feed.css";

export default function Feed(props) {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share setPosts={props.setPosts} posts={props.posts} />
        <div className="posts">
          {props.posts.map((p) => (
            <Post key={p.id} post={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

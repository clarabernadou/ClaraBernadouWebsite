import React from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";

export default function Feed(props) {
  console.log(props.posts);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share setPosts={props.setPosts} posts={props.posts} />
        {props.posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}

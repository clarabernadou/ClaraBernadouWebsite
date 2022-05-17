// Import utils
import React, { useEffect } from "react";
// Import components
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";

export default function Feed(props) {
  useEffect(() => {
    async function fetchData(){
      let data = await fetch('http://localhost:8080/api/publications')
      console.log('Ceci est la response GET Feed')
      console.log(data)
      data = await data.json()
      console.log(data);
      props.setPosts(data)
    }
    fetchData();
  },[])
  console.log(props.posts);
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

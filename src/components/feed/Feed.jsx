// Import utils
import React, { useEffect } from "react";
// Import components
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";

export default function Feed(props) {
  const username = localStorage.getItem('username');
  console.log(username);
  
  //Use effect which launches the action as soon as the page loads
  useEffect(() => {
    async function fetchData(){
    //Add the config
    const config = {
      headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }
      let data = await fetch('http://localhost:8080/api/publications', config) //Recovery data
      data = await data.json()

      props.setPosts(data)
    }
    fetchData();
  },[])

  //TEST
  console.log('-----------------------------------------')
  console.log('Props posts console.log ⬇️')
  console.log(props.posts);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share setPosts={props.setPosts} posts={props.posts} username={username} />
        <div className="posts">
          {props.posts.map((p) => (
            <Post key={p.id} post={p} posts={props.posts} setPosts={props.setPosts}/>
          ))}
        </div>
      </div>
    </div>
  );
}

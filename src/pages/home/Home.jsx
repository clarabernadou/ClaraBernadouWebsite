//Import utils
import React, { useState, useEffect } from "react";
//Import components
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
//Import CSS
import "./home.css"

export default function Home() {
  const [ posts, setPosts ] = useState([])

  //Use effect which launches the action as soon as the page loads
  useEffect(() => {
    //Create condition
    if (!localStorage.getItem('token')) { //Check if you have a token in local storage (login)
      window.location.href = "/signin"; //Navigate
    }
  }, []);

  return (
    <>
      <Topbar />
        <Feed setPosts={setPosts} posts={posts} />
    </>
  );
}

import React, { useState, useEffect } from "react";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import "./home.css"

export default function Home() {
  const [ posts, setPosts ] = useState([])

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      window.location.href = "/signin";
    }
  }, []);

  return (
    <>
      <Topbar />
        <Feed setPosts={setPosts} posts={posts} />
    </>
  );
}

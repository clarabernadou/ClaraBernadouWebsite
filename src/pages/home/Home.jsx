import React, { useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import "./home.css"

export default function Home() {
  const [ posts, setPosts ] = useState([])
  return (
    <>
      <Topbar />
        <Feed setPosts={setPosts} posts={posts} />
    </>
  );
}

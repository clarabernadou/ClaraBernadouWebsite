import "./topbar.css";
import React from "react";

export default function Topbar() {
  const home = e => {
    e.preventDefault()
    window.location.href = "/";
  }
  const profile = e => {
    e.preventDefault()
    window.location.href = "/profile";
  }
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo" onClick={home}>Groupomania</span>
      </div>
      <div className="topbarRight">
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" onClick={profile}/>
      </div>
    </div>
  );
}

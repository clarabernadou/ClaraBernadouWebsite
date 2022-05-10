// CSS
import "./topbar.css";
// Utils
import React from "react";
// Images
import Random from "../../assets/personne-random.png";

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
        <img src={Random} alt="" className="topbarImg" onClick={profile}/>
      </div>
    </div>
  );
}

//Import CSS
import "./topbar.css";
//Import utils
import React from "react";
//Import images
import Random from "../../assets/personne-random.png";
//Import logo
import Logo from "../../assets/logo/groupomania-logo.png"

export default function Topbar() {
  const home = e => {
    e.preventDefault() //To prevent the default event
    window.location.href = "/"; //Navigate
  }
  const profile = e => {
    e.preventDefault() //To prevent the default event
    window.location.href = "/profile"; //Navigate
  }
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <img className="logo" onClick={home} src={Logo} />
      </div>
      <div className="topbarRight">
        <img src={Random} alt="" className="topbarImg" onClick={profile}/>
      </div>
    </div>
  );
}

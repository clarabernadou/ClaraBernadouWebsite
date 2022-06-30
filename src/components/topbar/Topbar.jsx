//Import CSS
import "./topbar.css";
//Import utils
import React from "react";
//Import logo
import Logo from "../../assets/logo/CB.png"

export default function Topbar() {
  //Add async function for navigate on click
  const home = e => {
    e.preventDefault() //To prevent the default event
    window.location.href = "/"; //Navigate to home page
  }
  return (
    <div className="topbarContainer">
      <div className="topbarLR">
        <div className="topbarLeft">
          <img className="logo" onClick={home} src={Logo} alt="Logo CB Website"/>
        </div>
        {/* <nav className="topbarRight">
          <div className="topbarNav">Projets</div>
          <div className="topbarNav">Parcours</div>
          <div className="topbarNav">CV</div>
        </nav> */}
      </div>
      <hr />
    </div>
    
  );
}

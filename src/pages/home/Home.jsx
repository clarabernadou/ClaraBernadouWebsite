//Import CSS
import "./home.css"
//Import utils
import React from "react";
//Import components
import Topbar from "../../components/topbar/Topbar";
import Linkedin from "../../assets/logo/linkedin.png"
import Instagram from "../../assets/logo/instagram.png"

export default function Home() {
  const link = e => {
    e.preventDefault() //To prevent the default event
    window.location.href = "https://github.com/clarabernadou/booki";
  }
  const link2 = e => {
    e.preventDefault() //To prevent the default event
    window.location.href = "https://github.com/clarabernadou/ClaraBernadou_3_16112021";
  }
  const link3 = e => {
    e.preventDefault() //To prevent the default event
    window.location.href = "https://github.com/clarabernadou/ClaraBernadou_4_09122021";
  }
  const link4 = e => {
    e.preventDefault() //To prevent the default event
    window.location.href = "https://github.com/clarabernadou/ClaraBernadou_5_05012022";
  }
  const link5 = e => {
    e.preventDefault() //To prevent the default event
    window.location.href = "https://github.com/clarabernadou/ClaraBernadou_6_14032022";
  }
  const link6 = e => {
    e.preventDefault() //To prevent the default event
    window.location.href = "https://github.com/clarabernadou/ClaraBernadou_P7_Frontend";
  }
  const linkedin = e => {
    e.preventDefault() //To prevent the default event
    window.location.href = "https://www.linkedin.com/in/clara-bernadou-865252223/";
  }
  const instagram = e => {
    e.preventDefault() //To prevent the default event
    window.location.href = "https://www.instagram.com/clarabernadou.web/";
  }

  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <div className="homeTitleContainer">
          <h1>Welcome</h1>
        <h2>to my website</h2>
        </div>
        <div className="homeArticles">
          <article onClick={link}>Booki</article>
          <article className="ohmyfood" onClick={link2}>Ohmyfood</article>
          <article onClick={link3}>La chouette agence</article>
          <article className="kanap" onClick={link4}>Kanap</article>
          <article className="piiquante" onClick={link5}>Piiquante</article>
          <article className="groupomania" onClick={link6}>Groupomania</article>
        </div>
        <footer>
          <img className="social" src={Linkedin} onClick={linkedin} />
          <img className="social" src={Instagram} onClick={instagram} />
        </footer>
      </div>
    </>
  );
}

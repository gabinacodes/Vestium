import React from "react";
import Logo from "./images/logo.svg";
import Android from "./images/navAndroidButton.svg"
import IosButton from "./images/navIosButton.svg"
const Header = () => {
  return (
    <header>
     <img src={Logo} alt="logo"/>
      <span className="nav">
        <li>Home</li>
        <li>About</li>
        <li>How it works</li>
        <li>FAQ</li>
      </span>
      <div className="btn">
      <img className="android" src={Android} alt="android"/>
      <img className="android" src={IosButton} alt="android"/>
      </div>
    </header>
  );
}

export default Header;

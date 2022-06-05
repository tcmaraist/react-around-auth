import React from "react";
import image from "../images/header_logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={image} alt="Around The U.S. logo" className="header__logo" />
    </header>
  );
}

export default Header;

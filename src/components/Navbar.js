import React from "react";

import logo from "../images/logo.svg";

import Button from "./Button";
import Menu from "./Menu/Menu";
import ToggleButton from "./Menu/ToggleButton";

function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__logo">
          <img src={logo} alt="easybank-logo.svg" />
        </div>
        <div className="navbar__items">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
          <span>Blog</span>
          <span>Careers</span>
        </div>
        <div className="navbar__button">
          <Button text="Request Invite" />
        </div>
        <ToggleButton
          handleShowMenu={props.handleShowMenu}
          showMenu={props.showMenu}
        />
      </div>
    </nav>
  );
}

export default Navbar;

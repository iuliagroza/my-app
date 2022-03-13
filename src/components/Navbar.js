import React from "react"

import logo from "../images/logo.svg"

import Button from "./Button"
import Icon from "./Icon"

function Navbar() {
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
        <Icon />
      </div>
    </nav>
  )
}

export default Navbar
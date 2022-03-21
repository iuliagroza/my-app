import React from "react"

import logoAlt from "../images/logo-white.svg"
import { ReactComponent as Facebook } from "../images/icon-facebook.svg"
import { ReactComponent as Twitter } from "../images/icon-twitter.svg"
import { ReactComponent as Youtube } from "../images/icon-youtube.svg"
import { ReactComponent as Pinterest } from "../images/icon-pinterest.svg"
import { ReactComponent as Instagram } from "../images/icon-instagram.svg"

import Button from "./Button"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__contacts">
          <img src={logoAlt} alt="easybank-logo" />
          <div className="footer__social">
            <Facebook />
            <Youtube />
            <Twitter />
            <Pinterest />
            <Instagram />
          </div>
        </div>
        <div className="footer__items">
          {}
          <div className="item1">
            <span>About Us</span>
            <span>Contact</span>
            <span>Blog</span>
          </div>
          <div className="item2">
            <span>Careers</span>
            <span>Support</span>
            <span>Privacy Policy</span>
          </div>
        </div>
        <div className="footer__button">
          <Button text="Request Invite" />
          <span> &copy; Easybank. All Rights Reserved</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
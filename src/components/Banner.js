import React from "react"
import "../App.css"

import phones from "../images/image-mockups.png"

import Button from "./Button"

function Banner() {
  return (
    <header className="banner">
      <div className="banner__wrapper">
        <div className="banner__bg__wrapper">
          <div className="banner__bg"></div>
        </div>
        <div className="banner__left">
          <h1 className="banner__title">
            Next generation <br /> digital banking
          </h1>
          <p className="banner__desc">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button text="Request Invite" />
        </div>
        <div className="banner__right">
          <img src={phones} alt="phones" className="banner__phones" />
        </div>
      </div>
    </header>
  )
}

export default Banner
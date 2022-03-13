import React from "react"

import phones from "../images/image-mockups.png"

import Button from "./Button"

function Banner() {
  return (
    <header className="hero">
      <div className="hero__wrapper">
        <div className="hero__bg__wrapper">
          <div className="hero__bg"></div>
        </div>
        <div className="hero__left">
          <h1 className="hero__title">
            Next generation <br /> digital banking
          </h1>
          <p className="hero__desc">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button text="Request Invite" />
        </div>
        <div className="hero__right">
          <img src={phones} alt="phones" className="hero__phones" />
        </div>
      </div>
    </header>
  )
}

export default Banner
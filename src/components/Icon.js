import React from "react"

import hamburger from "../images/icon-hamburger.svg"
import close from "../images/icon-close.svg"

function Icon() {
  const state = false;

  return (
    <button className="nav-icon">
      {state ? (
        <img src={close} alt="close" />
      ) : (
        <img src={hamburger} alt="hamburger" />
      )}
    </button>
  )
}

export default Icon
import React, { useContext } from "react";
import "../App.css";

import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";
import { ToggleContext } from "./ToggleContext";

function Icon() {
  /*const { state, setToggle } = useContext(ToggleContext);

  const toggleNav = () => {
    setToggle(!state)
  };*/

  const state = false;

  return (
    <button className="nav-icon" /*onClick={toggleNav}*/>
      {state ? (
        <img src={close} alt="close" />
      ) : (
        <img src={hamburger} alt="hamburger" />
      )}
    </button>
  );
}

export default Icon;

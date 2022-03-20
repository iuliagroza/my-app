import hamburger from "../../images/icon-hamburger.svg";
import close from "../../images/icon-close.svg";

function ToggleButton(props) {
  return (
    <button className="nav-icon" onClick={props.handleShowMenu}>
      {props.showMenu ? (
        <img src={close} alt="close" />
      ) : (
        <img src={hamburger} alt="hamburger" />
      )}
    </button>
  );
}

export default ToggleButton;

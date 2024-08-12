import "./NavBar.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";

function NavBar() {
  return (
    <>
      <div class="header__logo-container">
        <img src={logo} class="header__logo-image" alt="BrainFlix Logo" />
      </div>
    </>
  );
}

export default NavBar;

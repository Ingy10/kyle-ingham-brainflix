import "./NavBar.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import profileImage from "../../assets/images/Mohan-muruge.jpg";
import magnifyIcon from "../../assets/icons/search.svg";
import download from "../../assets/icons/upload.svg";

function NavBar() {
  return (
    <section className="nav">
      <div className="nav__logo-container">
        <img
          src={logo}
          className="nav__logo-image logo-image"
          alt="BrainFlix Logo"
        />
      </div>
      <div className="nav__content-container">
        <div className="nav__content-sub-container1">
          <div className="nav__input-wrapper">
            <input className="nav__input-search" placeholder="Search"></input>
            <img className="nav__input-search--icon" src={magnifyIcon} />
          </div>
          <div className="nav__avatar-container--mobile">
            <img className="nav__avatar-image" src={profileImage} />
          </div>
        </div>
        <div className="nav__CTA-button-wrapper">
          <a className="nav__CTA-button-upload" href="#">
            UPLOAD
          </a>
          <img className="nav__CTA-button-upload--icon" src={download} />
        </div>
        <div className="nav__avatar-container--desktop">
          <img className="nav__avatar-image" src={profileImage} />
        </div>
      </div>
    </section>
  );
}

export default NavBar;

import "./NavBar.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import profileImage from "../../assets/images/Mohan-muruge.jpg";
import magnifyIcon from "../../assets/icons/search.svg";
import download from "../../assets/icons/upload.svg";

function NavBar() {
  return (
    <section class="nav">
      <div class="nav__logo-container">
        <img
          src={logo}
          class="nav__logo-image logo-image"
          alt="BrainFlix Logo"
        />
      </div>
      <div class="nav__content-container">
        <div class="nav__content-sub-container1">
          <div class="nav__input-wrapper">
            <input class="nav__input-search" placeholder="Search"></input>
            <img class="nav__input-search--icon" src={magnifyIcon} />
          </div>
          <div class="nav__avatar-container--mobile">
            <img class="nav__avatar-image" src={profileImage} />
          </div>
        </div>
        <div class="nav__CTA-button-wrapper">
          <a class="nav__CTA-button-upload" href="#">
            UPLOAD
          </a>
          <img class="nav__CTA-button-upload--icon" src={download} />
        </div>
        <div class="nav__avatar-container--desktop">
          <img class="nav__avatar-image" src={profileImage} />
        </div>
      </div>
    </section>
  );
}

export default NavBar;

import "./NavBar.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import profileImage from "../../assets/images/Mohan-muruge.jpg";
import magnifyIcon from "../../assets/icons/search.svg";
import download from "../../assets/icons/upload.svg";
import { useState, useEffect } from "react";

function NavBar() {
  // Allows user to submit a search term and have the searchTerm state update
  const [searchTerm, setSearchTerm] = useState("");
  const pressEnter = async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setSearchTerm(event.target.value);
      event.target.value = "";
    }
  };

  // When someone submits a search, the search term will be logged to the console if it is not an empty string and only after setSearchTerm has run.
  useEffect(() => {
    if (searchTerm !== "") {
      console.log("Search Term: " + searchTerm);
    }
  }, [searchTerm]);

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
            <input
              className="nav__input-search"
              placeholder="Search"
              onKeyDown={pressEnter}
            ></input>
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

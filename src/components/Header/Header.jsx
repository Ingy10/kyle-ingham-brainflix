import "./Header.scss";
import NavBar from "../NavBar/NavBar";
import { HOST_URL } from "../../../util.js";

function Header({ selectedVideo }) {
  return (
    <>
      <header className="header">
        <NavBar />
        <div className="header__video-wrapper-container">
          <div className="header__video-wrapper">
            <video
              className="header__video-player"
              src={selectedVideo.video + "?api_key=kyle" + Math.random()}
              poster={`${HOST_URL}${selectedVideo.image}`}
              controls
            ></video>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

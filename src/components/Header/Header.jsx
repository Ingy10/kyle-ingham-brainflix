import "./Header.scss";
import NavBar from "../NavBar/NavBar";

function Header({ selectedVideo }) {
  return (
    <>
      <header className="header">
        <NavBar />
        <div className="header__video-wrapper-container">
          <div className="header__video-wrapper">
            <video
              className="header__video-player"
              src={selectedVideo.video + "?api_key=kyle"}
              type="video/mp4"
              poster={selectedVideo.image}
              controls
            ></video>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

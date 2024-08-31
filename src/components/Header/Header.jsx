import "./Header.scss";
import NavBar from "../NavBar/NavBar";

function Header({ selectedVideo, NEW_BASE_URL }) {
  return (
    <>
      <header className="header">
        <NavBar />
        <div className="header__video-wrapper-container">
          <div className="header__video-wrapper">
            <video
              className="header__video-player"
              src={selectedVideo.video + "?api_key=kyle" + Math.random()}
              poster={`${NEW_BASE_URL}${selectedVideo.image}`}
              alt={`${selectedVideo.title}`}
              controls
            ></video>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

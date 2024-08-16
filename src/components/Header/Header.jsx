import "./Header.scss";
import NavBar from "../NavBar/NavBar";
import Video from "../../assets/images/Upload-video-preview.jpg";
import PlayIcon from "../../assets/icons/play.svg";
import FullScreen from "../../assets/icons/fullscreen.svg";
import VolumeOff from "../../assets/icons/volume_up.svg";

function Header({ selectedVideo }) {
  return (
    <>
      <header className="header">
        <NavBar />
        <div className="header__video-wrapper-container">
          <div className="header__video-wrapper">
            <video
              className="header__video-player"
              src={selectedVideo.video}
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

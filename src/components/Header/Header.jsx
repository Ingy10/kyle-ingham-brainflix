import "./Header.scss";
import NavBar from "../NavBar/NavBar";
import Video from "../../assets/images/Upload-video-preview.jpg";
import PlayIcon from "../../assets/icons/play.svg";
import FullScreen from "../../assets/icons/fullscreen.svg";
import VolumeOff from "../../assets/icons/volume_up.svg";

function Header() {
  return (
    <>
      <header className="header">
        <NavBar />
        <div class="header__video-wrapper">
          <video
            className="header__video-player"
            src={Video}
            poster={Video}
          ></video>
          <img className="header__video-player--play" src={PlayIcon} />
          <img className="header__video-player--fullscreen" src={FullScreen} />
          <img className="header__video-player--volume" src={VolumeOff} />
        </div>
      </header>
    </>
  );
}

export default Header;

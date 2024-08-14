import "./Header.scss";
import NavBar from "../NavBar/NavBar";
import Video from "../../assets/images/Upload-video-preview.jpg";

function Header() {
  return (
    <>
      <header className="header">
        <NavBar />
        <video
          className="header__video-player"
          src={Video}
          poster={Video}
        ></video>
      </header>
    </>
  );
}

export default Header;

import "./Header.scss";
import NavBar from "../NavBar/NavBar";
import Video from "../../assets/images/Upload-video-preview.jpg";

function Header() {
  return (
    <>
      <section className="header">
        <NavBar />
        <video src={Video} poster={Video}></video>
      </section>
    </>
  );
}

export default Header;

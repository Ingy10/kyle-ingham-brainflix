import "./Footer.scss";
import Thumbnail from "../../assets/images/Upload-video-preview.jpg";

function videoList() {
  return (
    <>
      <section className="video-list">
        <h2 className="video-list__title">Next Videos</h2>
        <ul className="video-list__container">
          <li className="video-list__item">
            <div className="video-list__thumbnail-container">
              <img className="video-list__thumbnail-image" src={Thumbnail} />
            </div>
            <div className="video-list__content-container">
              <p className="video-list__video-title">Title of Video</p>
              <p className="video-list__video-author">Authors name</p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
export default videoList;

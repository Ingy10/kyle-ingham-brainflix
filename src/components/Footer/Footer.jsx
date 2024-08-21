import "./Footer.scss";
import { Link } from "react-router-dom";

function VideoList({ filteredVideoList }) {
  return (
    <>
      <footer className="video-list">
        <section className="video-list__list">
          <h2 className="video-list__title">NEXT VIDEOS</h2>
          <ul className="video-list__container">
            {filteredVideoList.map((video) => (
              <li className="video-list__item" key={video.id}>
                <Link
                  className="video-list__thumbnail-container"
                  to={`/videos/${video.id}`}
                >
                  <img
                    className="video-list__thumbnail-image"
                    src={video.image}
                    alt={video.title}
                  />
                </Link>
                <div className="video-list__content-container">
                  <Link
                    className="video-list__video-title"
                    to={`/videos/${video.id}`}
                  >
                    {video.title}
                  </Link>
                  <p className="video-list__video-author">{video.channel}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </footer>
    </>
  );
}
export default VideoList;

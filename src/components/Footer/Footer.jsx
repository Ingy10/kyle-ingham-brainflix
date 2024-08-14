import "./Footer.scss";
import VideoData from "../VideoData/VideoData";

function VideoList() {
  const videos = VideoData();

  return (
    <>
      <section className="video-list">
        <h2 className="video-list__title">Next Videos</h2>
        <ul className="video-list__container">
          {videos.map((video) => (
            <li className="video-list__item" key={video.id}>
              <div className="video-list__thumbnail-container">
                <img
                  className="video-list__thumbnail-image"
                  src={video.image}
                  alt={video.title}
                />
              </div>
              <div className="video-list__content-container">
                <p className="video-list__video-title">{video.title}</p>
                <p className="video-list__video-author">{video.channel}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
export default VideoList;

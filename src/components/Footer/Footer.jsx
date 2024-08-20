import "./Footer.scss";
import { Link } from "react-router-dom";

function VideoList({ filteredVideoList }) {
  // when video is clicked from video list setSelectedVideo will set selectedVideo variable to the video that was clicked
  // const handleVideoClick = (video) => {
  //   setSelectedVideo(video);
  // };

  // const { id } = useParams(video);
  // const clickedVideo = video.find((video) => video.id === id);

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
                  // onClick={() => handleVideoClick(video)}
                  to={`/VideoDetailsPage/${video.id}`}
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
                    // onClick={() => handleVideoClick(video)}
                    to={`./VideoDetailsPage/${video.id}`}
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

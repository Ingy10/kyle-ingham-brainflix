import "./Footer.scss";

function VideoList({ filteredVideoList, setSelectedVideo }) {
  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <>
      <footer className="video-list">
        <section className="video-list__list">
          <h2 className="video-list__title">NEXT VIDEOS</h2>
          <ul className="video-list__container">
            {filteredVideoList.map((video) => (
              <li className="video-list__item" key={video.id}>
                <div
                  className="video-list__thumbnail-container"
                  onClick={() => handleVideoClick(video)}
                >
                  <img
                    className="video-list__thumbnail-image"
                    src={video.image}
                    alt={video.title}
                  />
                </div>
                <div className="video-list__content-container">
                  <p
                    className="video-list__video-title"
                    onClick={() => handleVideoClick(video)}
                  >
                    {video.title}
                  </p>
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

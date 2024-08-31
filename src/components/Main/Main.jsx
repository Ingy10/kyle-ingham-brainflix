import "./Main.scss";
import Comments from "../Comments/Comments";
import viewIcon from "../../assets/icons/views.svg";
import likeIcon from "../../assets/icons/likes.svg";

function Main({
  selectedVideo,
  videoId,
  defaultVideoId,
  NEW_BASE_URL,
  incrementVideoLikes,
}) {
  const date = new Date(selectedVideo.timestamp);

  return (
    <>
      <main className="main">
        <section className="main__container-title">
          <h1 className="main__title">{selectedVideo.title}</h1>
        </section>
        <section className="main__video-data">
          <div className="main__video-container-1">
            <div className="main__video-data--1">{selectedVideo.channel}</div>
            <div className="main__video-data--2">
              {date.toLocaleDateString()}
            </div>
          </div>
          <div className="main__video-container-2">
            <div className="main__video-data--3">
              <img
                className="main__video-data--view-icon"
                src={viewIcon}
                alt="View icon"
              />
              <p className="main__video-data--view-text">
                {selectedVideo.views}
              </p>
            </div>
            <div className="main__video-data--4" onClick={incrementVideoLikes}>
              <img
                className="main__video-data--like-icon"
                src={likeIcon}
                alt="Heart icon"
              />
              <p className="main__video-data--like-text">
                {selectedVideo.likes}
              </p>
            </div>
          </div>
        </section>
        <section className="main__video-description">
          <p>{selectedVideo.description}</p>
        </section>
        <Comments
          selectedVideo={selectedVideo}
          videoId={videoId}
          defaultVideoId={defaultVideoId}
          NEW_BASE_URL={NEW_BASE_URL}
        />
      </main>
    </>
  );
}

export default Main;

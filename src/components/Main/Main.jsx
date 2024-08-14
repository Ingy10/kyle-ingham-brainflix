import "./Main.scss";
import Comments from "../Comments/Comments";
import ViceoData from "../VideoData/VideoData";
import viewIcon from "../../assets/icons/views.svg";
import likeIcon from "../../assets/icons/likes.svg";

function Main() {
  return (
    <>
      <main className="main">
        <section className="main__container-title">
          <h1 className="main__title">
            (The Future of Artificial Intelligence - must pull this info from
            data API)
          </h1>
        </section>
        <section className="main__video-data">
          <div className="main__video-container--1">
            <div className="main__video-data--1">Name</div>
            <div className="main__video-data--2">Date</div>
          </div>
          <div className="main__video-container--2">
            <div className="main__video-data--3">
              <img className="main__video-data--view-icon" src={viewIcon} />
              <p className="main__video-data--view-text">Views</p>
            </div>
            <div className="main__video-data--4">
              <img className="main__video-data--like-icon" src={likeIcon} />
              <p>Likes</p>
            </div>
          </div>
        </section>
        <section className="main__video-description">
          <p>
            (this will need to be accessed via the data provided in our API)
          </p>
        </section>
        <section className="main__number-of-comments">
          <p className="main__number-of-comments-text">3 Comments</p>
        </section>
      </main>
      <Comments />
    </>
  );
}

export default Main;

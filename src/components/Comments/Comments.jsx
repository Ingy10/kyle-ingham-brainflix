import "./Comments.scss";
import profileImage from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/icons/add_comment.svg";
import CommentsSection from "../CommentsSection/CommentsSection.jsx";

function Comments( {selectedVideo}) {
  return (
    <>
      <section className="comments">
        <div className="comments__number-of-comments">
          <p className="comments__number-of-comments-text">{selectedVideo.comments.length} Comments</p>
        </div>
        <div className="comments__section">
          <div className="comments__user-avatar">
            <div className="comments__user-avatar--container">
              <img className="comments__user-avatar--img" src={profileImage} />
            </div>
          </div>
          <form className="comments__form">
            <div className="comments__input-wrapper">
              <label className="comments__form-title" name="comment">
                JOIN THE CONVERSATION
              </label>
              <textarea
                className="comments__form-input"
                id="comment"
                rows="1"
                placeholder="Add a new comment"
              ></textarea>
            </div>
            <div className="comments__button-wrapper">
              <button className="comments__form-button " type="submit">
                COMMENT
              </button>
              <img className="comments__form-button--icon" src={commentIcon} />
            </div>
          </form>
        </div>
      </section>
      <CommentsSection selectedVideo={selectedVideo}/>
    </>
  );
}

export default Comments;

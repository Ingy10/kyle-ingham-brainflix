import "./Comments.scss";
import profileImage from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/icons/add_comment.svg";

function Comments() {
  return (
    <>
      <section className="comments">
        <div className="comments__user-avatar">
          <div className="comments__user-avatar--container">
            <img className="comments__user-avatar--img" src={profileImage} />
          </div>
        </div>
        <form className="comments__form">
          <label className="comments__form-title" name="comment">
            JOIN THE CONVERSATION
          </label>
          <textarea
            className="comments__form-input"
            id="comment"
            rows="7"
            cols="30"
          ></textarea>
          <div className="comments__button-wrapper">
            <button className="comments__form-button " type="submit">
              COMMENT
            </button>
            <img className="comments__form-button--icon" src={commentIcon} />
          </div>
        </form>
      </section>
    </>
  );
}

export default Comments;

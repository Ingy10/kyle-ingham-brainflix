import "./CommentsSection.scss";

function commentsSection() {
  return (
    <>
      <section className="comments-section">
        <div className="comments-section__comment-container">
          <div className="comments-section__avatar-wrapper">
            <div className="comments-section__avatar-container"></div>
          </div>
          <div className="comments-section__content">
            <div className="comments-section__header">
              <p className="comments-section__name">Person</p>
              <p className="comments-section__date">Date</p>
            </div>
            <p className="comments-section__text">comment content text...</p>
          </div>
        </div>
      </section>
    </>
  );
}
export default commentsSection;

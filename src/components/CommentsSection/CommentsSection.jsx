import "./CommentsSection.scss";

function commentsSection({ selectedVideo }) {
  // sets comments to the selected video comment list
  const comments = selectedVideo.comments;

  // defines time in simple text describing how long since comment was made.
  const formatDate = (time) => {
    const commentTime = new Date(time);
    const currentTime = new Date();
    const commentTimeDifference = currentTime - commentTime;

    const seconds = commentTimeDifference / 1000;
    const minutes = Math.round(seconds / 60);
    const hours = Math.round(minutes / 60);
    const days = Math.round(hours / 24);
    const months = Math.round(days / 30);
    const years = months / 12;

    if (years > 1) {
      const yearsRounded = Math.round(years);
      if (yearsRounded === 1) {
        return `${yearsRounded} year ago`;
      }
      return `${yearsRounded} years ago`;
    } else if (months === 12) {
      return `1 year ago`;
    } else if (months > 1) {
      return `${months} months ago`;
    } else if (months === 1) {
      return `${months} month ago`;
    } else if (days > 1) {
      return `${days} days ago`;
    } else if (days === 1) {
      return `${days} day ago`;
    } else if (hours > 1) {
      return `${hours} hours ago`;
    } else if (hours === 1) {
      return `${hours} hour ago`;
    } else if (minutes > 1) {
      return `${minutes} minutes ago`;
    } else {
      return `< 1 minute ago`;
    }
  };

  return (
    <>
      <section className="comments-section">
        {comments.map((comment) => (
          <div className="comments-section__comment-container" key={comment.id}>
            <div className="comments-section__avatar-wrapper">
              <div className="comments-section__avatar-container"></div>
            </div>
            <div className="comments-section__content">
              <div className="comments-section__header">
                <p className="comments-section__name">{comment.name}</p>
                <p className="comments-section__date">
                  {formatDate(comment.timestamp)}
                </p>
              </div>
              <p className="comments-section__text">{comment.comment}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
export default commentsSection;

import "./Comments.scss";
import profileImage from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/icons/add_comment.svg";
import CommentsSection from "../CommentsSection/CommentsSection.jsx";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Comments({
  selectedVideo,
  BASE_URL,
  API_KEY,
  videoId,
  defaultVideoId,
  NEW_BASE_URL,
}) {
  const [currentComment, setCurrentComment] = useState("");
  const [invalidComment, setInvalidComment] = useState("");
  const [updatedComments, setUpdatedComments] = useState(
    selectedVideo.comments
  );
  const [totalComments, setTotalComments] = useState("");

  // ensures comment list is reset to current video when video changes
  useEffect(() => {
    setUpdatedComments(selectedVideo.comments);
  }, [selectedVideo]);

  // allows user to submit a comment only if form is filled out and have comment logged to the console. If input field is not filled out, they will get an alert. Form will be reset with each submit.
  const handleSubmit = (event) => {
    if (event.target.comment.value === "") {
      alert("Please fill out comment field");
      setInvalidComment("comments__form-input--invalid");
    } else {
      setCurrentComment(event.target.comment.value);
    }
    event.preventDefault();
    event.target.reset();
  };

  // This is used to ensure setCurrentComment can run before the currentComment is posted. It is activated when currentComment is changed.
  useEffect(() => {
    if (currentComment !== "") {
      postComment("Joey Mendez", currentComment);
    }
  }, [currentComment]);

  // after an invalid submission the red border is removed once they start typing in input field
  const inputChange = (event) => {
    if (event.target.value) {
      setInvalidComment("");
    }
  };

  // posts new comment to selected video comment list api
  const postComment = async (newName, newComment) => {
    let newId = videoId;
    if (!newId) {
      newId = defaultVideoId;
    }
    try {
      const comment = await axios.post(
        `${NEW_BASE_URL}videos/${newId}/comments`,
        {
          name: newName,
          comment: newComment,
        }
      );

      const newCommentList = comment.data;
      setUpdatedComments(newCommentList);
    } catch (error) {
      console.error(error);
    }
  };

  // Updates comment counter dynamically when new comment is added
  useEffect(() => {
    setTotalComments(updatedComments.length);
  }, [updatedComments]);

  // deletes selected comment and updates comment list by "sending a new request for the Main Video data" as per diving deeper requirements
  async function deleteComment(id) {
    try {
      const delComment = await axios.delete(
        `${NEW_BASE_URL}videos/${selectedVideo.id}/comments/${id}`
      );
      const newComments = await axios.get(
        `${NEW_BASE_URL}videos/${selectedVideo.id}`
      );
      setUpdatedComments(newComments.data.comments);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <section className="comments">
        <div className="comments__number-of-comments">
          <p className="comments__number-of-comments-text">
            {!totalComments ? selectedVideo.comments.length : totalComments}{" "}
            Comments
          </p>
        </div>
        <div className="comments__section">
          <div className="comments__user-avatar">
            <div className="comments__user-avatar--container">
              <img className="comments__user-avatar--img" src={profileImage} />
            </div>
          </div>
          <form className="comments__form" onSubmit={handleSubmit}>
            <div className="comments__input-wrapper">
              <label className="comments__form-title" name="comment">
                JOIN THE CONVERSATION
              </label>
              <textarea
                className={`comments__form-input ${invalidComment}`}
                id="comment"
                rows="1"
                placeholder="Add a new comment"
                onChange={inputChange}
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
      <CommentsSection
        selectedVideo={selectedVideo}
        updatedComments={updatedComments}
        videoId={videoId}
        deleteComment={deleteComment}
      />
    </>
  );
}

export default Comments;

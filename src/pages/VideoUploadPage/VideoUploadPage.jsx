import "./VideoUploadPage.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/icons/publish.svg";

function VideoUploadPage() {
  const [invalidUploadTitle, setInvalidUploadTitle] = useState("");
  const [invalidUploadDescription, setInvalidUploadDescription] = useState("");
  const navigate = useNavigate();

  const uploadSubmit = (event) => {
    event.preventDefault();
    if (event.target.title.value && event.target.description.value) {
      console.log(`Title: ${event.target.title.value}`);
      console.log(`Description: ${event.target.description.value}`);
      alert("Upload Successful!");
      event.target.title.value = "";
      event.target.description.value = "";
      setInvalidUploadTitle("");
      setInvalidUploadDescription("");
      navigate("/");
    } else if (!event.target.title.value) {
      setInvalidUploadTitle("upload-video__input-title--invalid");
      if (event.target.description.value) {
        setInvalidUploadDescription("");
      }
    } else if (!event.target.description.value) {
      setInvalidUploadDescription("upload-video__input-description--invalid");
      if (event.target.title.value) {
        setInvalidUploadTitle("");
      }
    }
  };

  const inputChange = (event) => {
    if (event.target.value) {
      setInvalidUploadTitle("");
    }
    if (event.target.value) {
      setInvalidUploadDescription("");
    }
  };

  return (
    <>
      <NavBar />
      <section className="upload-video">
        <div className="upload-video__content">
          <h1 className="upload-video__title">Upload Video</h1>
          <form className="upload-video__form" onSubmit={uploadSubmit}>
            <div className="upload-video__thumbnail-container">
              <label
                className="upload-video__thumbnail-label"
                htmlFor="thumbnail"
              >
                VIDEO THUMBNAIL
              </label>
              <img
                className="upload-video__thumbnail-img"
                src={thumbnail}
                id="thumbnail"
              />
            </div>
            <div className="upload-video__input-container">
              <label
                className="upload-video__input-title--label"
                htmlFor="title"
              >
                TITLE TO YOUR VIDEO
              </label>
              <input
                className={`upload-video__input-title ${invalidUploadTitle}`}
                id="title"
                type="text"
                placeholder="Add a title to your video"
                onChange={inputChange}
              />
              <label
                className="upload-video__input-description--label"
                htmlFor="description"
              >
                ADD A VIDEO DESCRIPTION
              </label>
              <textarea
                className={`upload-video__input-description ${invalidUploadDescription}`}
                id="description"
                type="text"
                placeholder="Add a description to your video"
                onChange={inputChange}
              />
            </div>
            <div className="upload-video__button-container">
              <div className="upload-video__button-submit-container">
                <button className="upload-video__button-submit" type="submit">
                  PUBLISH
                </button>
                <img
                  className="upload-video__button-submit--icon"
                  src={uploadIcon}
                />
              </div>
              <button className="upload-video__button-cancel">CANCEL</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default VideoUploadPage;

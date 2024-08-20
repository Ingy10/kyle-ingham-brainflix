import "./VideoUploadPage.scss";
import NavBar from "../../components/NavBar/NavBar";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/icons/publish.svg";

function VideoUploadPage() {
  const uploadSubmit = (event) => {
    event.preventDefault();
    console.log(`Title: ${event.target.title.value}`);
    console.log(`Description: ${event.target.description.value}`);
    event.target.title.value = "";
    event.target.description.value = "";
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
                className="upload-video__input-title"
                id="title"
                type="text"
                placeholder="Add a title to your video"
                required
              />
              <label
                className="upload-video__input-description--label"
                htmlFor="description"
              >
                ADD A VIDEO DESCRIPTION
              </label>
              <textarea
                className="upload-video__input-description"
                id="description"
                type="text"
                placeholder="Add a description to your video"
                required
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

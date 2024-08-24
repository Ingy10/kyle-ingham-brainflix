import "./VideoDetailsPage";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

const BASE_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
const API_KEY = "?api_key=278b0386-e13d-48c9-968b-5dffeb950f5a";

function VideoDetailsPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [filteredVideoList, setFilteredVideoList] = useState([]);
  const { videoId } = useParams();

  // Selects video based on videoId determined by which video is clicked
  const clickedVideo = async () => {
    try {
      const currentSelectedVideo = await axios.get(
        `${BASE_URL}videos/${videoId}${API_KEY}`
      );
      setSelectedVideo(currentSelectedVideo.data);
    } catch (error) {
      console.error(error);
    }
  };

  // runs clickedVideo function once change in videoId is detected
  useEffect(() => {
    clickedVideo();
  }, [videoId]);

  // creates a list of videos that does not include the selected video and assigns it to filteredVideoList
  const updateVideoList = async () => {
    try {
      const videoList = await axios.get(`${BASE_URL}videos/${API_KEY}`);
      const fullVideoList = videoList.data;
      setFilteredVideoList(
        fullVideoList.filter((video) => video.id !== selectedVideo.id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  // runs updateVideoList function once selectedVido changes and it has a non-null value
  useEffect(() => {
    if (selectedVideo) {
      updateVideoList();
    }
  }, [selectedVideo]);

  if (!selectedVideo || filteredVideoList === 0) {
    <h2>Loading...</h2>;
  } else {
    return (
      <section className="page">
        <Header selectedVideo={selectedVideo} />
        <div className="page__section-desktop-flex">
          <Main
            selectedVideo={selectedVideo}
            BASE_URL={BASE_URL}
            API_KEY={API_KEY}
            videoId={videoId}
          />
          <Footer
            filteredVideoList={filteredVideoList}
            setSelectedVideo={setSelectedVideo}
          />
        </div>
      </section>
    );
  }
}
export default VideoDetailsPage;

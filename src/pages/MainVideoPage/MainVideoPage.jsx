import "./MainVideoPage";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

const BASE_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
const API_KEY = "?api_key=278b0386-e13d-48c9-968b-5dffeb950f5a";
const NEW_BASE_URL = "http://localhost:8080/";

function MainVideoPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [filteredVideoList, setFilteredVideoList] = useState([]);
  const { videoId } = useParams();
  const [defaultVideoId, setDefaultVideoId] = useState("");
  const [videoListArray, setVideoListArray] = useState([]);

  /* I decided to use this initial function to grab the video list and get the id of the first video.  This seemed like a better solution than hardcoding the id of the first video in the default video get request, as the video list may change over time */
  const fetchVideoList = async () => {
    try {
      const videoList = await axios.get(`${NEW_BASE_URL}videos`);
      setVideoListArray(videoList.data);

      if (videoId === undefined) {
        setDefaultVideoId(videoList.data[0].id);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // gets the array of videos, running only once as page renders
  useEffect(() => {
    fetchVideoList();
  }, []);

  // Selects video based on videoId determined by which video is clicked
  const clickedVideo = async (id) => {
    try {
      const currentSelectedVideo = await axios.get(
        `${NEW_BASE_URL}videos/${id}`
      );
      setSelectedVideo(currentSelectedVideo.data);
    } catch (error) {
      console.error(error);
    }
  };

  // runs clickedVideo function once change in videoId is detected
  useEffect(() => {
    if (videoId) {
      clickedVideo(videoId);
    } else if (defaultVideoId) {
      clickedVideo(defaultVideoId);
    }
  }, [videoId, defaultVideoId]);

  // creates a list of videos that does not include the selected video and assigns it to filteredVideoList
  const updateVideoList = async () => {
    setFilteredVideoList(
      videoListArray.filter((video) => video.id !== selectedVideo.id)
    );
  };

  // runs updateVideoList function once selectedVido changes and it has a non-null value
  useEffect(() => {
    if (selectedVideo) {
      updateVideoList();
    }
  }, [selectedVideo]);

  // function to increment likes on a given video
  const incrementVideoLikes = async () => {
    try {
      if (videoId) {
        console.log(videoId);
        await axios.put(`${NEW_BASE_URL}videos/${videoId}`);
        const video = await axios.get(`${NEW_BASE_URL}videos/${videoId}`);
        setSelectedVideo(video.data);
      } else {
        console.log(defaultVideoId);
        await axios.put(`${NEW_BASE_URL}videos/${defaultVideoId}`);
        const video = await axios.get(
          `${NEW_BASE_URL}videos/${defaultVideoId}`
        );
        setSelectedVideo(video.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!selectedVideo || filteredVideoList === 0) {
    return <h2>Loading...</h2>;
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
            NEW_BASE_URL={NEW_BASE_URL}
            defaultVideoId={defaultVideoId}
            incrementVideoLikes={incrementVideoLikes}
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
export default MainVideoPage;

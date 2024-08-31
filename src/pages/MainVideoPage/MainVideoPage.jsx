import "./MainVideoPage";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

const NEW_BASE_URL = import.meta.env.VITE_HOST_URL;

function MainVideoPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [filteredVideoList, setFilteredVideoList] = useState([]);
  const { videoId } = useParams();
  const [defaultVideoId, setDefaultVideoId] = useState("");
  const [videoListArray, setVideoListArray] = useState([]);

  /* I decided to use this initial function to grab the video list and get the id of the first video.  This seemed like a better solution than hardcoding the id of the first video in the default video get request, as the video list may change over time */
  const fetchVideoList = async () => {
    try {
      const videoList = await axios.get(`${NEW_BASE_URL}/videos`);
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
        `${NEW_BASE_URL}/videos/${id}`
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
        await axios.put(`${NEW_BASE_URL}/videos/${videoId}`);
        const video = await axios.get(`${NEW_BASE_URL}/videos/${videoId}`);
        setSelectedVideo(video.data);
      } else {
        await axios.put(`${NEW_BASE_URL}/videos/${defaultVideoId}`);
        const video = await axios.get(
          `${NEW_BASE_URL}/videos/${defaultVideoId}`
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
        <Header selectedVideo={selectedVideo} NEW_BASE_URL={NEW_BASE_URL} />
        <div className="page__section-desktop-flex">
          <Main
            selectedVideo={selectedVideo}
            videoId={videoId}
            NEW_BASE_URL={NEW_BASE_URL}
            defaultVideoId={defaultVideoId}
            incrementVideoLikes={incrementVideoLikes}
          />
          <Footer
            filteredVideoList={filteredVideoList}
            setSelectedVideo={setSelectedVideo}
            NEW_BASE_URL={NEW_BASE_URL}
          />
        </div>
      </section>
    );
  }
}
export default MainVideoPage;

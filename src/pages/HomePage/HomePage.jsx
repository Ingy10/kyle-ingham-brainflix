import "./HomePage.scss";
import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

const BASE_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
const API_KEY = "?api_key=278b0386-e13d-48c9-968b-5dffeb950f5a";
const NEW_BASE_URL = "http://localhost:8080/";

function HomePage() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [defaultVideoId, setDefaultVideoId] = useState("");
  const [videoListArray, setVideoListArray] = useState([]);
  const [filteredVideoList, setFilteredVideoList] = useState([]);

  /* I decided to use this initial function to grab the video list and get the id of the first video.  This seemed like a better solution than hardcoding the id of the first video in the default video get request, as the video list may change over time */
  const fetchVideoList = async () => {
    try {
      const videoList = await axios.get(`${NEW_BASE_URL}videos`);
      console.log(videoList);
      setDefaultVideoId(videoList.data[0].id);
      setVideoListArray(videoList.data);
    } catch (error) {
      console.error(error);
    }
  };

  // function to get the default video to be loaded on the homepage
  const fetchVideos = async () => {
    try {
      const videoDefault = await axios.get(
        `${NEW_BASE_URL}videos/${defaultVideoId}`
      );
      setSelectedVideo(videoDefault.data);
    } catch (error) {
      console.error(error);
    }
  };

  // gets the array of videos, running only once as page renders
  useEffect(() => {
    fetchVideoList();
  }, []);

  // once the videolist has been retrieved with the get request and defaultVideoId has been assigned this function will be run to get the first video in the list
  useEffect(() => {
    if (defaultVideoId) {
      fetchVideos();
    }
  }, [defaultVideoId]);

  // creates a list of videos that does not include the selected video and only runs once selectedVideo changes
  useEffect(() => {
    if (selectedVideo) {
      setFilteredVideoList(
        videoListArray.filter((video) => video.id !== selectedVideo.id)
      );
    }
  }, [selectedVideo]);

  // added conditionals to make sure we both have received our selectedVideo and populated the filterd video list
  if (!selectedVideo || filteredVideoList.length === 0) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <section className="page">
        <Header selectedVideo={selectedVideo} />
        <div className="page__section-desktop-flex">
          <Main
            selectedVideo={selectedVideo}
            defaultVideoId={defaultVideoId}
            BASE_URL={BASE_URL}
            API_KEY={API_KEY}
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
export default HomePage;

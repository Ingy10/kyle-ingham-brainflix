import "./App.scss";
// import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "../src/components/Header/Header";
// import Main from "../src/components/Main/Main";
// import VideoData from "./data/video-details.json";
// import Footer from "../src/components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";
// import axios from "axios";

// const BASE_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
// const API_KEY = "?api_key=278b0386-e13d-48c9-968b-5dffeb950f5a";

function App() {
  // // sets first video in list to be selected video
  // const [selectedVideo, setSelectedVideo] = useState(null);

  // // creates a list of videos that does not include the selected video
  // const filteredVideoList = VideoData.filter(
  //   (video) => video !== selectedVideo
  // );

  // const fetchVideos = async () => {
  //   try {
  //     const videoList = await axios.get(
  //       `${BASE_URL}videos/${API_KEY}`
  //     );
  //     console.log(videoList.data);
  //     setSelectedVideo(videoList.data[0]);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchVideos();
  // }, []);

  // useEffect(() => {
  //   console.log(selectedVideo);
  // }, [selectedVideo]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="VideoDetailsPage/:videoId"
            element={<VideoDetailsPage />}
          />
          <Route path="VideoUploadPage" element={<VideoUploadPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "../src/components/Header/Header";
// import Main from "../src/components/Main/Main";
import VideoData from "./data/video-details.json";
// import Footer from "../src/components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";

function App() {
  // // sets first video in list to be selected video
  // const [selectedVideo, setSelectedVideo] = useState(VideoData[0]);

  // // creates a list of videos that does not include the selected video
  // const filteredVideoList = VideoData.filter(
  //   (video) => video !== selectedVideo
  // );

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

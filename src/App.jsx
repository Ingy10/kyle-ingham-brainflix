import "./App.scss";
import { useState } from "react";
import Header from "../src/components/Header/Header";
import Main from "../src/components/Main/Main";
import VideoData from "./data/video-details.json";
import Footer from "../src/components/Footer/Footer";

function App() {
  // sets first video in list to be selected video
  const [selectedVideo, setSelectedVideo] = useState(VideoData[0]);

  // creates a list of videos that does not include the selected video
  const filteredVideoList = VideoData.filter(
    (video) => video !== selectedVideo
  );

  return (
    <section className="page">
      <Header selectedVideo={selectedVideo} />
      <div className="page__section-desktop-flex">
        <Main selectedVideo={selectedVideo} />
        <Footer
          filteredVideoList={filteredVideoList}
          setSelectedVideo={setSelectedVideo}
        />
      </div>
    </section>
  );
}

export default App;

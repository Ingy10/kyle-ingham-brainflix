import "./App.scss";
import { useState } from "react";
import Header from "../src/components/Header/Header";
import Main from "../src/components/Main/Main";
import VideoData from "./data/video-details.json";
import Footer from "../src/components/Footer/Footer";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(VideoData[0]);

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

import "./VideoDetailsPage";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoData from "../../data/video-details.json";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";

function VideoDetailsPage() {
  // sets first video in list to be selected video
  const [selectedVideo, setSelectedVideo] = useState(VideoData[0]);
  const { videoId } = useParams();

  useEffect(() => {
    setSelectedVideo(VideoData.find((video) => video.id === videoId));
  }, [videoId]);

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
export default VideoDetailsPage;

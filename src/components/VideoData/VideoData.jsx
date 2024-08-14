import { useState, useEffect } from "react";
import videoDetails from "../../data/video-details.json";

function videoData() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(videoDetails);
  }, []);
  console.log(videos);

  return videos;
}

export default videoData;

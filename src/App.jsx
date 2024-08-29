import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage/HomePage";
import MainVideoPage from "./pages/MainVideoPage/MainVideoPage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainVideoPage />} />
          <Route path="videos/:videoId" element={<MainVideoPage />} />
          <Route path="VideoUploadPage" element={<VideoUploadPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

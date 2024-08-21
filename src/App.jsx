import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="videos/:videoId" element={<VideoDetailsPage />} />
          <Route path="VideoUploadPage" element={<VideoUploadPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import "./App.scss";
import Header from "../src/components/Header/Header";
import Main from "../src/components/Main/Main";
import VideoData from "../src/components/VideoData/VideoData";

function App() {
  return (
    <section className="page">
      <Header />
      <Main />
      {/* <VideoData /> */}
    </section>
  );
}

export default App;

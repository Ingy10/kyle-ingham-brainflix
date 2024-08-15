import "./App.scss";
import Header from "../src/components/Header/Header";
import Main from "../src/components/Main/Main";
import VideoData from "../src/components/VideoData/VideoData";
import Footer from "../src/components/Footer/Footer";

function App() {
  return (
    <section className="page">
      <Header />
      <div className="page__section-desktop-flex">
        <Main />
        <Footer />
      </div>
      {/* <VideoData /> */}
    </section>
  );
}

export default App;

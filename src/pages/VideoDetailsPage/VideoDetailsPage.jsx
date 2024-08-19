import "./VideoDetailsPage";
import Header from "../src/components/Header/Header";
import Main from "../src/components/Main/Main";
import Footer from "../src/components/Footer/Footer";

function VideoDetailsPage() {
  return (
    <section className="page">
      <h1>Video Details Page</h1>
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

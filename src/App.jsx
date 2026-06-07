import "./App.css";
import navi1 from "./assets/navi1.jpg";
import navi2 from "./assets/navi2.jpg";
import navi3 from "./assets/navi3.jpg";

function App() {
  return (
    <div className="app">
      <section className="hero">
        <img src={navi1} alt="Navi Sharma" className="hero-img" />
        <h1>Navi Sharma</h1>
        <p>Singer • Artist • Performer</p>

        <div className="buttons">
          <a
            href="https://www.instagram.com/im_navisharma?igsh=N2J0ZGg4ancxM21o"
            target="_blank"
          >
            Instagram
          </a>

          <a
            href="https://youtube.com/channel/UCvH9wI617q8ay2hoC4AQzzA?si=rhqy48WfAad49RP9"
            target="_blank"
          >
            YouTube
          </a>

          <a
            href="https://open.spotify.com/artist/3AymTMbXe0rCzP19GSMBe3?si=tDvch6H0RaqYq0o7EoZkhg"
            target="_blank"
          >
            Spotify
          </a>
        </div>
      </section>

      <section className="about">
        <h2>About</h2>
        <p>
          Welcome to the official website of Navi Sharma. Follow my latest
          music releases, videos and updates.
        </p>
      </section>

      <section className="gallery">
        <h2>Gallery</h2>

        <div className="gallery-grid">
          <img src={navi1} alt="" />
          <img src={navi2} alt="" />
          <img src={navi3} alt="" />
        </div>
      </section>
    </div>
  );
}

export default App;
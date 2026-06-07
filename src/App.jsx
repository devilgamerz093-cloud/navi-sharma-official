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
          <a href="https://www.instagram.com/im_navisharma" target="_blank" rel="noreferrer">
            Instagram
          </a>

          <a href="https://youtube.com/channel/UCvH9wI617q8ay2hoC4AQzzA" target="_blank" rel="noreferrer">
            YouTube
          </a>

          <a href="https://open.spotify.com/artist/3AymTMbXe0rCzP19GSMBe3" target="_blank" rel="noreferrer">
            Spotify
          </a>
        </div>
      </section>

      <section className="gallery">
        <h2>Gallery</h2>

        <div className="gallery-grid">
          <img src={navi1} alt="Navi 1" />
          <img src={navi2} alt="Navi 2" />
          <img src={navi3} alt="Navi 3" />
        </div>
      </section>
    </div>
  );
}

export default App;
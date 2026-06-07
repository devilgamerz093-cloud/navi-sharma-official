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
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://youtube.com/channel/UCvH9wI617q8ay2hoC4AQzzA?si=rhqy48WfAad49RP9"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>

          <a
            href="https://open.spotify.com/artist/3AymTMbXe0rCzP19GSMBe3?si=tDvch6H0RaqYq0o7EoZkhg"
            target="_blank"
            rel="noreferrer"
          >
            Spotify
          </a>
        </div>
      </section>

      <section className="about">
        <h2>About Navi Sharma</h2>

        <p>
          Navi Sharma is an independent singer and artist known for soulful
          melodies and heartfelt performances.
        </p>
      </section>

      <section className="gallery">
        <h2>Gallery</h2>

        <div className="gallery-grid">
          <img src={navi1} alt="Navi Sharma" />
          <img src={navi2} alt="Navi Sharma" />
          <img src={navi3} alt="Navi Sharma" />
        </div>
      </section>
<section className="latest-song">
  <h2>Latest Release</h2>

  <a
    href="https://youtu.be/o2hM_8xD3XU?si=amjpMW4RrG8nKdqQ"
    target="_blank"
    rel="noreferrer"
  >
    🎵 Watch Latest Song on YouTube
  </a>
</section>
<section className="spotify">
  <h2>Listen On Spotify</h2>

  <iframe
    style={{ borderRadius: "12px" }}
    src="https://open.spotify.com/embed/artist/3AymTMbXe0rCzP19GSMBe3"
    width="100%"
    height="352"
    frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
    title="Spotify"
  ></iframe>
</section>
      <section className="contact">
        <h2>Contact & Booking</h2>

        <p>
          For collaborations, live shows and business enquiries.
        </p>

        <a
          href="mailto:your@email.com"
          className="contact-btn"
        >
          Contact Me
        </a>
      </section>

      <footer className="footer">
        © 2026 Navi Sharma. All Rights Reserved.
      </footer>

    </div>
  );
}

<footer className="footer">
  © 2026 Navi Sharma. All Rights Reserved.
</footer>

export default App;
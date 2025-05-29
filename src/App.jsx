import React from "react";
import "./App.css";

function App() {
  return (
    <div className="store">
      <header className="hero">
        <h1>Ahmed Manga Store</h1>
        <p>Read. Collect. Enjoy Anime Vibes 📚✨</p>
        <button>Explore Now</button>
      </header>

      <section className="manga-section">
        <h2>🔥 Popular Manga</h2>
        <div className="manga-grid">
          <div className="manga-card">
            <img src="https://i.imgur.com/IZ5Yw3W.jpg" alt="One Piece" />
            <h3>One Piece</h3>
            <p>By Eiichiro Oda</p>
          </div>
          <div className="manga-card">
            <img src="https://i.imgur.com/QuYcUVm.jpg" alt="Attack on Titan" />
            <h3>Attack on Titan</h3>
            <p>By Hajime Isayama</p>
          </div>
          <div className="manga-card">
            <img src="https://i.imgur.com/rAjg0Gz.jpg" alt="Naruto" />
            <h3>Naruto</h3>
            <p>By Masashi Kishimoto</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Ahmed Manga Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

// App.js
import React from 'react';
import './App.css';

const mangas = [
  {
    title: "One Piece",
    desc: "Pirate adventure with Luffy and crew!",
    img: "https://d28hgpri8am2if.cloudfront.net/book_images/cvr9781569319017_9781569319017_lg.jpg"
  },
  {
    title: "Naruto",
    desc: "Follow Naruto's journey to become Hokage.",
    img: "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg"
  },
  {
    title: "Attack on Titan",
    desc: "Fight for humanity against titans!",
    img: "https://wallpaperaccess.com/full/4848287.jpg"
  },
  {
    title: "Jujutsu Kaisen",
    desc: "ark curses and powerful sorcery.",
    img: "https://mangayo.it/2425-large_default/jujutsu-kaisen-1-edizione-giapponese.jpg"
  },
  {
    title: "Demon Slayer",
    desc: "Fight demons with Tanjiro.",
    img: "https://i.redd.it/89o2ebk3u95a1.jpg"
  },,
  {
    title: "My Hero Academia",
    desc: "Superheroes in training.",
    img: "https://cdn.kobo.com/book-images/2de7a0c2-e628-411e-a416-efc8475d45d6/353/569/90/False/my-hero-academia-vol-1.jpg"
  },
];

function Footer() {
  return (
    <footer className="footer">
      © 2025 Ahmed Manga Store. All rights reserved.
    </footer>
  );
}

function App() {
  return (
    <div className="overlay">
      <header className="header">
        <h1>Ahmed Manga Store</h1>
        <nav className="navbar">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <div className="container">
        <input type="text" placeholder="Search Manga..." className="search-bar" />
        <div className="cards">
          {mangas.map((manga, index) => (
            <div className="card" key={index}>
              <img src={manga.img} alt={manga.title} />
              <h2>{manga.title}</h2>
              <p>{manga.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

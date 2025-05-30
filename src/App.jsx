// App.js
import React, { useState, useEffect } from 'react';
import './App.css';

function Footer() {
  return (
    <footer className="footer">
      © 2025 Ahmed Manga Store. All rights reserved.
    </footer>
  );
}

function App() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (search.length > 2) {
      fetch(`https://api.jikan.moe/v4/manga?q=${search}&limit=10&sfw`)
        .then(res => res.json())
        .then(data => {
          setResults(data.data);
        });
    } else {
      setResults([]);
    }
  }, [search]);

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
        <input
          type="text"
          placeholder="Search Manga..."
          className="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="cards">
          {results.map((manga, index) => (
            <div className="card" key={index}>
              <img src={manga.images.jpg.image_url} alt={manga.title} />
              <h2>{manga.title}</h2>
              <p>{manga.synopsis ? manga.synopsis.slice(0, 100) + '...' : 'No description available.'}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
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

  const handleSearch = () => {
    if (search.length > 2) {
      fetch(`https://api.jikan.moe/v4/manga?q=${search}&limit=12&sfw=true`)
        .then(res => res.json())
        .then(data => {
          setResults(data.data);
        });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

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
          onKeyDown={handleKeyDown}
        />
        <div className="cards">
          {Array.isArray(results) && results.length > 0 ? (
            results.map((manga, index) => (
              <div className="card" key={index}>
                <img
                  src={manga.images?.jpg?.image_url || 'https://via.placeholder.com/300x450?text=No+Image'}
                  alt={manga.title}
                />
                <h2>{manga.title}</h2>
                <p>{manga.synopsis ? manga.synopsis.slice(0, 100) + '...' : 'No description available.'}</p>
              </div>
            ))
          ) : (
            <p style={{ color: "white" }}>No manga found.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

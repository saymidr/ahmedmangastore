import React, { useState } from "react";

const booksData = [
  {
    title: "One Piece",
    desc: "Pirate adventure with Luffy and crew!",
    img: "https://d28hgpri8am2if.cloudfront.net/book_images/cvr9781569319017_9781569319017_lg.jpg",
  },
  {
    title: "Naruto",
    desc: "Follow Naruto's journey to become Hokage.",
    img: "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
  },
  {
    title: "Attack on Titan",
    desc: "Fight for humanity against titans!",
    img: "https://wallpaperaccess.com/full/4848287.jpg",
  },
  {
    title: "Jujutsu Kaisen",
    desc: "Dark curses and powerful sorcery.",
    img: "https://mangayo.it/2425-large_default/jujutsu-kaisen-1-edizione-giapponese.jpg",
  },
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = booksData.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="overlay">
      <header className="header">
        <h1>Ahmed Manga Store</h1>
      </header>

      <div className="container">
        <input
          className="search-bar"
          type="text"
          placeholder="Search manga..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="cards">
          {filteredBooks.map((book, index) => (
            <div className="card" key={index}>
              <img src={book.img} alt={book.title} />
              <h2>{book.title}</h2>
              <p>{book.desc}</p>
            </div>
          ))}
          {filteredBooks.length === 0 && <p>No manga found!</p>}
        </div>
      </div>

      <footer className="footer">
        © 2025 Ahmed Manga Store. All rights reserved.
      </footer>
    </div>
  );
}

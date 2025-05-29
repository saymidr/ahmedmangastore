import './App.css';

function App() {
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
      desc: "Dark curses and powerful sorcery.",
      img: "https://mangayo.it/2425-large_default/jujutsu-kaisen-1-edizione-giapponese.jpg"
    }
  ];

  return (
    <div className="overlay">
      <div className="header">
        <h1>Ahmed Manga Store</h1>
      </div>

      <div className="container">
        <p>Get your favorite anime manga in one place!</p>
        <div className="cards">
          {mangas.map((manga, index) => (
            <div key={index} className="card">
              <img src={manga.img} alt={manga.title} />
              <h2>{manga.title}</h2>
              <p>{manga.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <footer style={{
        textAlign: 'center',
        padding: '1rem',
        marginTop: '2rem',
        backgroundColor: '#111',
        color: '#aaa',
        borderTop: '1px solid #444'
      }}>
        © 2025 Ahmed Manga Store. All rights reserved.
      </footer>
    </div>
  );
}

export default App;

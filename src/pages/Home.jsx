import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "The Shawshank Redemption", release_date: 1994 },
    { id: 2, title: "The Godfather", release_date: 1972 },
    { id: 3, title: "The Dark Knight", release_date: 2008 },
  ];
  const searchHandler = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("Search Movie");
  };
  return (
    <div className="Home">
      <form onSubmit={searchHandler} className="search-form">
        <input
          type="text"
          placeholder="Search Movie"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movie-grid">
        {movies.map(
          (movie) =>
            (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;

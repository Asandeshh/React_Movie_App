import MovieCard from "../components/MovieCard";
import { useState , useEffect} from "react";
import { searchMovies,getPopularMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
        try{
            const popularMovies = await getPopularMovies();
            setMovies(popularMovies);
        }catch(err){
            console.error(err);
            setError("Failed To Load Movie")
        } finally{
            setLoading(false);
        }
    }
    loadPopularMovies();
  }, []);

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

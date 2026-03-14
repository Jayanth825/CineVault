import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

export default function Favorites() {
  const { favorites } = useMovieContext();

  return (
    <div className="favorites">
      <h1>My Favorites</h1>
      {favorites.length === 0 ? (
        <div className="favorites-empty">
          <h2>No Favorite Movies yet</h2>
          <p>Start adding movies to your favorites and they will appear here</p>
        </div>
      ) : (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}
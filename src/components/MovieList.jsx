import { MovieCard } from "./MovieCard";
import { useFavoritesContext } from "../context/FavoritesContext";

export const MovieList = ({ movies, typeComponent }) => {
  const { favorites } = useFavoritesContext();

  if (!movies || movies.length === 0) {
    return <p>No movies available.</p>;
  }

  return (
    <div id={`${typeComponent}`} className="movie-grid">
      {movies.map((movie) => {
        const isFavorite = favorites.some((fav) => fav.id === movie.id);
        
        return (
          <div key={movie.id}>
            <MovieCard movie={{ ...movie, favorite: isFavorite }} />
          </div>
        );
      })}
    </div>
  );
};
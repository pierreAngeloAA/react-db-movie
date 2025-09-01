import { MovieCard } from "./MovieCard";

export const MovieList = ({ movies }) => {
  return (
    <div id="popular-movies" className="movie-grid">
      {movies.map(movie => (
        <MovieCard key={movie.id} {...movie}/>
      ))}
    </div>
  );
};
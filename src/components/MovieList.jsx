import { MovieCard } from "./MovieCard";

export const MovieList = ({ movies, typeComponent }) => {
  if (!movies || movies.length === 0) {
    return <p>No movies available.</p>;
  }

  return (
    <div id={`${typeComponent}`} className="movie-grid">
      {movies.map((movie) =>
        (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        )
      )}
    </div>
  );
};

import { MovieCard } from "./MovieCard";

export const MovieList = ({ movies }) => {
  return (
    <div className="row">
      {movies.map(movie => (
        <MovieCard key={movie.id} {...movie}/>
      ))}
    </div>
  );
};

import { MovieList } from "../src/components/MovieList";
import { useMovies } from '../src/hooks/useMovies/';

import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const MovieExpertApp = () => {

  const { movies, loading, error } = useMovies("search", "jurassic");

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1>Movie Expert App</h1>
      <MovieList movies={movies}/>
    </>
  );
};
import React from 'react';
import { MovieList } from './MovieList';

export function MovieComponent({ movies, typeComponent, loading}) {
  if (!movies || movies.length === 0) { 
    return <p>No movies available.</p>; 
  }

  return (
      <section className="mt-4">
        <h5 className="section-title"> { typeComponent } </h5>

        <div id={typeComponent} className="movie-grid">
          {loading ? (
            <p>Cargando {typeComponent}...</p>
          ) : (
            <MovieList movies={movies} typeComponent={typeComponent} />
          )}
        </div>
      </section>
  );
}

export default MovieComponent;
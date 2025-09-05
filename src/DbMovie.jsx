import { useState } from "react";
import { MovieList } from "../src/components/MovieList";
import { useMovies } from '../src/hooks/useMovies/';
import { Navbar } from "../src/components/Navbar";

export const DbMovie = () => {
  const [query, setQuery] = useState("");

  const { movies: searchMovies, loading: loadingSearch, error: errorSearch } = useMovies("search", query);
  const { movies: topRatedMovies, loading: loadingTopRated, error: errorTop } = useMovies("top_rated");
  const { movies: popularMovies, loading: loadingPopular, error: errorPopular } = useMovies("popular");

  const showSearch = query.trim().length > 0;

  return (
    <div className="bg-light">
      <header>
        <Navbar setQuery={setQuery} />
      </header>

      <main className="container">
        {showSearch ? (
          <section className="mt-4">
            <h5 className="section-title">Resultados para “{query}”</h5>
            {loadingSearch ? (
              <p>Cargando resultados...</p>
            ) : errorSearch ? (
              <p className="text-danger">{errorSearch}</p>
            ) : (
              <MovieList movies={searchMovies} />
            )}
          </section>
            ) : (
              <>
                <section className="mt-4">
                  <h5 className="section-title">My Favorites 🤍</h5>
                </section>

                <section className="mt-4">
                  <h5 className="section-title">Popular Movies 🎬</h5>
                  {loadingPopular ? (
                    <p>Cargando películas populares...</p>
                  ) : (
                    <MovieList movies={popularMovies}/>
                  )}
                </section>

                <section className="mt-4">
                  <h5 className="section-title">Top Rated ⭐</h5>
                  {loadingTopRated ? (
                    <p>Cargando películas top rated...</p>
                  ) : (
                    <MovieList movies={topRatedMovies}/>
                  )}
                </section>
              </>
            )}
      </main>
    </div>

      // <div id="movie-modal" class="modal hidden">
      //   <div class="modal-content">
      //   </div>
      // </div>
  );
};
import { useState } from "react";
import { useMovies } from "./hooks/useMovies";
import { Navbar } from "./components/Navbar";

import { MovieComponent } from "./components/MovieComponent";

import { useFavoritesContext } from "./context/useFavoritesContext";

export const DbMovie = () => {
  const [query, setQuery] = useState("");

  const { movies: searchMovies, loading: loadingSearch, error: searchError } = useMovies("search", query);
  const { movies: topRatedMovies, loading: loadingTopRated, error: topRatedError } = useMovies("top_rated");
  const { movies: popularMovies, loading: loadingPopular, error: popularError } = useMovies("popular");

  const { favorites, loading: loadingFavorites } = useFavoritesContext();

  const showSearch = query.trim().length > 0;
  // One message is enough: the three lists fail together when the API key is
  // missing or TMDB is down.
  const error = showSearch ? searchError : popularError || topRatedError;

  return (
      <div className="bg-light">
        <header>
          <Navbar setQuery={setQuery} />
        </header>

        <main className="container">
          {error && (
            <div className="alert alert-warning mt-3" role="alert">
              Couldn't load movies: {error}. Check VITE_TMDB_API_KEY in your .env file.
            </div>
          )}
          {showSearch ? (    
              <MovieComponent movies={searchMovies} typeComponent={`Searching: ${query}`} loading={loadingSearch} />
              ) : (
                <>
                  <MovieComponent movies={favorites} typeComponent="My Favorites 🤍" loading={loadingFavorites} />
                  <MovieComponent movies={popularMovies} typeComponent="Popular Movies 🎬" loading={loadingPopular} />
                  <MovieComponent movies={topRatedMovies} typeComponent="Top Rated ⭐" loading={loadingTopRated} />
                </>
              )}
        </main>
      </div>
  );
};
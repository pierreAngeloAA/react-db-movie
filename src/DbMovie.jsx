import { useState } from "react";
import { MovieList } from "../src/components/MovieList";
import { useMovies } from '../src/hooks/useMovies/';
import { Navbar } from "../src/components/Navbar";

import  {MovieComponent}  from "./components/MovieComponent";

import { useFavoritesContext} from "./context/FavoritesContext";

export const DbMovie = () => {
  const [query, setQuery] = useState("");
  const [activeSection, setActiveSection] = useState("popular");


  const { movies: searchMovies, loading: loadingSearch, error: errorSearch } = useMovies("search", query);
  const { movies: topRatedMovies, loading: loadingTopRated, error: errorTop } = useMovies("top_rated");
  const { movies: popularMovies, loading: loadingPopular, error: errorPopular } = useMovies("popular");

  const { favorites, loading: loadingFavorites } = useFavoritesContext();

  const showSearch = query.trim().length > 0;

  return (
      <div className="bg-light">
        <header>
          <Navbar setQuery={setQuery} />
        </header>

        <main className="container">
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
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL || "https://api.themoviedb.org/3";
const POSTER_URL = "https://image.tmdb.org/t/p/w500";

// via.placeholder.com shut down, so posterless movies showed a broken image.
export const PLACEHOLDER_POSTER = "https://placehold.co/500x750?text=No+Image";

const formatMovies = (data) => {
  if (!data || !data.results) return [];

  return data.results.map((movie) => ({
    id: movie.id,
    title: movie.title,
    poster: movie.poster_path ? `${POSTER_URL}${movie.poster_path}` : PLACEHOLDER_POSTER,
    overview: movie.overview,
  }));
};

// Builds the URL with URLSearchParams so user input (spaces, "&", "#") is
// encoded, and fails loudly on HTTP errors instead of rendering an empty list.
const request = async (path, params = {}) => {
  const url = new URL(`${BASE_URL}${path}`);
  url.search = new URLSearchParams({ api_key: API_KEY, language: "es-ES", ...params }).toString();

  const res = await fetch(url);
  if (!res.ok) throw new Error(`TMDB request failed (${res.status})`);

  return formatMovies(await res.json());
};

export const getMovies = (query) => request("/search/movie", { query });

export const getPopularMovies = () => request("/movie/popular");

export const getTopRatedMovies = () => request("/movie/top_rated");

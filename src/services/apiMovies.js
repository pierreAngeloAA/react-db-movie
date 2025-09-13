const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

const formatMovies = (data) => {
  if (!data || !data.results) return [];

  return data.results.map(movie => ({
    id: movie.id,
    title: movie.title,
    poster: movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : "https://via.placeholder.com/500x750?text=No+Image",
    overview: movie.overview
  }));
};

export const getMovies = async (query) => {
  const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=es-ES`);
  const data = await res.json();

  return formatMovies(data);
};

export const getPopularMovies = async () => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`);
  const data = await res.json();

  return formatMovies(data)
};

export const getTopRatedMovies = async () => {
  const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=es-ES`);
  const data = await res.json();

  return formatMovies(data);
};

import { useState, useEffect } from "react";
import { getMovies, getPopularMovies, getTopRatedMovies } from "../services/apiMovies";

export const useMovies = (type, query = "") => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        let data = [];
        if (type === "search") {
          data = await getMovies(query);
        } else if (type === "popular") {
          data = await getPopularMovies();
        } else if (type === "top_rated") {
          data = await getTopRatedMovies();
        } else {
          throw new Error(`Tipo de búsqueda no válido: ${type}`);
        }

        setMovies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type, query]);

  return { movies, loading, error };
};
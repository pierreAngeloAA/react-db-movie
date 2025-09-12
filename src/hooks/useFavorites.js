import { useState, useEffect } from "react";
import { StorageHandler } from "../services/storage";

const useFavorites = (key = "favorites") => {
  const storage = new StorageHandler(key);

  const [favorites, setFavorites] = useState(storage.getData());
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    storage.saveData(favorites);
    setLoading(false)
  }, [favorites]);

  const addFavorite = (movie) => {
    if (!favorites.find(fav => fav.id === movie.id)) {
      const movieWithFavorite = { ...movie, favorite: true };
      setFavorites([...favorites, movieWithFavorite]); 
    }
  };

  const removeFavorite = (movie) => {
    const updatedFavorites = favorites.map((fav) =>
      fav.id === movie.id ? { ...fav, favorite: false } : fav
    );
    setFavorites(updatedFavorites.filter(fav => fav.id !== movie.id));
  };

  return { favorites, loading, addFavorite, removeFavorite };
};

export default useFavorites;
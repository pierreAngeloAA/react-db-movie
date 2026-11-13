import { useState, useEffect, useMemo } from "react";
import { FavoritesContext } from "./favoritesContextValue";
import { StorageHandler } from "../services/storage";

export const FavoritesProvider = ({ children }) => {
  const storage = useMemo(() => new StorageHandler("favorites"), []);
  const [favorites, setFavorites] = useState(storage.getData());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    storage.saveData(favorites);
    setLoading(false)
  }, [storage, favorites]);

  const addFavorite = (movie) => {
    if (!favorites.find(fav => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFavorite = (movie) => {
    setFavorites(favorites.filter(fav => fav.id !== movie.id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, loading }}>
      {children}
    </FavoritesContext.Provider>
  );
};

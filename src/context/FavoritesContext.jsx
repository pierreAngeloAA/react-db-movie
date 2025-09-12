import { createContext, useContext } from "react";
import useFavorites from "../hooks/useFavorites";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => {
  return useContext(FavoritesContext);
};
import { useContext } from "react";
import { FavoritesContext } from "./favoritesContextValue";

export const useFavoritesContext = () => useContext(FavoritesContext);

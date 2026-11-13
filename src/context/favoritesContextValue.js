import { createContext } from "react";

// Separate from the provider so React Fast Refresh can hot-reload it.
export const FavoritesContext = createContext();

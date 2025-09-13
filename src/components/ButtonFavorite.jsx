import { useFavoritesContext } from "../context/FavoritesContext";

const ButtonFavorite = ({ movie }) => {
  const { favorites, addFavorite, removeFavorite } = useFavoritesContext();
  const isFavorite = favorites.some((fav) => fav.id === movie.id);
  const buttonClass = isFavorite ? 'delete-btn' : 'fav-btn';

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite(movie);
    } else {
      addFavorite(movie);
    }
  }

  return (
    <button className={buttonClass} onClick={handleFavorite}>
      { isFavorite ? '❤️' : '🤍'}
    </button>
  );
};

export default ButtonFavorite;

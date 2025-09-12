import { useFavoritesContext } from "../context/FavoritesContext";

const ButtonFavorite = ({ movie }) => {
  const { addFavorite, removeFavorite } = useFavoritesContext();

  return (
    <>
      {movie.favorite ? (
        <button className="delete-btn" onClick={() => removeFavorite(movie)}>
          ❤️
        </button>
      ) : (
        <button className="fav-btn" onClick={() => addFavorite(movie)}>
          🤍
        </button>
      )}
    </>
  );
};

export default ButtonFavorite;
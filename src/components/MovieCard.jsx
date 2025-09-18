import  ButtonFavorite  from "../components/ButtonFavorite";

export const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <ButtonFavorite movie={movie} />
      <img src={movie.poster} className="card-img-top" alt={movie.title} />
    </div>
  );
};
export const MovieCard = ({ title, poster, overview }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img src={poster} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{overview || "Sin descripción disponible."}</p>
        </div>
      </div>
    </div>
  );
};

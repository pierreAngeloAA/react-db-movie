import { SearchMovie } from "../components/SearchMovie";

export const Navbar = ({ setQuery }) => { 

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="./index.html">🍿 POPCORN</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" >
          <span className="navbar-toggler-icon"></span>
        </button>

      <div className="collapse navbar-collapse" id="menu">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li>
            <SearchMovie setQuery={setQuery} />
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" id="link-popular">Popular Movies 🎬</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" id="link-top-rated">Top Rated ⭐</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" id="link-favorites">Favorite 🤍</a>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
};

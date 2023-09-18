import "../components/Header/Header.style.scss";
import { Link, useNavigate } from "react-router-dom";
import { Searchbar } from "components/SearchBar/Searchbar";

export const Header = () => {
  const navigate = useNavigate();

  const onSearch = (search) => {

    navigate(`/movies/${search}`);
  };

  return (
    <div className="header">
      <div className="logo">
        <div className="logo_text">
          <h1><Link to="/">CinemaMonster</Link></h1>
          <h2>Cinema is our passion!</h2>
        </div>
      </div>

      <div className="menubar">
        <nav className="menu">
          <Link className="navLink" to="/">Trending Movies</Link>
          <Link className="navLink" to="/cast">Cast</Link>
          <Link className="navLink" to="/reviews">Reviews</Link>
          <Link className="navLink" to="/most-rated-movie">Most Rated Movie</Link>
          <Searchbar  />
          
        </nav>
      </div>
    </div>
  );
};

export default Header;
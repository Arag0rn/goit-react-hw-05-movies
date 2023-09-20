import "./Header.style.scss";
import { Link } from "react-router-dom";



export const Header = () => {


  return (
    <div className="header">
   <div className="head-container">
   <div className="logo">
        <div className="logo_text">
          <h1><Link to="/">CinemaMonster</Link></h1>
          <h2 className="under-logo-txt">Cinema is our passion!</h2>
        </div>
      </div>

      <div className="menubar">
        <nav className="menu">
          <Link className="navLink" to="/">Trending Movies</Link>
          <Link className="navLink" to="/most-rated-movie">Most Rated Movie</Link>
          <Link className="navLink" to="/movies">Search Movie</Link>
          
          
        </nav>
      </div>
   </div>
    </div>
  );
};


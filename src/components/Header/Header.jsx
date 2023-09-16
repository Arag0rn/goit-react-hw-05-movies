import "./Header.style.scss";
import {  Link } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";


export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <div className="logo_text">
          <h1><a href="/">КиноМонстр</a></h1>
          <h2>Кино - наша страсть!</h2>
        </div>
      </div>

      <div className="menubar">
        <nav className="menu">
          <Link to="/about">About</Link>
          <Link to="/about">About</Link>
          <Link to="/about">About</Link>
          <Link to="/about">About</Link>

  
        </nav>
      </div>
    </div>
  );
}

export default Header;
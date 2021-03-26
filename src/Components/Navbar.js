import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo-box">
        <Link to="/">
          <p className="logo-name">TriceNews</p>
        </Link>
      </div>
      <nav className="navbar">
        <ul>
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

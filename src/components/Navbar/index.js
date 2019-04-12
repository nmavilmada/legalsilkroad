import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.png';
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
      
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
    <Link className="navbar-brand" to="/categories">
      <img scr={logo} alt="logo" />
      
    </Link>
   
    <div>
        <ul className="right hide-on-med-and-down">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/categories"
              className={window.location.pathname === "/categories" ? "nav-link active" : "nav-link"}
            >
              Categories
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
              login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

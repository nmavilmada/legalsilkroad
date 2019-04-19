/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from './logo.png';
import "./style.css";
import CartContext from '../../CartContext';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  const cart = useContext(CartContext);
  return (

    <div className="main-nav">
      <nav className="navbar navbar-default">
        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
        <div className="navbar-header">
          <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a href="#" className="navbar-brand">LegalSilkRoad</a>
          <img scr={'logo'} alt="logo" />
        </div>
        {/* <!-- Collection of nav links, forms, and other content for toggling --> */}
        <div id="navbarCollapse" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
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


            <li className="nav-item"></li>


            <li><Link to="/categories">Categories</Link></li>




            <li className="dropdown">
              <Link to="/cart">Cart {cart.products.length}</Link>
            </li>
          </ul>
          <form className="navbar-form navbar-left">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search"></input>
              <span className="input-group-btn">
                <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-search"></span></button>
              </span>
            </div>
          </form>
          <ul className="nav-item">
            <Link
              to="/login"
              className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
              <ul className="nav navbar-nav navbar-right">

                <li>Login</li>
              </ul>

            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

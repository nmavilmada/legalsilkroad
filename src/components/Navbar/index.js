/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import logo from './logo.png';
import "./style.css";
import CartContext from '../../CartContext';
import { categories } from '../../data';

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
          <div className="logo" />
          {/* <img scr={'https://developer.mozilla.org/static/img/web-docs-sprite.22a6a085cf14.svg'} alt="logo" width={'40px'} height={'40px'} /> */}
        </div>
        {/* <!-- Collection of nav links, forms, and other content for toggling --> */}
        <div className="nav-container">
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

            <li className="dropdown">
                <Link to="/categories" data-toggle="dropdown">Categories <b className="caret"></b></Link>
                    <ul className="dropdown-menu">
                    <li><Link to={`/categories`}>All</Link></li>
                      {
                        categories.map(c => <li key={c}><Link to={`/categories/${c}`}>{c}</Link></li>)
                      }
                    </ul>
                </li>

            <li className="dropdown">
              <Link to="/cart">Cart {cart.products.length}</Link>
            </li>

            
            <li>
            <form className="navbar-form navbar-left">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search"></input>
              <span className="input-group-btn">
                <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-search"></span></button>
              </span>
            </div>
          </form>
            </li>
          </ul>

          <ul className="nav navbar-nav">
          <li className="dropdown">
              <Link to="/login">Login</Link>
            </li>
          </ul>
          
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

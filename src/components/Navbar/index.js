/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.png';
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
      
   <div class="bs-example">
    <nav class="navbar navbar-default">
        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
        <div class="navbar-header">
            <button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a href="#" class="navbar-brand">LegalSilkRoad</a>
            <img scr={logo} alt="logo" />
        </div>
        {/* <!-- Collection of nav links, forms, and other content for toggling --> */}
        <div id="navbarCollapse" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
            <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
            <li class="active"><a href="#">Home</a></li>
            </Link>
          </li>

               
              <li className="nav-item"></li>
              
                
                <li><a href="#">Categories</a></li>
                
                
                
                
                <li class="dropdown">
                    <a data-toggle="dropdown" class="dropdown-toggle" href="#">Cart <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Product</a></li>
                        <li><a href="#">Quantity</a></li>
                        <li><a href="#">Sub Total</a></li>
                        <li class="divider"></li>
                        <li><a href="#">Remove</a></li>
                    </ul>
                </li>
            </ul>
            <form class="navbar-form navbar-left">
            	<div class="input-group">
                    <input type="text" class="form-control" placeholder="Search"></input>
                    <span class="input-group-btn">
                        <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-search"></span></button>
                    </span>
                </div>
            </form>
            <ul className="nav-item">
            <Link
            to="/login"
              className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
            <ul class="nav navbar-nav navbar-right">

                <li><a href="#">Login</a></li>
            </ul>
            
            </Link>
          </ul>
        </div>
    </nav>
</div>
  );
}

export default Navbar;

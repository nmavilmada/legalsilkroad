import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Categories from './containers/Categories';
import './MainRouter.css';
import Loginscreen from "./Loginscreen";
<<<<<<< Updated upstream
import CartContext from './CartContext';
import Cart from './containers/Cart';
=======
import Navbar from "./components/Navbar";
>>>>>>> Stashed changes


// Routes
const routes = [
    {
        path: "/",
        exact: true,
        component: () => <h2>Home</h2>
    },
    {
        path: "/categories",
        component: () => <Categories />
    },
    {
        path: "/login",
        component: () => <h2></h2>
    },
    {
        path: "/cart",
        component: () => <Cart />
    },
    {   
        path: "/Login",
        component: () => <Loginscreen />

    },
    {
        path: "/Navbar",
        component: () => <Navbar />
    }
];

function RouterContainer() {
    const cart = useContext(CartContext);
    return (
        <Router>
<<<<<<< Updated upstream
            <div className="container">

                <div className="header">
                    <Link to="/">Home</Link>
                    <Link to="/categories">Categories</Link>
                    <Link to="/cart">Cart ({cart.products.length})</Link>
                    <Link to="/login">Login</Link>
                    
                </div>

                <div className="main">
=======
           
            <Navbar />
              
              <div className="main">
>>>>>>> Stashed changes
                    {routes.map((route, index) => (
                        
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
                    ))}
                </div>

<<<<<<< Updated upstream
            

                <div className="footer">
                    Some Footer
                </div>
=======
                <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
>>>>>>> Stashed changes
            </div>
          </div>
        </footer>
           
        </Router>
    );
}

export default RouterContainer;

import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Categories from './containers/Categories';
import './MainRouter.css';
import Loginscreen from "./Loginscreen";
import CartContext from './CartContext';
import Cart from './containers/Cart';


// Routes
const routes = [
    {
        path: "/",
        exact: true,
        component: () => <Categories />
    },
    {
        path: "/categories",
        component: () => <Categories />
    },
    {
        path: "/login",
        component: () => <h2>shoelaces</h2>
    },
    {
        path: "/cart",
        component: () => <Cart />
    },
    {   
        path: "/Login",
        component: () => <Loginscreen />

    }
];

function RouterContainer() {
    const cart = useContext(CartContext);
    return (
        <Router>
            <div className="container">

                <div className="header">
                    <Link to="/">Home</Link>
                    <Link to="/categories">Categories</Link>
                    <Link to="/cart">Cart ({cart.products.length})</Link>
                    <Link to="/login">Login</Link>
                    
                </div>

                <div className="main">
                    {routes.map((route, index) => (
                        
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
                    ))}
                </div>

            

                <div className="footer">
                    Some Footer
                </div>
            </div>
        </Router>
    );
}

export default RouterContainer;

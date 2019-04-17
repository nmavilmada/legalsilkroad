import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Categories from './containers/Categories';
import Loginscreen from "./Loginscreen";
import CartContext from './CartContext';
import Cart from './containers/Cart';
import Navbar from './components/Navbar';




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
        component: () => <h2>Login Page</h2>
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
    
    // eslint-disable-next-line no-unused-vars
    const cart = useContext(CartContext);
    return (
        <Router>
            <Navbar />
            <div className="container">
     
                <div className="header">
                
                    <Link to="/">Home</Link>
                    <Link to="/categories">Categories</Link>
                    <Link to="/cart">Cart</Link>
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

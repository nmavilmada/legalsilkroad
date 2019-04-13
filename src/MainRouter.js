import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Categories from './containers/Categories';
import './MainRouter.css';
import Loginscreen from "./Loginscreen";
import CartContext from './CartContext';
import Cart from './containers/Cart';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
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
        <Navbar />
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

                <Footer />

                {/* <div className="footer">
                    Some Footer
                </div> */}
            </div>
          
       
           
        </Router>
    );
}

export default RouterContainer;

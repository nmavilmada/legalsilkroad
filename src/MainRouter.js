import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Categories from './containers/Categories';
import Loginscreen from "./Loginscreen";
import CartContext from './CartContext';
import Cart from './containers/Cart';
import Navbar from './components/Navbar';
import Landing from './components/Landing'
import './MainRouter.css';




// Routes
const routes = [
    {
        path: "/",
        exact: true,
        component: () => <Landing />
    },
    {
        path: "/categories",
        exact: true,
        component: () => <Categories />
    },
    {
        path: "/categories/:cat",
        component: Categories
    },
    {
        path: "/cart",
        component: () => <Cart />
    },
    {   
        path: "/login",
        component: () => <Loginscreen />

    }

];

function RouterContainer() {
    
    // eslint-disable-next-line no-unused-vars
    const cart = useContext(CartContext);
    return (
        <Router>
            
            <div className="container">

                <div className="header">
                    <Navbar />
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
                    © Legal Silk Road Inc. 2019 
                </div>
            </div>
        </Router>
    );
}

export default RouterContainer;

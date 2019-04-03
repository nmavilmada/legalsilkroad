import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Categories from './containers/Categories';
import './MainRouter.css';

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
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
        component: () => <h2>Shoelaces</h2>
    }
];

function RouterContainer() {
    return (
        <Router>
            <div className="container">

                <div className="header">
                    <Link to="/">Home</Link>
                    <Link to="/categories">Categories</Link>
                    <Link to="/login">Login</Link>
                </div>


                <div className="main">
                    {routes.map((route, index) => (
                        // Render more <Route>s with the same paths as
                        // above, but different components this time.
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

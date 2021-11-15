import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "./Search";
import Home from "./Home";
import Houses from "./Houses";


function Nav() {
  return (
    <Router>
      <h1>Exercise 03</h1>
      <nav class="navbar navbar-light bg-secondary justify-content-between">
          <p class="navbar-brand">GOT React Website</p>
          <div>
            <ul className="navbar">
              <li className="nav-link">
                <Link className="link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-link">
                <Link className="link" to="/search">
                  Search
                </Link>
              </li>

              <li className="nav-link">
                <Link className="link" to="/houses">
                  Houses
                </Link>
              </li>
            </ul>
          </div>
      
        </nav>
       

     
      <Switch>
        <Route path="/search">
          <Search />
        </Route>

        <Route path="/houses">
          <Houses />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Nav;

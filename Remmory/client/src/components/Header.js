import React from "react";
import "./NavBar.css";
import { Link, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

export const NavBar = () => {
  return (
    <>
      <div className="navElement">
        <div id="headerTop">
          <div>
            
          </div>
          <div>
            <div id="appName">Checkered Blast</div>
          </div>
          <Route>
            <Link className="nav-link" onClick={() => { sessionStorage.clear() }} to="/login">Logout</Link>
          </Route>
        </div>
        <nav className="navbar">
          <div>
            <ul className="navList">
              <li className="nav-item">
                <Route>
                  <Link className="nav-link" to="/">Home</Link>
                </Route>
                <Route>
                  <Link className="nav-link" to="/events">Planner</Link>
                </Route>
                <Route>
                  <Link className="nav-link" to="/meals">Meals</Link>
                </Route>
                <Route>
                  <Link className="nav-link" to="/recipes" >Recipes</Link>
                </Route>
                {/* <Route>
                <Link className="nav-link" to="/">Shopping</Link>
              </Route> */}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>)
}
import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div>
      <nav>
        <div className="nav-links">
          <Link to="/" className="navbar-brand">Snack or Booze</Link>
          <Link to="/snacks">Snacks</Link>
          <Link to="/drinks">Drinks</Link>
            <span className="form-links">
              <Link to="/snacks/new">Add a Snack!</Link>
              <Link to="/drinks/new">Add a Drink!</Link>
            </span>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

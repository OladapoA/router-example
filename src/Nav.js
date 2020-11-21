import React from "react"
import './App.css';
// rather than adding a anchor tag like you would with html, we import the following
import { Link } from "react-router-dom"

// Link only takes one prop which is something called "to"
function Nav() {

  const navStyle = {
    color: "white"
  }

  return (
    <nav>
      <Link style={navStyle} to="/">
        <h3>Logo</h3>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;

import React from "react";
import Cart from "../../Containers/Cart";
import { Link } from "react-router-dom";
export default function Menu() {
  return (
    <div className="container">
      <div className="navMenu">
        <div className="leftContainer">
          <img src="images/logo.png" alt="logo" />
        </div>
        <div className="rightContainer">
          <ul className="menuLinks">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Shop</Link>
            </li>
          </ul>
          <Cart />
        </div>
      </div>
    </div>
  );
}

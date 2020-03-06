import React from "react";
import Cart from "../Cart/Cart";
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
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/#">Shop</a>
            </li>
            <li>
              <a href="/#">Contact</a>
            </li>
          </ul>
          <Cart />
        </div>
      </div>
    </div>
  );
}

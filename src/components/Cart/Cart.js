import React from "react";
import CartDropdown from "./CartDropdown";
export default function Cart() {
  return (
    <div>
      <div className="cartWrapper">
        <img className="cart" src="images/cart.svg" alt="" />
        <div className="cartCounter">
          <p>1</p>
        </div>
        <div className="cartDropdown">
          <CartDropdown />
        </div>
      </div>
    </div>
  );
}

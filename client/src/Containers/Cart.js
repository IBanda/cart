import React from "react";
import CartDropdown from "../components/Cart/CartDropdown";
import { connect } from "react-redux";
import propTypes from "prop-types";
function Cart({ cart }) {
  let count = cart.reduce((prev, current) => {
    return prev + current.productQuantity;
  }, 0);

  return (
    <div>
      <div className="cartWrapper">
        <img className="cart" src="images/cart.svg" alt="" />
        {count === 0 ? null : (
          <div className="cartCounter">
            <p>{count}</p>
          </div>
        )}
        <div className="cartDropdown">
          <CartDropdown />
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = ({ cartReducer }) => {
  const { cart } = cartReducer;
  return {
    cart
  };
};

Cart.propTypes = {
  cart: propTypes.array
};

export default connect(mapStateToProps)(Cart);

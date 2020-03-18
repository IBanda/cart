import React from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { removeItem } from "../../Actions/Actions";
import { Link } from "react-router-dom";
function CartDropdown({ cart, removeFromCart }) {
  function removeItemFromCart(sku) {
    removeFromCart(sku);
  }

  return (
    <>
      {cart.length === 0 ? (
        <div className="emptyCart">
          <img src="images/cart.svg" alt="cart" />
          <p>no products in the cart</p>
        </div>
      ) : (
        <div>
          <ul className="filledCart">
            {cart.map((item, i) => (
              <li key={i} className="topCartContainer">
                <img src={item.src} alt="" />
                <div className="productDetail">
                  <p>{item.name}</p>
                  {item.productQuantity}
                  <span>x</span>
                  <strong>{item.price}</strong>
                </div>
                <button
                  className="itemRemove"
                  onClick={() => removeItemFromCart(item.sku)}
                >
                  x
                </button>
              </li>
            ))}
          </ul>
          <div className="bottomCartContainer">
            <div className="subtotal"></div>
            <Link to="/cart" className="viewCartBtn">
              view cart
            </Link>
            <button className="checkoutBtn">checkout</button>
          </div>
        </div>
      )}
    </>
  );
}
const mapStateToProps = ({ cartReducer }) => {
  const { cart } = cartReducer;
  return {
    cart
  };
};
const mapDispatchToProps = dispatch => ({
  removeFromCart: itemSku => dispatch(removeItem(itemSku))
});

CartDropdown.propTypes = {
  cart: propTypes.array,
  removeFromCart: propTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);

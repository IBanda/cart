import React from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { quantity, payment } from "../Actions/Actions";
import CartTotals from "../components/Cart/CartTotals";
import CartTable from "../components/Cart/CartTable";
function ShoppingCartPage({ cart, makePayment }) {
  let subTotal = cart.reduce((prev, current) => {
    let price =
      parseFloat(current.price.replace("$", "").trim()).toFixed(2) *
      current.productQuantity;
    return prev + price;
  }, 0);
  let shipping = 5;

  function paymentHandler() {
    const paymentItems = cart.map(item => {
      const { name, price, productQuantity: quantity, src } = item;
      const amount = parseInt(price.replace("$", "").trim());
      const images = [`http://localhost:3000/${src}`];
      const itemObj = {
        name,
        amount,
        quantity,
        images,
        currency: "usd"
      };
      return itemObj;
    });

    makePayment(paymentItems);
  }
  return (
    <div className="container shoppingCart">
      <div className="row">
        <div className="col-lg-12">
          <h1>shopping cart</h1>
        </div>
        <div className="col-lg-8 leftCartContainer">
          <CartTable cart={cart} />
        </div>
        <div className="col-lg-4 cartTotalsWrapper">
          <CartTotals
            shipping={shipping}
            subTotal={subTotal}
            paymentHandler={paymentHandler}
          />
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
const mapDispatchToProps = dispatch => ({
  productCount: count => dispatch(quantity(count)),
  makePayment: items => dispatch(payment(items))
});

ShoppingCartPage.propTypes = {
  cart: propTypes.array,
  productCount: propTypes.func
};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartPage);

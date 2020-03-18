import React, { useState } from "react";
import Menu from "../../components/Navigation/Menu";
import { products } from "../../products";
import Product from "../../components/Product/Product";
import CartModal from "../../components/CartModal/CartModal";
import ShoppingCartPage from "../ShoppingCartPage";
import { modalState } from "../../Actions/Actions";
import propTypes from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
function Shop({ modalStatus, openOrClose, paymentHandle }) {
  const [productDetails, setProductDetails] = useState({});

  function showModal(e, details) {
    e.preventDefault();
    openOrClose(modalStatus);
    setProductDetails(details);
  }

  return (
    <Router>
      <div className="navWrapper">
        <Menu />
      </div>
      <Route path="/cart" component={ShoppingCartPage} />
      <Route path="/" exact>
        <div className="productSection container">
          <div className="row">
            {products.map(item => (
              <Product {...item} showModal={showModal} key={item.sku} />
            ))}
          </div>
        </div>
      </Route>
      {modalStatus && <CartModal {...productDetails} />}
    </Router>
  );
}

const mapPropsToState = ({ modalStatus, paymentHandle }) => ({
  modalStatus,
  paymentHandle
});

const mapDispatchToProps = dispatch => ({
  openOrClose: currentState => dispatch(modalState(currentState))
});

Shop.propTypes = {
  modalStatus: propTypes.bool,
  openOrClose: propTypes.func
};

export default connect(mapPropsToState, mapDispatchToProps)(Shop);

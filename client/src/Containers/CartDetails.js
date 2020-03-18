import React, { useState } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";

import { addToCart, quantity, modalState } from "../Actions/Actions";

function CartDetails({
  name,
  price,
  category,
  src,
  description,
  sku,
  showModal,
  addProduct,
  productQuantity,
  productCount
}) {
  function addItem(e) {
    e.preventDefault();
    addProduct([
      {
        name,
        price,
        productQuantity,
        src,
        sku
      }
    ]);
    productCount(1);
    setPopUp(name);
  }
  function handleChange(e) {
    e.preventDefault();
    productCount(e.target.value);
  }
  const [popUp, setPopUp] = useState("");

  return (
    <div className="modalWrapper">
      <div className="row modalContainer">
        {popUp && (
          <div className="popUp">
            <div>
              <svg
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
              >
                <g>
                  <g>
                    <path
                      d="M497.36,69.995c-7.532-7.545-19.753-7.558-27.285-0.032L238.582,300.845l-83.522-90.713
			c-7.217-7.834-19.419-8.342-27.266-1.126c-7.841,7.217-8.343,19.425-1.126,27.266l97.126,105.481
			c3.557,3.866,8.535,6.111,13.784,6.22c0.141,0.006,0.277,0.006,0.412,0.006c5.101,0,10.008-2.026,13.623-5.628L497.322,97.286
			C504.873,89.761,504.886,77.54,497.36,69.995z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M492.703,236.703c-10.658,0-19.296,8.638-19.296,19.297c0,119.883-97.524,217.407-217.407,217.407
			c-119.876,0-217.407-97.524-217.407-217.407c0-119.876,97.531-217.407,217.407-217.407c10.658,0,19.297-8.638,19.297-19.296
			C275.297,8.638,266.658,0,256,0C114.84,0,0,114.84,0,256c0,141.154,114.84,256,256,256c141.154,0,256-114.846,256-256
			C512,245.342,503.362,236.703,492.703,236.703z"
                    />
                  </g>
                </g>
              </svg>
              <p>{`"${popUp}" has been added to your cart`}</p>
            </div>
          </div>
        )}
        <div className="col-lg-6 modalLeft">
          <img className="modalProductImage" src={src} alt={name} />
        </div>
        <div className="col-lg-6 modalRight">
          <h2>{name}</h2>
          <h3>{price}</h3>
          <p>{description}</p>
          <form onSubmit={e => addItem(e)}>
            <input
              type="number"
              value={productQuantity}
              onChange={e => handleChange(e)}
            />
            <button type="submit">add to cart</button>
          </form>
          <h5 className="productCat">category: </h5>
          <span>{category}</span>
          <a onClick={e => showModal(e, {})} href="/#">
            <div className="modalClose">
              <p>x</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ productQuantity, modalStatus }) => ({
  productQuantity,
  modalStatus
});

const mapDispatchToProps = dispatch => ({
  addProduct: product => dispatch(addToCart(product)),
  productCount: count => dispatch(quantity(count)),
  openOrClose: boolState => dispatch(modalState(boolState))
});

CartDetails.propTypes = {
  name: propTypes.string,
  price: propTypes.string,
  category: propTypes.string,
  src: propTypes.string,
  description: propTypes.string,
  formHandlers: propTypes.object,
  showModal: propTypes.func,
  addToCart: propTypes.func,
  quantity: propTypes.string,
  addProduct: propTypes.func,
  cart: propTypes.array,
  productQuantity: propTypes.number,
  productCount: propTypes.func,
  sku: propTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);

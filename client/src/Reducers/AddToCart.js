import {
  ADDTOCART,
  QUANTITY,
  REMOVEITEM,
  MODALSTATE,
  UPDATECART,
  PAYMENT
} from "../Actions/ActionTypes";
import { combineReducers } from "redux";
const initialCart = { cart: [] };
let cart = "";
const cartReducer = (state = initialCart, action) => {
  if (action.type === ADDTOCART) {
    cart = state.cart.slice(0).concat(action.product);
    if (state.cart.length !== 0) {
      state.cart.forEach((item, i) => {
        if (item.sku === action.product[0].sku) {
          cart = state.cart.slice(0);
          cart[i].productQuantity += action.product[0].productQuantity;
        }
      });
    }
    return { cart };
  } else if (action.type === REMOVEITEM) {
    return {
      cart: state.cart.slice(0).filter(item => item.sku !== action.sku)
    };
  } else if (action.type === UPDATECART) {
    state.cart.forEach((item, i) => {
      if (item.sku === action.sku) {
        cart = state.cart.slice(0);
        cart[i].productQuantity = action.value;
      }
    });
    return { cart };
  }
  return state;
};

const initialQuantity = 1;
const productQuantity = (state = initialQuantity, action) => {
  if (action.type === QUANTITY) {
    return parseInt(action.value);
  }
  return state;
};

const initialModalState = false;
const modalStatus = (state = initialModalState, action) => {
  if (action.type === MODALSTATE) {
    let status = !state;
    return status;
  }
  return state;
};
const initialPayment = "";
const paymentHandle = (state = initialPayment, action) => {
  if (action.type === PAYMENT) {
    return action.value.id;
  }
  return state;
};
export const Reducers = combineReducers({
  cartReducer,
  productQuantity,
  modalStatus,
  paymentHandle
});

import {
  ADDTOCART,
  QUANTITY,
  REMOVEITEM,
  MODALSTATE,
  UPDATECART,
  PAYMENT
} from "./ActionTypes";
const addToCart = value => ({
  type: ADDTOCART,
  product: value
});

const updateCart = (value, sku) => ({
  type: UPDATECART,
  value,
  sku
});
const quantity = value => ({
  type: QUANTITY,
  value
});

const removeItem = sku => ({
  type: REMOVEITEM,
  sku
});

const payment = value => async dispatch => {
  await fetch("http://localhost:4000/payments", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(value)
  })
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: PAYMENT,
        value: data
      })
    );
};

const modalState = isOpen => ({
  type: MODALSTATE,
  isOpen
});
export { addToCart, updateCart, quantity, removeItem, modalState, payment };

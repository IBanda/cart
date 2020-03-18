import React, { useEffect, useState } from "react";
import { updateCart, removeItem } from "../Actions/Actions";
import { connect } from "react-redux";
import propTypes from "prop-types";
function ProductDetail({ item, updateQuantity, removeFromCart }) {
  const [productQuantity, setProductQuantity] = useState(1);
  useEffect(() => {
    setProductQuantity(item.productQuantity);
  }, [item]);

  function handleChange(e, sku) {
    e.preventDefault();
    setProductQuantity(parseInt(e.target.value));
    updateQuantity(parseInt(e.target.value), sku);
  }
  function removeItemFromCart(sku) {
    removeFromCart(sku);
  }

  return (
    <>
      <tr>
        <td className="productCol">
          <button onClick={e => removeItemFromCart(item.sku)}>x</button>
          <img className="shoppingCartImg" src={item.src} alt={item.name} />
          {item.name}
        </td>
        <td>{item.price}</td>
        <td>
          <input
            className="quantityInput"
            type="number"
            value={productQuantity}
            onChange={e => handleChange(e, item.sku)}
          />
        </td>
        <td>
          $
          {parseFloat(item.price.replace("$", "").trim()) *
            parseFloat(item.productQuantity)}
        </td>
      </tr>
    </>
  );
}
const mapDispatchToProps = dispatch => ({
  updateQuantity: (amount, sku) => dispatch(updateCart(amount, sku)),
  removeFromCart: itemSku => dispatch(removeItem(itemSku))
});
ProductDetail.propTypes = {
  item: propTypes.object,
  updateQuantity: propTypes.func
};

export default connect(null, mapDispatchToProps)(ProductDetail);

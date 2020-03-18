import ReactDOM from "react-dom";
import React, { useEffect, useRef } from "react";
import CartDetails from "../../Containers/CartDetails";

export default function CartModal(props) {
  const elementRef = useRef(null);
  if (!elementRef.current) {
    const div = document.createElement("div");
    elementRef.current = div;
  }

  useEffect(() => {
    const modal = document.getElementById("cartModal");
    modal.appendChild(elementRef.current);
    let disMount = elementRef.current;
    return () => modal.removeChild(disMount);
  });
  return ReactDOM.createPortal(<CartDetails {...props} />, elementRef.current);
}

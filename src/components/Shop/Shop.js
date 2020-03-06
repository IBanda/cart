import React from "react";
import Menu from "../Navigation/Menu";
import { products } from "../../products";
import Product from "../Product/Product";
export default function Shop() {
  return (
    <>
      <div className="navWrapper">
        <Menu />
      </div>
      <div className="productSection container">
        <div className="row">
          {products.map((item, i) => (
            <Product {...item} key={i} />
          ))}
        </div>
      </div>
    </>
  );
}

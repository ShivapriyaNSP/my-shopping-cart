import React from "react";
import Product from "./Product";
export default function Main(Props) {
  const { products, onAdd } = Props;
  return (
    <div className="block row ">
      {products.map((product) => (
        <Product key={product.id} product={product} onAdd={onAdd}></Product>
      ))}
    </div>
  );
}

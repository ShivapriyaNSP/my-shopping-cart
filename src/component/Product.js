import React from "react";

export default function Product(Props) {
  const { product, onAdd } = Props;
  return (
    <div className="contentbox ">
      <img className="small" src={product.image} alt={product.name}></img>
      <h3>{product.name}</h3>
      <div>{product.price} CHF</div>
      <div>
        <button className="button" onClick={() => onAdd(product)}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

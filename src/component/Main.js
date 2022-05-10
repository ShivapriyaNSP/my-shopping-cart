import React from "react";
import Product from "./Product";
import { Routes, Route } from "react-router-dom";
export default function Main(Props) {
  const { products, onAdd } = Props;
  return (
    <div className="block ">
      <Routes>
        <Route path="/" element={<div>Vegetables</div>} />
        <Route path="/fruits" element={<div>Fruits</div>} />
        <Route path="/vegetables" element={<div>Vegetables</div>} />
        <Route path="/cheese" element={<div>Cheese</div>} />
      </Routes>
      <div className="block row ">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </div>
  );
}

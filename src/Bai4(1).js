import React from "react";

function ProductItem({ product, addToCart }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <h3>{product.name}</h3>
      <p>Giá: {product.price}đ</p>
      <button onClick={() => addToCart(product)}>Thêm vào giỏ</button>
    </div>
  );
}

export default ProductItem;

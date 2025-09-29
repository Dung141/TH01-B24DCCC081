import React, { useState } from "react";
import ProductItem from "./Bai4(1)";

function ShoppingCart() {
  const products = [
    { id: 1, name: "Sản phẩm A", price: 100 },
    { id: 2, name: "Sản phẩm B", price: 200 },
    { id: 3, name: "Sản phẩm C", price: 300 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);

  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <div>
      <h2>Giỏ hàng: {cart.length} sản phẩm, tổng tiền: {total}đ</h2>
      {products.map((p) => (
        <ProductItem key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ShoppingCart;

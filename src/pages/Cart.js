import React from "react";
import CartDescription from "../cart-components/CartDescription";
import CartTotals from "../cart-components/CartTotals";
import CartList from "../cart-components/CartList";
import "../cart-styles/cart-styles.css";

export default function Cart() {
  return (
    <section className="container-cart">
      <CartDescription />
      <CartTotals />
      <CartList />
    </section>
  );
}

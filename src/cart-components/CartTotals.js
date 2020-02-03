import React from "react";
import { ProductConsumer } from "../context/context";
export default function CartTotals() {
  return (
    <ProductConsumer>
      {value => {
        const { clearCart, cartSubTotal, cartTax, cartTotal } = value;
        return (
          <div className="container-totals">
            <button className="btn-totals" onClick={clearCart}>
              Wyczyść kartę
            </button>
            <div className="totals">
              <h4>Kwota do zapłaty: {cartSubTotal}</h4>
              <h4>Podatek: {cartTax}</h4>
              <h4>Całkowita kwota: {cartTotal}</h4>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

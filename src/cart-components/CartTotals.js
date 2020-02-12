import React from "react";
import { ProductConsumer } from "../context/context";
import { Link } from "react-router-dom";
export default function CartTotals() {
  return (
    <ProductConsumer>
      {value => {
        const { clearCart, cartSubTotal, cartTax, cartTotal } = value;
        return (
          <div className="container-totals">
            <div className="container-btn">
              <button className="btn-submit cart-margin" onClick={clearCart}>
                Wyczyść kartę
              </button>
              <Link to="/shop">
                <button className="btn-submit cart-margin">
                  Wróć do sklepu
                </button>
              </Link>
            </div>

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

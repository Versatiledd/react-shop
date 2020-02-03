import React from "react";
import CartItem from "./CartItem";
import { ProductConsumer } from "../context/context";
export default function CartList() {
  return (
    <ProductConsumer>
      {value => {
        const { cart, increment, decrement, removeItem } = value;
        console.log(cart);
        if (cart.length === 0) {
          return <h3 className="title-cart">Twoja karta jest pusta.</h3>;
        }
        return (
          <>
            {cart.map(item => (
              <CartItem
                key={item.id}
                increment={increment}
                decrement={decrement}
                removeItem={removeItem}
              ></CartItem>
            ))}
          </>
        );
      }}
    </ProductConsumer>
  );
}

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/shop-icon.css";

export default function SideCart({ value }) {
  let var1 = useRef(null);
  useEffect(() => {
    if (value.cartOpen === true) {
      gsap.to(var1, {
        duration: 0.4,
        height: "50%",
        width: 300,
        ease: "Power1.easeOut"
      });
    } else if (value.cartOpen === false) {
      gsap.to(var1, {
        right: 0,
        width: 0
      });
    }
  });

  return (
    <div className="overlay" ref={el => (var1 = el)}>
      <h4>Twój koszyk</h4>
      {value.cart.map(item => (
        <div key={item.id}>
          <img src={item.image} alt="" />
        </div>
      ))}
    </div>
  );
}

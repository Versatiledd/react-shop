import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/shop-icon.css";

export default function SideCart({ value }) {
  let var1 = useRef(null);
  useEffect(() => {
    if (value.cartOpen === true) {
      gsap.to(var1, {
        duration: 0.7,
        opacity: 1,
        height: "100%",
        width: 300,
        ease: "Power1.easeOut"
      });
    } else if (value.cartOpen === false) {
      gsap.to(var1, {
        opacity: 0,
        height: 0
      });
    }
  });
  return (
    <div className="overlay" ref={el => (var1 = el)}>
      <h2>Produkt</h2>
      <h3>Cena</h3>
      <h4>Obraz</h4>
    </div>
  );
}

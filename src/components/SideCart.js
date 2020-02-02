import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ProductConsumer } from "../context/context";
import "../styles/shop-icon.css";

export default function SideCart({ value }) {
  console.log(value.featuredProducts);
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
      {value.featuredProducts.map(item => {
        return (
          <div key={item.id}>
            <img src={item.image} alt="single-image" />
          </div>
        );
      })}
    </div>
  );
}

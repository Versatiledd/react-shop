import React, { useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import gsap from "gsap";
import "../styles/shop-icon.css";
import { Link } from "react-router-dom";

export default function SideCart({ value }) {
  const { cartOpen, closeCart } = value;
  let var1 = useRef(null);
  useEffect(() => {
    if (cartOpen === true) {
      gsap.to(var1, {
        opacity: 1,
        width: 300,
        duration: 0.18,
        ease: "Power1.easeOut",
        zIndex: 11
      });
    } else if (cartOpen === false) {
      gsap.to(var1, {
        duration: 0.18,
        right: 0,
        opacity: 0,
        ease: "Power1.easeOut",
        width: 0
      });
    }
  });

  return (
    <div className="overlay" ref={el => (var1 = el)}>
      <h4 className="overlay-title">Twój koszyk</h4>
      <AiOutlineClose className="close-cart" onClick={closeCart} />
      {value.cart.map(item => (
        <div key={item.id} className="shopCart">
          <img src={item.image} alt="" className="shopImage" />
          <h3 className="shop-title">{item.title}</h3>
          <span> Ilość : {item.count} </span>
          <span className="shop-price">
            Cena : {item.price * item.count} zł
          </span>
        </div>
      ))}
      <Link to="/cart" onClick={closeCart} className="link-sidecart">
        <button className="shop-button">Przejdź do karty</button>
      </Link>
    </div>
  );
}

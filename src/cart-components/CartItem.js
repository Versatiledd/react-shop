import React from "react";
import {
  FaChevronCircleUp,
  FaChevronCircleDown,
  FaTrash
} from "react-icons/fa";
export default function CartItem({ cart, increment, decrement, removeItem }) {
  const { id, title, price, image, count, total } = cart;
  return (
    <div className="single-item-container">
      <div className="single-item-image">
        <img src={image} alt="programming" className="image-cart" />
      </div>
      <div className="single-item-image">
        <h3 className="title-product">{title}</h3>
      </div>
      <div className="single-item-image">
        <h3 className="title-product">{price}</h3>
      </div>
      <div className="single-item-image">
        <FaChevronCircleUp
          className="icon-item"
          onClick={() => increment(id)}
        />
        <h3 className="title-count">{count}</h3>
        <FaChevronCircleDown
          className="icon-item"
          onClick={() => decrement(id)}
        />
      </div>
      <div className="single-item-image">
        <FaTrash className="remove-item" onClick={() => removeItem(id)} />
      </div>
      <div className="single-item-image">
        <h3 className="title-product">{total}</h3>
      </div>
    </div>
  );
}

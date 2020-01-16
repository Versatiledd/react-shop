import React from "react";
import { ProductConsumer } from "../context/context";
import "../styles/shop.css";

function Shop() {
  return <ProductConsumer>{value => console.log(value)}</ProductConsumer>;
}

export default Shop;

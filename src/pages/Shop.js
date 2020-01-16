import React from "react";
import { ProductConsumer } from "../context/context";
import "../styles/shop.css";

function Shop() {
  return <ProductConsumer>{value => <h2>{value}</h2>}</ProductConsumer>;
}

export default Shop;

import React from "react";
import { ProductConsumer } from "../context/context";
import AllProducts from "../product-components/AllProducts";
import "../styles/shop.css";

function Shop() {
  return <AllProducts></AllProducts>;
}

export default Shop;

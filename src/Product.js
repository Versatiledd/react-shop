import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "./context/context";
import "../src/styles/featured-products.css";

export default function Product({ product }) {
  return (
    <ProductConsumer>
      {value => {
        const { addToCart, setSingleProduct } = value;
        return (
          <div className="single-product">
            <div className="card">
              <div className="img-container">
                <img className="img-single" src={product.image} alt="" />
              </div>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

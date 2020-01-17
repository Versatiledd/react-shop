import React from "react";
import Product from "../Product";
import { ProductConsumer } from "../context/context";
import "../styles/featured-products.css";

export default function Featured() {
  return (
    <section className="featured-products">
      <div className="container-featured">
        <ProductConsumer>
          {value => {
            const { featuredProducts } = value;
            return featuredProducts.map(product => (
              <Product key={product.id} product={product}></Product>
            ));
          }}
        </ProductConsumer>
      </div>
    </section>
  );
}

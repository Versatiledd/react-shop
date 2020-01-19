import React from "react";
import { ProductConsumer } from "../context/context";
import Product from "../Product";
import "../styles/all-products.css";

export default function Products() {
  return (
    <ProductConsumer>
      {value => {
        const { filteredProducts } = value;
        return (
          <section>
            <div className="all-products">
              {filteredProducts.map(product => {
                return <Product key={product.id} product={product}></Product>;
              })}
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}

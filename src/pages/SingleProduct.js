import React from "react";
import { ProductConsumer } from "../context/context";
import "../styles/single-product-page.css";
import Button from "../components/Button";
export default function SingleProduct() {
  return (
    <ProductConsumer>
      {value => {
        const { singleProduct, loading } = value;

        if (loading) {
          console.log("hello from loading");
          return <h2>Witaj z loadingu</h2>;
        }
        const { title, description, price, id, image } = singleProduct;
        console.log(image);
        return (
          <section className="container-single-product">
            <div className="single-product-page">
              <div className="image-single-product">
                <div className="single-image">
                  <img src={`../${image}`} className="img" />
                </div>
              </div>
              <div className="description-single-product">
                <h3 className="single-product-title">{title}</h3>
                <p className="single-product-description">{description}</p>
                <h4 className="single-product-price"> Cena : {price} zł </h4>
              </div>
              <div className="btn-single">
                <Button>Kup teraz</Button>
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}

import React, { Component } from "react";
import { items } from "../context/productData";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    cart: 0,
    cartItems: 0,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: true
  };

  componentDidMount() {
    this.setProducts(items);
  }
  setProducts(products) {
    let storeProducts = products.map(item => {
      const { id } = item.sys;
      const image = item.fields.image.fields.url;
      const product = { id, ...item.fields, image };
      return product;
    });
    // featured products on main page
    let featuredProducts = storeProducts.filter(item => item.featured === true);
    this.setState({
      storeProducts,
      filteredProducts: storeProducts,
      featuredProducts,
      cart: this.getStorageCart(),
      singleProduct: this.getStorageProduct(),
      loading: false
    });
  }

  getStorageCart = () => {
    return [];
  };
  //   product from local storage
  getStorageProduct = () => {
    return [];
  };
  //   totals
  getTotals = () => {};
  //   add totals
  addTotals = () => {};
  //   sync storage
  syncStorage = () => {};
  // add to cart
  addToCart = id => {
    console.log(id);
  };
  // set single product
  setSingleProduct = id => {
    console.log(id);
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

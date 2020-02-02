import React, { Component } from "react";
import { items } from "../context/productData";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    cart: 0,
    cartOpen: false,
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
  handleCart = () => {
    this.setState({
      cartOpen: !this.state.cartOpen
    });
  };
  closeCart = () => {
    this.setState({
      cartOpen: false
    });
  };
  openCart = () => {
    this.setState({
      cartOpen: true
    });
  };
  componentDidMount = () => {
    this.setProducts(items);
  };
  setProducts = products => {
    let storeProducts = products.map(item => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
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
  };

  getStorageCart = () => {
    return [];
  };
  //   product from local storage
  getStorageProduct = () => {
    return localStorage.getItem("singleProduct")
      ? JSON.parse(localStorage.getItem("singleProduct"))
      : {};
  };
  //   totals
  getTotals = () => {};
  //   add totals
  addTotals = () => {};
  //   sync storage
  syncStorage = () => {};
  // add to cart
  addToCart = id => {
    let temporaryCart = [...this.state.cart];
    console.log(temporaryCart);
    let allProducts = [...this.state.storeProducts];
    console.log(allProducts);
    let item = temporaryCart.find(item => item.id === id);
    console.log(item);
    if (!item) {
      item = allProducts.find(item => item.id === item.id);
      let total = item.price;
      let cartItem = { ...item, count: 1, total };
      temporaryCart = [...temporaryCart, cartItem];
      console.log(temporaryCart);
    } else {
      item.count++;
      item.total = item.price * item.count;
      item.total = parseFloat(item.total.toFixed(2));
    }
    this.setState(
      () => {
        return { cart: temporaryCart };
      },
      () => {
        this.addTotals();
        this.syncStorage();
        this.openCart();
      }
    );
  };
  // set single product
  setSingleProduct = id => {
    let product = this.state.storeProducts.find(item => item.id === id);
    localStorage.setItem("singleProduct", JSON.stringify(product));
    this.setState({
      singleProduct: { ...product },
      loading: false
    });
    console.log(product);
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          handleCart: this.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart,
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

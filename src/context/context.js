import React, { Component } from "react";
import { items } from "../context/productData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    cart: [],
    cartAdded: 0,
    cartOpen: null,
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

  // strona zamówień

  increment = id => {
    console.log(id);
  };
  decrement = id => {
    console.log(id);
  };
  removeItem = id => {
    console.log(id);
  };
  clearCart = id => {
    console.log("oczyszczenie");
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
    this.setState(
      {
        storeProducts,
        filteredProducts: storeProducts,
        featuredProducts,
        cart: this.getStorageCart(),
        singleProduct: this.getStorageProduct(),
        loading: false
      },
      () => this.addTotals()
    );
  };

  getStorageCart = () => {
    let cart;
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    } else {
      cart = [];
    }
    return cart;
  };
  //   product from local storage
  getStorageProduct = () => {
    return localStorage.getItem("singleProduct")
      ? JSON.parse(localStorage.getItem("singleProduct"))
      : {};
  };
  //   totals
  getTotals = () => {
    let subTotal = 0;
    let cartItems = 0;
    this.state.cart.forEach(item => {
      subTotal += item.total;
      cartItems += item.count;
    });
    subTotal = parseFloat(subTotal.toFixed(2));
    let tax = subTotal * 0.19;
    tax = parseFloat(tax.toFixed(2));
    let total = subTotal + tax;
    total = parseFloat(total.toFixed(2));
    return {
      cartItems,
      subTotal,
      tax,
      total
    };
  };
  //   add totals
  addTotals = () => {
    const totals = this.getTotals();
    this.setState({
      cartItems: totals.cartItems,
      cartSubTotal: totals.subTotal,
      cartTax: totals.tax,
      cartTotal: totals.total
    });
  };
  //   sync storage
  syncStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  };
  // add to cart
  addToCart = id => {
    let temporaryCart = [...this.state.cart];
    let allProducts = [...this.state.storeProducts];
    let item = temporaryCart.find(item => item.id === id);
    if (!item) {
      item = allProducts.find(item => item.id === id);
      let total = item.price;
      let cartItem = { ...item, count: 1, total };
      temporaryCart = [...temporaryCart, cartItem];
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
          setSingleProduct: this.setSingleProduct,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

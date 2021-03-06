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
    loading: true,
    backgroundLoad: true,
    formName: "",
    formEmail: "",
    formNumber: "",
    formSubject: "",
    formMessage: ""
  };
  // contact methods

  // change state name

  handleChangeForm = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.setState({
      formName: "",
      formEmail: "",
      formNumber: "",
      formSubject: "",
      formMessage: ""
    });
    alert("Wiadomość została wysłana. Dziękujemy!");
  };

  handleCart = () => {
    this.setState({
      cartOpen: true
    });
  };

  closeCart = () => {
    this.setState({
      cartOpen: false
    });
  };
  showBackground = history => {
    console.log(history);
  };
  // strona zamówień

  increment = id => {
    let tempCart = [...this.state.cart];
    const findItem = tempCart.find(item => item.id === id);
    findItem.count++;
    findItem.total = findItem.count * findItem.price;
    findItem.total = parseFloat(findItem.total.toFixed(2));
    this.setState(
      () => {
        return {
          cart: [...tempCart]
        };
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };
  decrement = id => {
    let tempCart = [...this.state.cart];
    const findItem = tempCart.find(item => item.id === id);
    findItem.count = findItem.count - 1;
    if (findItem.count === 0) {
      this.removeItem(id);
    } else {
      findItem.total = findItem.count * findItem.price;
      findItem.total = parseFloat(findItem.total.toFixed(2));

      this.setState(
        () => {
          return {
            cart: [...tempCart]
          };
        },
        () => {
          this.addTotals();
          this.syncStorage();
        }
      );
    }
  };
  removeItem = id => {
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    this.setState(
      {
        cart: [...tempCart]
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };
  clearCart = () => {
    this.setState(
      {
        cart: []
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
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
          cartOpen: this.cartOpen,
          ...this.state,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          showBackground: this.showBackground,
          handleChangeForm: this.handleChangeForm,
          handleSubmitForm: this.handleSubmitForm
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

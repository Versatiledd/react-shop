import React, { Component } from "react";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  render() {
    return (
      <ProductContext.Provider value="hello from context, jest to potężne narzędzie do zmiany stanu aplikacji bez uzycia props">
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

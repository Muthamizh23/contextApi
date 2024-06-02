// QuantityContext.js
import React, { createContext, Component } from "react";
import { products } from "./product";

const QuantityContext = createContext();

class QuantityProvider extends Component {
  state = {
    amount: 0,
    products: products.products,
  };

  componentDidMount() {
    var total = 0;
    this.state.products.forEach((data) => {
      total += data.price;
    });
    this.setState({
      amount: total,
    });
  }

  updateQuantityAndAmount = (id, quantity) => {
    var total = 0;
    var index = 0;
    var price = 0;
    this.state.products.forEach((data, i) => {
      if (data.id === id) {
        total += data.price * quantity;
      } else if (data.quantity) {
        total += data.price * data.quantity;
      } else {
        total += data.price;
      }
      if (data.id === id) {
        index = i;
        price = data.price;
      }
    });
    this.setState({products: this.state.products.map(x => x.id === id ? {...x, quantity:quantity} : x)});

    this.setState({
      amount: total
    });
  };

  render() {
    const { amount, products } = this.state;
    const { updateQuantityAndAmount } = this;

    return (
      <QuantityContext.Provider
        value={{
          amount,
          updateQuantityAndAmount,
          products,
        }}
      >
        {this.props.children}
      </QuantityContext.Provider>
    );
  }
}

export { QuantityProvider, QuantityContext };

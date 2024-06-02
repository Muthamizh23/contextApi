// YourComponent.js
import React, { Component } from "react";
import { QuantityContext } from "./QuantityContext";
import "./App.css";

class App extends Component {
  static contextType = QuantityContext;

  render() {
    const { amount, updateQuantityAndAmount, products } = this.context;

    return (
      <>
        <div className="app">
          {products.map((data, index) => {
            return (
              <>
                <div className="card">
                  <div className="imgSec">
                    <div className="img">
                      <img src="" />
                    </div>
                    <div className="info">
                      <h2>{data.brand}</h2>
                      <h4>{data.title}</h4>
                      <p>{data.description}</p>
                      <h4>{data.category}</h4>
                    </div>
                    <div className="quantity">
                      <div className="quantityBox">
                        <select
                          onChange={(e) =>
                            updateQuantityAndAmount(data.id, e.target.value)
                          }
                        >
                          <option value="1" key={data.id}>
                            1
                          </option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                        <span>$ {data.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <div className="subtotal">
            <div className="subDes">
              <p>SUBTOTAL</p>
              <p>SHIPPING</p>
            </div>
            <div className="subPrice">
              <p>$ {amount}</p>
              <p>Free</p>
            </div>
          </div>
          <div className="subtotal">
            <div className="subDes">
              <p className="mb-0">TOTAL</p>
            </div>
            <div className="subPrice">
              <p>$ {amount}</p>
              <p className="ctype mb-0">Get daily with nespola card</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;

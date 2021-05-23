import React, { Component, useState, useEffect } from "react";
import { formatAmount } from './../../unit'
import "./index.css";

const Cart = ({ cart, total , addToCart}) => {
  
  return (
    <div className="card my-16 mr-25 flex-30">
      <section className="layout-row align-items-center justify-content-center px-16">
        <h4>Your Cart</h4>
      </section>
      <div className="divider" />
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Item</th>
            <th className="numeric">Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.length > 0 &&
            cart.map((cartItem, idx) => {
              return (
                <tr
                  data-testid={"cart-item-" + idx}
                  key={idx + 1}
                  className="slide-up-fade-in"
                >
                  <td>{idx + 1}.</td>

                  <td className="name" data-testid="cart-item-name">
                    {cartItem.name}
                  </td>
                  <td
                    className="numeric quantity"
                    data-testid="cart-item-quantity"
                  >
                    <div className="quantityCustomize">
                      <button
                        className="qtBtn"
                        data-testid="btn-quantity-subtract"
                        onClick={() => addToCart(cartItem, "remove")}
                      >
                        -
                      </button>
                      <span className="qtBtn">
                         {cartItem.cartQuantity}
                      </span>
                      

                      <button
                        className="qtBtn"
                        data-testid="btn-quantity-add"
                        onClick={() => addToCart(cartItem, "add")}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td
                    className="numeric quantity"
                    data-testid="cart-item-quantity"
                  >
                    &#xE3F; {formatAmount(parseFloat(cartItem.cartQuantity * cartItem.price).toFixed(2))}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="totalContainer">
        <div className="tolatLbl">Total</div>
        <div className="tolatAmount">&#xE3F; {formatAmount(parseFloat(total).toFixed(2))}</div>
      </div>
    </div>
  );
};
export default Cart;

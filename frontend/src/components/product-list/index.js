import React, { Component } from "react";
import moment from 'moment'
import { formatAmount } from './../../unit'
import "./index.css";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="layout-row wrap justify-content-center flex-70 app-product-list">
      {products.map((product, i) =>  <section
            key={i}
            className="w-30"
            data-testid={"product-item-" + i}
            key={product.id}
          >
            <div className="card ma-16">
              <img
                alt="Your Cart"
                src={product.image}
                className="d-inline-block align-top product-image"
              />
              <div className="productFooter">
                <span className="leftSide">Name :</span>
                <span className="rightSide">{product.name}</span>
              </div>
              <div className="productFooter">
                <span className="leftSide">Price : </span>
                <span className="rightSide">&#xE3F; {formatAmount(parseFloat(product.price).toFixed(2))}</span>
              </div>
              <div className="productFooter">
                <span className="leftSide">Quantiry</span>
                <span className="rightSide">{product.stock}</span>
              </div>
              <div className="productFooter">
                <span className="leftSide">Material</span>
                <span className="rightSide">{product.material}</span>
              </div>
              <div className="productFooter">
                <span className="leftSide">Date</span>
                <span className="rightSide">{moment(product.createdAt).format('DD-MM-YYYY')}</span>
              </div>
              <div className="addToCart">
              <button
                  className={`x-small outlined ${product.stock==0 && 'disableBtn'}`}
                  data-testid="btn-item-add"
                  onClick={() => addToCart(product, 'add')}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </section>
        )}
    </div>
  );
};

export default ProductList;

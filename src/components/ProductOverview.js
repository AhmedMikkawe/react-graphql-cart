import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import addToCartButton from "../addToCartButton.svg";
class ProductOverview extends Component {
  product = this.props.product;
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="product-overview-container">
        <NavLink to={`/product/${this.product.id}`} className="text-reset">
          <div className="product-overview-image-container">
            <img
              src={this.product.gallery[0]}
              className="product-overview-image"
              alt=""
            />
            {this.product.inStock === false ? (
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  bottom: "0",
                  right: "0",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgb(238 238 238 / 52%)",
                }}
              >
                <h3>OUT OF STOCK</h3>
              </div>
            ) : null}
          </div>
          {this.product.inStock === true ? (
            <button
              className="add-to-cart-button"
              onClick={function (e) {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <img src={addToCartButton} alt="" />
            </button>
          ) : null}

          <div className="product-overview-info">
            <span>{this.product.name}</span>
            <span className="product-overview-price">
              ${this.product.prices[0].amount}
            </span>
          </div>
        </NavLink>
      </div>
    );
  }
}
export default ProductOverview;

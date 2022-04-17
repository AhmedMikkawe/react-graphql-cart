import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import addToCartButton from "../addToCartButton.svg";
class ProductOverview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="product-overview-container">
        <NavLink to={`/product/${this.props.slug}`} className="text-reset">
          <div className="product-overview-image-container">
            <img
              src={this.props.image}
              className="product-overview-image"
              alt=""
            />
            <button
              className="add-to-cart-button"
              onClick={function (e) {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <img src={addToCartButton} alt="" />
            </button>
          </div>
          <div className="product-overview-info">
            <span>{this.props.productName}</span>
            <span className="product-overview-price">
              ${this.props.productPrice}
            </span>
          </div>
        </NavLink>
      </div>
    );
  }
}
export default ProductOverview;

import React, { Component } from "react";
import imgUrl from "../product-image.jpg";
import addToCartButton from "../addToCartButton.svg";
class ProductOverview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="product-overview-container">
        <div className="product-overview-image-container">
          <img src={imgUrl} className="product-overview-image" alt="" />
          <button className="add-to-cart-button">
            <img src={addToCartButton} alt="" />
          </button>
        </div>
        <div className="product-overview-info">
          <span>Apollo Running Short</span>
          <span className="product-overview-price">$50.00</span>
        </div>
      </div>
    );
  }
}
export default ProductOverview;

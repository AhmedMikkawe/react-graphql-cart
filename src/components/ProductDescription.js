import React from "react";
import imgUrl from "../product-image.jpg";
class ProductDescription extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="product-description">
          <div className="product-description-images">
            <div className="product-description-images-image-container">
              <img
                className="product-description-images-image"
                src={imgUrl}
                alt=""
              />
            </div>
            <div className="product-description-images-image-container">
              <img
                className="product-description-images-image"
                src={imgUrl}
                alt=""
              />
            </div>
            <div className="product-description-images-image-container">
              <img
                className="product-description-images-image"
                src={imgUrl}
                alt=""
              />
            </div>
          </div>
          <div className="product-description-image-container">
            <img className="product-description-image" src={imgUrl} alt="" />
          </div>
          <div className="product-description-info">
            <h3>Apollo Running Short</h3>
            <div className="product-description-info-size-container">
              <span className="font-bold">Size:</span>
              <div className="product-description-info-size">
                <span className="disabled">XS</span>
                <span className="active">S</span>
                <span>M</span>
                <span>L</span>
              </div>
            </div>
            <div className="product-description-info-price-container">
              <span className="font-bold">Size:</span>
              <span className="product-description-info-price">$50.00</span>
            </div>
            <button className="add-to-cart-big-button">Add to cart</button>
            <div className="product-description-info-description">
              <p>
                Find stunning women's cocktail dresses and party dresses. Stand
                out in lace and metallic cocktail dresses and party dresses from
                all your favorite brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductDescription;

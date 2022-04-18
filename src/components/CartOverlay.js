import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import imgUrl from "../product-image.jpg";
class CartOverlay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div
        className="cartoverlay-container"
        onClick={this.props.showCartOverlay}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            minWidth: "325px",
            gap: "5px",
            backgroundColor: "#FFF",
            marginLeft: "auto",
            marginRight: "20px",
          }}
        >
          <div style={{ display: "flex" }}>
            <h4 style={{ margin: "0 5px 0 0" }}>My Bag</h4>
            <span>{this.props.numberOfCartItems} items</span>
          </div>
          <div className="cart-item">
            <div className="cart-item-info">
              <p style={{ margin: "0", fontSize: "16px" }}>
                Apollo Running Short
              </p>
              <p style={{ fontSize: "16px", fontWeight: "bold" }}>$50.00</p>
              <div
                className="product-description-info-size"
                style={{ justifyContent: "flex-start" }}
              >
                <span
                  style={{ fontSize: "14px", width: "25px", height: "25px" }}
                >
                  S
                </span>
                <span
                  style={{ fontSize: "14px", width: "25px", height: "25px" }}
                  className="disabled"
                >
                  M
                </span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <button
                className="counterButton"
                onClick={this.props.increaseNumberOfItemCount}
              >
                +
              </button>
              <h6 style={{ textAlign: "center" }}>
                {this.props.numberOfItemCount}
              </h6>
              <button
                className="counterButton"
                onClick={this.props.decreaseNumberOfItemCount}
              >
                -
              </button>
            </div>
            <img className="cart-item-image" src={imgUrl} alt="" />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontSize: "16px", fontWeight: "bold" }}>Total</p>
            <p style={{ fontSize: "16px", fontWeight: "bold" }}>$100.00</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "5px",
              alignItems: "center",
            }}
          >
            <NavLink
              className="outLineButton"
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                width: "45%",
                textTransform: "uppercase",
              }}
              to="/Cart"
            >
              view bag
            </NavLink>
            <NavLink
              className="outLineButton"
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                width: "45%",
                textTransform: "uppercase",
                backgroundColor: "#5ECE7B",
                color: "#FFF",
              }}
              to="/Cart"
            >
              check out
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
export default CartOverlay;

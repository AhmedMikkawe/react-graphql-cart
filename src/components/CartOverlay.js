import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import CartOverlayItem from "./CartOverlayItem";
import imgUrl from "../product-image.jpg";

class CartOverlay extends Component {
  items = [
    {
      itemName: "Apollo Running Short",
      itemPrice: 10,
      itemQuantity: 1,
      itemCurrency: "$",
    },
    {
      itemName: "Apollo Running Short",
      itemPrice: 20,
      itemQuantity: 1,
      itemCurrency: "$",
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0,
    };
  }
  componentDidMount() {
    this.setState({
      totalPrice: this.items.reduce((prev, curr) => {
        return prev + curr.itemPrice * curr.itemQuantity;
      }, 0),
    });
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
          onClick={(e) => {
            e.stopPropagation();
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            minWidth: "325px",
            maxHeight: "500px",
            overflow: "auto",
            gap: "5px",
            backgroundColor: "#FFF",
            marginLeft: "auto",
            marginRight: "20px",
            marginTop: "50px",
          }}
        >
          <div style={{ display: "flex" }}>
            <h4 style={{ margin: "0 5px 0 0" }}>My Bag</h4>
            <span>{this.props.numberOfCartItems} items</span>
          </div>
          {this.items.map(function (item) {
            return (
              <CartOverlayItem
                itemImage={imgUrl}
                itemName={item.itemName}
                itemPrice={item.itemPrice}
                itemCurrency={item.itemCurrency}
                itemQuantity={item.itemQuantity}
              />
            );
          })}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontSize: "16px", fontWeight: "bold" }}>Total</p>
            <p style={{ fontSize: "16px", fontWeight: "bold" }}>
              ${this.state.totalPrice}
            </p>
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

import { Component, react } from "react";

class CartOverlayItem extends Component {
  interval = null;
  constructor(props) {
    super(props);
    this.state = {
      numberOfItemCount: this.props.itemQuantity,
    };
    this.increaseNumberOfItemCount = this.increaseNumberOfItemCount.bind(this);
    this.decreaseNumberOfItemCount = this.decreaseNumberOfItemCount.bind(this);
  }

  increaseNumberOfItemCount(e) {
    e.stopPropagation();
    this.setState({ numberOfItemCount: this.state.numberOfItemCount + 1 });
  }
  decreaseNumberOfItemCount(e) {
    e.stopPropagation();
    this.setState({ numberOfItemCount: this.state.numberOfItemCount - 1 });
  }
  render() {
    return (
      <div className="cart-item">
        <div className="cart-item-info">
          <p style={{ margin: "0", fontSize: "16px" }}>{this.props.itemName}</p>
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>
            {this.props.itemCurrency}
            {this.props.itemPrice}
          </p>
          <div
            className="product-description-info-size"
            style={{ justifyContent: "flex-start" }}
          >
            <span style={{ fontSize: "14px", width: "25px", height: "25px" }}>
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
            onClick={this.increaseNumberOfItemCount}
          >
            +
          </button>
          <h6 style={{ textAlign: "center" }}>
            {this.state.numberOfItemCount}
          </h6>
          <button
            className="counterButton"
            onClick={this.decreaseNumberOfItemCount}
          >
            -
          </button>
        </div>
        <img className="cart-item-image" src={this.props.itemImage} alt="" />
      </div>
    );
  }
}
export default CartOverlayItem;

import React from "react";
import Logo from "../a-logo.svg";
import EmptyCart from "../EmptyCart.svg";
import CurrencyChangerDropDown from "./CurrencyChangerDropDown";
import CartOverlay from "./CartOverlay";
import { NavLink } from "react-router-dom";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyChangerShow: false,
      cartCounter: 1,
      cartOverlayShow: false,
    };
    this.wrapperRef = React.createRef();
    this.cartRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleCartOverlay = this.handleCartOverlay.bind(this);
    this.handleClickOutsideCart = this.handleClickOutsideCart.bind(this);
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    document.addEventListener("mousedown", this.handleClickOutsideCart);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
    document.removeEventListener("mousedown", this.handleClickOutsideCart);
  }
  handleClickOutside(event) {
    if (
      this.state.currencyChangerShow &&
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(event.target)
    ) {
      this.handleCurrencyChanger();
    }
  }
  handleClickOutsideCart(e) {
    if (
      this.state.cartOverlayShow &&
      this.cartRef.current &&
      !this.cartRef.current.contains(e.target)
    ) {
      this.handleCartOverlay();
    }
  }

  handleCurrencyChanger() {
    this.state.currencyChangerShow
      ? this.setState({ currencyChangerShow: false })
      : this.setState({ currencyChangerShow: true });
  }
  handleCartOverlay() {
    if (this.state.cartOverlayShow) {
      this.setState({ cartOverlayShow: false });
    } else {
      this.setState({ cartOverlayShow: true });
    }
  }
  render() {
    return (
      <div className="container">
        <div className="navbar">
          <ul className="left-navbar">
            <li>
              <NavLink to="/category/women">Women</NavLink>
            </li>
            <li>
              <NavLink to="/category/men">Men</NavLink>
            </li>
            <li>
              <NavLink to="/category/kids">Kids</NavLink>
            </li>
          </ul>
          <div className="middle-navbar">
            <img src={Logo} alt="" />
          </div>
          <div className="right-navbar">
            <div className="dropdown-curreny" ref={this.wrapperRef}>
              <button
                className="dropdown-curreny-btn"
                onClick={this.handleCurrencyChanger.bind(this)}
              >
                $
              </button>
              {this.state.currencyChangerShow ? (
                <CurrencyChangerDropDown handler={this.handler} />
              ) : null}
            </div>
            <div className="navbar-cart" ref={this.cartRef}>
              <button
                className="navbar-cart-btn"
                onClick={this.handleCartOverlay}
              >
                <img src={EmptyCart} alt="" />
              </button>
              {this.state.cartCounter > 0 ? (
                <span className="cart-counter">{this.state.cartCounter}</span>
              ) : null}
              {this.state.cartOverlayShow ? (
                <CartOverlay countOfItems={this.state.cartCounter} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;

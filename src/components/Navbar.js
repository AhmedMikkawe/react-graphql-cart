import React from "react";
import Logo from "../a-logo.svg";
import EmptyCart from "../EmptyCart.svg";
import CurrencyChangerDropDown from "./CurrencyChangerDropDown";
import { NavLink } from "react-router-dom";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyChangerShow: false,
      cartCounter: 0,
    };
    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
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

  handleCurrencyChanger() {
    this.state.currencyChangerShow
      ? this.setState({ currencyChangerShow: false })
      : this.setState({ currencyChangerShow: true });
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
            <div className="navbar-cart">
              <button className="navbar-cart-btn">
                <img src={EmptyCart} alt="" />
              </button>
              {this.state.cartCounter > 0 ? (
                <span className="cart-counter">{this.state.cartCounter}</span>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;

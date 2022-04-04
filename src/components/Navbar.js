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
    this.handler = this.handler.bind(this);
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.handleCurrencyChanger();
    }
  }
  handler() {
    this.handleCurrencyChanger();
  }

  handleCurrencyChanger() {
    this.state.currencyChangerShow
      ? this.setState({ currencyChangerShow: false })
      : this.setState({ currencyChangerShow: true });
  }
  render() {
    return (
      <div className="container" ref={this.wrapperRef}>
        <div className="navbar">
          <ul className="left-navbar">
            <li>
              <NavLink to="/category/">Women</NavLink>
            </li>
            <li>
              <NavLink to="/category/">Men</NavLink>
            </li>
            <li>
              <NavLink to="/category">Kids</NavLink>
            </li>
          </ul>
          <div className="middle-navbar">
            <img src={Logo} />
          </div>
          <div className="right-navbar">
            <div className="dropdown-curreny">
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
                <img src={EmptyCart} />
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

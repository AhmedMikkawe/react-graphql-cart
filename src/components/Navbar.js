import React from "react";
import Logo from "../a-logo.svg";
import EmptyCart from "../EmptyCart.svg";
import CurrencyChangerDropDown from "./CurrencyChangerDropDown";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyChangerShow: false,
      cartCounter: 0,
    };
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
            <li className="active">
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Kids</a>
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
                <CurrencyChangerDropDown />
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

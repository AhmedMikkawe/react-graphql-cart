import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";

import Category from "./components/Category";
import Cart from "./components/Cart";
import ProductDescription from "./components/ProductDescription";
import CartOverlay from "./components/CartOverlay";

class App extends React.Component {
  currencies = [
    {
      label: "USD",
      symbol: "$",
    },
    {
      label: "GBP",
      symbol: "£",
    },
    {
      label: "AUD",
      symbol: "A$",
    },
    {
      label: "JPY",
      symbol: "¥",
    },
    {
      label: "RUB",
      symbol: "₽",
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      currency: this.currencies[0],
      showCartOverlay: false,
      numberOfCartItems: 1,
    };
    this.showCartOverlay = this.showCartOverlay.bind(this);
    this.onCurrencyChange = this.onCurrencyChange.bind(this);
  }
  showCartOverlay() {
    this.state.showCartOverlay
      ? this.setState({ showCartOverlay: false })
      : this.setState({ showCartOverlay: true });
  }
  onCurrencyChange(data) {
    let currency = this.currencies.filter(function (item) {
      return item.label === data;
    });
    this.setState({
      currency: currency[0],
    });
  }
  render() {
    return (
      <div>
        <Navbar
          currency={this.state.currency}
          onCurrencyChange={this.onCurrencyChange}
          currencies={this.currencies}
          numberOfCartItems={this.state.numberOfCartItems}
          showCartOverlay={this.showCartOverlay}
        />
        <CartOverlay
          currency={this.state.currency}
          showCartOverlay={this.showCartOverlay}
          numberOfCartItems={this.state.numberOfCartItems}
          show={this.state.showCartOverlay}
        />
        <Switch>
          <Route exact path="/">
            <Redirect to="/category/all" />
          </Route>
          <Route exact path="/category/:name" component={Category} />

          <Route path="/product/:slug">
            <ProductDescription />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;

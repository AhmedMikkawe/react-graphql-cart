import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";

import Category from "./components/Category";
import Cart from "./components/Cart";
import ProductDescription from "./components/ProductDescription";
import CartOverlay from "./components/CartOverlay";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
      currency: {
        label: "USD",
        symbol: "$",
      },
      showCartOverlay: false,
      numberOfCartItems: 1,
    };
    this.showCartOverlay = this.showCartOverlay.bind(this);
    this.onCurrencyChange = this.onCurrencyChange.bind(this);
  }
  componentDidMount() {
    axios
      .post("http://localhost:4000/", {
        query: `query currencies {
      currencies {
        label,
        symbol
      }
    }
    `,
      })
      .then((response) => {
        this.setState({ currencies: response.data.data.currencies });
      });
  }
  showCartOverlay() {
    this.state.showCartOverlay
      ? this.setState({ showCartOverlay: false })
      : this.setState({ showCartOverlay: true });
  }
  onCurrencyChange(data) {
    let currency = this.state.currencies.find(function (item) {
      return item.label === data;
    });
    this.setState({
      currency: currency,
    });
  }
  render() {
    return (
      <div>
        <Navbar
          currency={this.state.currency}
          onCurrencyChange={this.onCurrencyChange}
          currencies={this.state.currencies}
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
          <Route exact path="/category/:name">
            <Category currency={this.state.currency} />
          </Route>

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

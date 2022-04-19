import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";

import Category from "./components/Category";
import Cart from "./components/Cart";
import ProductDescription from "./components/ProductDescription";
import CartOverlay from "./components/CartOverlay";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCartOverlay: false,
      numberOfCartItems: 1,
    };
    this.showCartOverlay = this.showCartOverlay.bind(this);
  }
  showCartOverlay() {
    this.state.showCartOverlay
      ? this.setState({ showCartOverlay: false })
      : this.setState({ showCartOverlay: true });
  }
  render() {
    return (
      <div>
        <Navbar
          numberOfCartItems={this.state.numberOfCartItems}
          showCartOverlay={this.showCartOverlay}
        />
        <CartOverlay
          showCartOverlay={this.showCartOverlay}
          numberOfCartItems={this.state.numberOfCartItems}
          show={this.state.showCartOverlay}
        />
        <Switch>
          <Route exact path="/">
            <Redirect to="/category/women" />
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

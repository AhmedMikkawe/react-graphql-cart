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
      numberOfItemCount: 1,
    };
    this.showCartOverlay = this.showCartOverlay.bind(this);
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
          numberOfItemCount={this.state.numberOfItemCount}
          showCartOverlay={this.showCartOverlay}
          numberOfCartItems={this.state.numberOfCartItems}
          show={this.state.showCartOverlay}
          increaseNumberOfItemCount={this.increaseNumberOfItemCount}
          decreaseNumberOfItemCount={this.decreaseNumberOfItemCount}
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

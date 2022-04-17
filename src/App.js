import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";

import Category from "./components/Category";
import ProductDescription from "./components/ProductDescription";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/category/women" />
          </Route>
          <Route exact path="/category/:name" component={Category} />

          <Route path="/product/:slug">
            <ProductDescription />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;

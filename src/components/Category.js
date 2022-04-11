import React from "react";
import { withRouter } from "react-router";
import ProductOverview from "./ProductOverview";

class Category extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    // <h3>Category name {this.props.match.params.name}</h3>
    return (
      <div className="container" style={{ margin: "0 2rem" }}>
        <h4>Category Name</h4>
        <div className="category-products-list">
          <ProductOverview />
          <ProductOverview />
          <ProductOverview />
          <ProductOverview />
          <ProductOverview />
          <ProductOverview />
        </div>
      </div>
    );
  }
}

export default withRouter(Category);

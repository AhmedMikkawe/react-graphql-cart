import React from "react";
import { withRouter } from "react-router";
import ProductOverview from "./ProductOverview";
import imgUrl from "../product-image.jpg";

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
          <ProductOverview
            slug="1"
            image={imgUrl}
            productName="Apollo Running Short"
            productPrice="50.00"
          />
          <ProductOverview
            slug="2"
            image={imgUrl}
            productName="Apollo Running Short"
            productPrice="50.00"
          />
          <ProductOverview
            slug="3"
            image={imgUrl}
            productName="Apollo Running Short"
            productPrice="50.00"
          />
          <ProductOverview
            slug="4"
            image={imgUrl}
            productName="Apollo Running Short"
            productPrice="50.00"
          />
          <ProductOverview
            slug="5"
            image={imgUrl}
            productName="Apollo Running Short"
            productPrice="50.00"
          />
          <ProductOverview
            slug="6"
            image={imgUrl}
            productName="Apollo Running Short"
            productPrice="50.00"
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Category);

import React from "react";
import { withRouter } from "react-router";

class Category extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return <h3>Category name {this.props.match.params.name}</h3>;
  }
}

export default withRouter(Category);

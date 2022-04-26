import React from "react";
import { withRouter } from "react-router";
import ProductOverview from "./ProductOverview";
import axios from "axios";
class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: "",
          name: "",
          inStock: true,
          gallery: [""],
          description: "",
          category: "",
          prices: [
            {
              currency: {
                label: "USD",
                symbol: "$",
              },
              amount: 144.69,
            },
          ],
          brand: "",
          attributes: [
            {
              id: "Size",
              name: "Size",
              type: "text",
              items: [
                {
                  displayValue: "40",
                  value: "40",
                  id: "40",
                },
                {
                  displayValue: "41",
                  value: "41",
                  id: "41",
                },
                {
                  displayValue: "42",
                  value: "42",
                  id: "42",
                },
                {
                  displayValue: "43",
                  value: "43",
                  id: "43",
                },
              ],
            },
          ],
        },
      ],
    };
  }
  componentDidMount() {
    axios
      .post("http://localhost:4000/", {
        query: `query category {
          category(input:{title:"${this.props.match.params.name}"}) {
            name,
            products{
              id,
              name,
              inStock,
              gallery,
              description,
              category,
              attributes{
                id,
                name,
                type,
                items{
                  displayValue,
                  value,
                  id
                }
              },
              prices{
                currency{
                  label,
                  symbol
                },
                amount
              },
              brand
            }
          }
        }
    `,
      })
      .then((response) => {
        this.setState({ products: response.data.data.category.products });
      });
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.name !== prevProps.match.params.name) {
      axios
        .post("http://localhost:4000/", {
          query: `query category {
          category(input:{title:"${this.props.match.params.name}"}) {
            name,
            products{
              id,
              name,
              inStock,
              gallery,
              description,
              category,
              attributes{
                id,
                name,
                type,
                items{
                  displayValue,
                  value,
                  id
                }
              },
              prices{
                currency{
                  label,
                  symbol
                },
                amount
              },
              brand
            }
          }
        }
    `,
        })
        .then((response) => {
          this.setState({ products: response.data.data.category.products });
        });
    }
  }
  render() {
    return (
      <div className="container" style={{ margin: "0 2rem" }}>
        <h3>Category {this.props.match.params.name}</h3>
        <div className="category-products-list">
          {this.state.products.map(function (product) {
            return (
              <ProductOverview
                product={product}
                key={product.id}
                currency={this.props.currency}
              />
            );
          }, this)}
        </div>
      </div>
    );
  }
}

export default withRouter(Category);

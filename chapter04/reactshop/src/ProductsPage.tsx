import React from "react";
import { IProduct, products } from "./ProducesData";

interface IState {
  products: IProduct[];
}

class ProductPage extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      products: [],
    };
  }

  /**
   *  componenetDidMount
   */
  public componentDidMount() {
    this.setState({ products });
  }

  /**
   * render
   */
  public render() {
    return (
      <div className="page-container">
        <p>
          Welcome to React Shop where you can get all your tools for ReactJS!
        </p>

        <ul className="product-list">
          {this.state.products.map((product) => (
            <li key={product.id} className="product-list-item">
              {product.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductPage;

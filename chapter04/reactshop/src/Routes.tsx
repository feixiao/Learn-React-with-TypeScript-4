import { BrowserRouter as Router, Route } from "react-router-dom";
import * as React from "react";
import AdminPage from "./AdminPage";
import ProductsPage from "./ProductsPage";
import Header from "./Header";

const Routes: React.FunctionComponent = () => {
  return (
    <Router>
      <div>
        <Header></Header>
        <Route path="/products" component={ProductsPage} />
        <Route path="/admin" component={AdminPage} />
      </div>
    </Router>
  );
};

export default Routes;

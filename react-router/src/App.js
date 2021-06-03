import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./components/Welcome";
import Products from "./components/Products";
import MainHeader from "./components/MainHeader";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

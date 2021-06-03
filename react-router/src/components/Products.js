import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      {" "}
      |
      <ul>
        <li>
          <Link to="/products/p1">A book</Link>
        </li>
        <li>
          <Link to="/products/p2">A carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">A tv</Link>
        </li>
      </ul>
      <h1>The Products Page</h1>
    </section>
  );
};

export default Products;

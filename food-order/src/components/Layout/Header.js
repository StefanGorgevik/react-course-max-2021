import React, { Fragment } from "react";
import classes from "./Header.module.css";

const Header = (props) => {
  return <Fragment>
      <header className={classes.header}>
          <h1>ReactMeals</h1>
          <button>Cart</button>
      </header>
      <div>
        <img />
      </div>
  </Fragment>;
};

export default Header;

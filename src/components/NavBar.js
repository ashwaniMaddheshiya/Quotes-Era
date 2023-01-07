import React, { Fragment } from "react";
import classes from "./NavBar.module.css";
import quoteImg from '../qimg.png';

const NavBar = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img src={quoteImg} alt="Q-Era" />
      </header>
    </Fragment>
  );
};

export default NavBar;

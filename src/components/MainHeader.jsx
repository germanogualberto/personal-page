import { Component } from "react";
import { Link } from "react-router-dom";
import { MdPostAdd, MdMessage } from "react-icons/md";

import classes from "./MainHeader.module.css";

class MainHeader extends Component {
  render() {
    return (
      <header className={classes.header}>
        <h1 className={classes.logo}>
          <MdMessage />
          Personal Page
        </h1>
        <p>
          <Link to="/" className={classes.button}>
            <MdPostAdd size={18} />
            Do something
          </Link>
        </p>
      </header>
    );
  }
}

export default MainHeader;

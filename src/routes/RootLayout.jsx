import { Component } from "react";
import { Outlet } from "react-router-dom";

import MainHeader from "../components/MainHeader";

class RootLayout extends Component {
  render() {
    return (
      <>
        <MainHeader />
        <Outlet />
      </>
    );
  }
}

export default RootLayout;

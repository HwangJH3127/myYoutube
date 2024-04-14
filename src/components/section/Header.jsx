import React from "react";

import Logo from "../header/Logo";
import Sns from "../header/Sns";
import Menu from "../header/Menu";

const Header = () => {
  return (
    <header id="header" role="banner">
      <Logo />
      <Menu />
      <Sns />
    </header>
  );
};

export default Header;

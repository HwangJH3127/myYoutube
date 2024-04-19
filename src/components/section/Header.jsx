import React, { useState } from "react";

import Logo from "../header/Logo";
import Sns from "../header/Sns";
import Menu from "../header/Menu";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const toogleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };
  return (
    <header id="header" role="banner" className={isMenuActive ? "active" : ""}>
      <Logo toggleMenu={toogleMenu} />
      <Menu />
      <Sns />
    </header>
  );
};

export default Header;

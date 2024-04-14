import React from "react";
import { Link, useLocation } from "react-router-dom";
import { headerMenus, searchKeyword } from "../../data/header";

const Menu = () => {
  const location = useLocation();
  console.log(location);
  return (
    <nav className="header__menu">
      <ul className="menu">
        {headerMenus.map((menu, key) => (
          <li
            key={key}
            className={location.pathname === menu.src ? "active" : ""}
          >
            <Link to={menu.src}>
              {menu.icon} {menu.title}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="keyword">
        {searchKeyword.map((search, key) => (
          <li
            key={key}
            className={location.pathname === search.src ? "active" : ""}
          >
            <Link to={search.src}>{search.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;

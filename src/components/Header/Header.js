import React from "react";
import "./Header.css";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <Link
        className={
          location.pathname === "/" ? "header-link active" : "header-link"
        }
        to="/"
      >
        <span>MENU</span>
      </Link>
      <Link
        className={
          location.pathname === "/orders" ? "header-link active" : "header-link"
        }
        to="/orders"
      >
        <span>ORDERS</span>
      </Link>
    </header>
  );
};

export default Header;

import React from "react";
import "./header.sass";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <h2>BLOG ARENA</h2>
          <p>Create & Share</p>
          <div className="header-btns-wrapper">
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

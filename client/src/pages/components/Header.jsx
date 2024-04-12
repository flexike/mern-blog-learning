import React from "react";
import "./header.sass";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <h2>BLOG ARENA</h2>
          <p>Create & Share</p>
          <div className="header-btns-wrapper">
            <a href="/register">Register</a>
            <a href="/login">Login</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

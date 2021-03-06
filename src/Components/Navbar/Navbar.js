import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="custom-nav">
      <nav className="container d-flex justify-content-between">
        <div className="d-inline">
          <h1 className="font-weight-bold">Aircnc</h1>
        </div>
        <div className="d-inline">
          <a href="/">Host your home</a>
          <a href="/">Host your experience</a>
          <a href="/">Help</a>
          <Link to="/login"><a href>Log in</a></Link>
          <a href="/" id="my-btn">Sign up</a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

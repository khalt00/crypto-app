import icon from "../../images/cryptocurrency.png";
import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar">
      <div className="logo-container">
        <a className="navbar-brand" href="#">
          <img
            src={icon}
            alt="logo"
            className="logo__img d-inline-block align-text-left "
          />
          Cryptoverse
        </a>
      </div>
      <hr></hr>
      <div className="nav nav-pills flex-column mb-auto">
        <div className="nav-item">
          <Link className="nav-link" to="/">
            <i className="bi bi-house"></i>
            Home
          </Link>
        </div>

        <div className="nav-item">
          <Link className="nav-link" to="/Currencies">
            <i className="bi bi-currency-bitcoin"></i>
            Currencies
          </Link>
        </div>

        <div className="nav-item">
          <Link className="nav-link" to="/Exchanges">
            <i className="bi bi-currency-exchange"></i>Exchange
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to="/News">
            <i className="bi bi-currency-exchange"></i>News
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;

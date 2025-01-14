import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export const Header = (props) => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-md mt-3">
        <NavLink className="navbar-brand mx-5 text-light" to="/">
          <h1 className=""><span>G</span>aurav</h1>
        </NavLink>
        <button
          className="navbar-toggler bg-primary"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end mx-5" id="navbarSupportedContent">
          <ul className="navbar-nav h4 gap-5">
          <li className="nav-item active">
              <NavLink className="nav-link text-primary" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link text-primary" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link text-primary" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link text-primary" to="/projects">
                Projects
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

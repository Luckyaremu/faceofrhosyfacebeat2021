import React from "react";
import { Link } from "react-router-dom";
import Star from '../assets/star.svg';

export default function header(props) {
  return (
    <header>
      <nav
        className="navbar"
      >
        <div className="logo-container">
          <img className="logo" src={Star} />
          <h3>FACE OF RHOSYFACEBEAT 2021</h3>
        </div>
        <div className="form-inline">
          <Link to="" className="btn btn-outline-success" type="button">
            Register
          </Link>
          <Link to="" className="btn btn-outline-primary" type="button">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}

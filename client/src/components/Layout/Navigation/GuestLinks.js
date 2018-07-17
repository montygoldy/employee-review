import React from "react";
import { Link } from "react-router-dom";

const GuestLinks = () => (
  <ul className="flexFit nav__list">
    <li className="nav__item">
      <Link className="nav__link button" to="/login">
        <i className="fas fa-sign-in-alt"> </i>
        Login
      </Link>
    </li>
    <li className="nav__item">
      <Link className="nav__link button" to="/register">
        <i className="fas fa-sign-up-alt"> </i>
        Register
      </Link>
    </li>
  </ul>
);

export default GuestLinks;

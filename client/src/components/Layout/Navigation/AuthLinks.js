import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AuthLinks = ({ user, logout }) => {
  return (
    <ul className="flexFit nav__list">
      <li className="nav__item">
        <span className="username">{user.name}</span>
      </li>
      {user.isAdmin && (
        <li className="nav__item">
          <Link className="nav__link button" to="/dashboard">
            <i className="fas fa-sign-in-alt"> </i>
            Dashboard
          </Link>
        </li>
      )}
      <li className="nav__item">
        <Link className="nav__link button" to="/review">
          <i className="fas fa-sign-in-alt"> </i>
          Review
        </Link>
      </li>
      <li className="nav__item">
        <button className="nav__link button" onClick={logout}>
          <i className="fas fa-sign-out-alt" />
          Logout
        </button>
      </li>
    </ul>
  );
};

AuthLinks.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

export default AuthLinks;

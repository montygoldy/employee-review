import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/Actions/authActions";

class Header extends Component {
  logoutHandle = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    // After Login Menu
    const authLinks = (
      <ul className="flexFit">
        <li className="header__nav-item">
          <span className="username">{user.name}</span>
        </li>
        {user.isAdmin && (
          <li className="header__nav-item">
            <Link className="header__nav-link button" to="/dashboard">
              <i className="fas fa-sign-in-alt"> </i>
              Dashboard
            </Link>
          </li>
        )}
        <li className="header__nav-item">
          <Link className="header__nav-link button" to="/review">
            <i className="fas fa-sign-in-alt"> </i>
            Review
          </Link>
        </li>
        <li className="header__nav-item">
          <button
            className="header__nav-link button"
            onClick={this.logoutHandle}
          >
            <i className="fas fa-sign-out-alt" />
            Logout
          </button>
        </li>
      </ul>
    );

    //Before Login Menu
    const guestLinks = (
      <ul className="flexFit">
        <li className="header__nav-item">
          <Link className="header__nav-link button" to="/login">
            <i className="fas fa-sign-in-alt"> </i>
            Login
          </Link>
        </li>
        <li className="header__nav-item">
          <Link className="header__nav-link button" to="/register">
            <i className="fas fa-sign-up-alt"> </i>
            Register
          </Link>
        </li>
      </ul>
    );

    return (
      <header className="header">
        <div className="container flexFit">
          <div className="header__title">
            <h1>Logo</h1>
          </div>
          <nav className="header__nav">
            {isAuthenticated ? authLinks : guestLinks}
          </nav>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Header);

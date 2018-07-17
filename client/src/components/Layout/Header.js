import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/Actions/authActions";
import { persistor } from "../../redux/Store";
import GuestLinks from "./Navigation/GuestLinks";
import AuthLinks from "./Navigation/AuthLinks";

class Header extends Component {
  state = {
    SideDrawerOpen: false
  };

  // Responsive nav methods
  sideDrawerToggle = () => {
    this.setState(prevState => ({
      SideDrawerOpen: !prevState.SideDrawerOpen
    }));
  };

  logoutHandle = e => {
    e.preventDefault();
    this.props.logoutUser();
    persistor.purge();
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const { SideDrawerOpen } = this.state;
    let openClass;
    if (SideDrawerOpen) {
      openClass = "open";
    }
    return (
      <header className="header">
        <div className="container flexFit">
          <div className="header__title">
            <h1>Logo</h1>
          </div>
          <nav className="nav flexFit">
            <div className={`navigation  ${openClass}`}>
              {isAuthenticated ? (
                <AuthLinks user={user} logout={this.logoutHandle} />
              ) : (
                <GuestLinks />
              )}
            </div>

            <div className="nav__toggle">
              <button className="toggle-button" onClick={this.sideDrawerToggle}>
                <div className="toggle-button-line"> </div>
                <div className="toggle-button-line"> </div>
                <div className="toggle-button-line"> </div>
              </button>
            </div>
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

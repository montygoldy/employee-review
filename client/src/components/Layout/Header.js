import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    // //After Login Menu
    // const guestLinks = (
    //   <ul className="flexFit">
    //     <li className="header__nav-item">
    //       <span>Monty</span>
    //     </li>
    //     <li className="header__nav-item">
    //       <button>
    //         <i className="fas fa-sign-out-alt" />
    //         Logout
    //       </button>
    //     </li>
    //   </ul>
    // );

    //Before Login Menu
    const authLinks = (
      <ul className="flexFit">
        <li className="header__nav-item">
          <Link className="header__nav-link button" to="/register">
            <i className="fas fa-user-plus"> </i>
            Sign Up
          </Link>
        </li>
        <li className="header__nav-item">
          <Link className="header__nav-link button" to="/login">
            <i className="fas fa-sign-in-alt"> </i>
            Login
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
          <nav className="header__nav">{authLinks}</nav>
        </div>
      </header>
    );
  }
}

export default Header;

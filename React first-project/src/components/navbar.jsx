import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle";

class Navbar extends Component {
  state = {};

  render() {
    const { user } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            HomePage
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-item nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                {user && user.biz && (
                  <NavLink className="nav-item nav-link" to="/my-cards">
                    My Cards
                  </NavLink>
                )}
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              {!user && (
                <React.Fragment>
                  <li className="nav-item">
                    <NavLink className="nav-item nav-link" to="/signin">
                      Sign-in
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-item nav-link" to="/signup">
                      Sign-up
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-item nav-link" to="/biz-signup">
                      Business
                    </NavLink>
                  </li>
                </React.Fragment>
              )}
              {user && (
                <React.Fragment>
                  <li className="nav-item ">
                    {user && user.biz && (
                      <NavLink className="nav-item nav-link" to="/create-card">
                        Create New Card
                      </NavLink>
                    )}
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-item nav-link" to="/logout">
                      Logout
                    </NavLink>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { CustomNavbar } from "./navbar.style"

import AuthContext from "../../context/auth.provider";

const Navbar: React.FC = () => {
  const authContext = useContext(AuthContext);
  const { user, logout } = authContext;

  return (
    <CustomNavbar className="navbar custom-navbar navbar-expand-lg navbar-dark bg-dark fw-bolder">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {process.env.REACT_APP_NAME}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-collapse"
          aria-controls="navbar-collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-collapse">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Features
              </Link>
            </li>
            <li className="nav-item">
              {user ? (
                <span
                  className="nav-link pointer"
                  onClick={() => {
                    logout();
                  }}
                >
                  Sign Out
                </span>
              ) : (
                <Link className="nav-link" to="/login">
                  Sign In
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </CustomNavbar>
  );
};

export default Navbar;

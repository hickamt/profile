// import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

// Bootstrap 5 Nav Docs: https://getbootstrap.com/docs/5.0/components/navbar/
const Layout = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <Link className="nav-link" to="/">
            <img src="initials.png" alt="Initials T H" width="40" height="40" />
          </Link>
          <button
            className="navbar-toggler"
            id="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link active" to="/projects">
                  Projects
                </Link>
              </li>
              {/* <li className="nav-item active">
                <Link className="nav-link" to="/hobbies">
                  Hobbies
                </Link>
              </li> */}
              <li className="nav-item active">
                <Link className="nav-link" to="/resume">
                  Resume
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />

      {/* Footer */}
      {/* <footer className="footer py-3 bg-light font-dark fixed-bottom">
        <div className="container text-center fs-6">
          <span className="text-dark">Todd Hickam | PSU Winter 2023</span>
        </div>
      </footer> */}
    </>
  );
};

export default Layout;

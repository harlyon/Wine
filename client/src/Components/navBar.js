import React from "react";
import img from "../Images/logo.webp";

const navBar = () => {
  return (
    <div>
      <div className="header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <a href="index.html" className="site-logo">
                <img src={img} alt="img" className="img-fluid" />
              </a>
            </div>
            <a
              href="/"
              className="mx-auto d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"
            >
              <span className="icon-menu h3" />
            </a>
          </div>
        </div>
        <div
          className="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block"
          role="banner"
        >
          <div className="container">
            <div className="d-flex align-items-center">
              <div className="mx-auto">
                <nav
                  className="site-navigation position-relative text-left"
                  role="navigation"
                >
                  <ul className="site-menu main-menu js-clone-nav mx-auto d-none pl-0 d-lg-block border-none">
                    <li>
                      <a href="/" className="nav-link text-left">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="products" className="nav-link text-left">
                        Products
                      </a>
                    </li>
                    <li>
                      <a href="/login" className="nav-link text-left">
                        Login
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default navBar;

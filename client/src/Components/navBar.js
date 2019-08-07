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
          </div>
        </div>
        <nav class="navbar navbar-expand-md bg-transparent navbar-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse mx-auto justify-content-md-center"
            id="collapsibleNavbar"
          >
            <ul class="navbar-nav col-md-auto main-menu js-clone-nav border-none">
              <li>
                <a class="nav-link text-left" href="/">
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link text-left" href="/products">
                  Product
                </a>
              </li>
              <li>
                <a class="nav-link text-left" href="/">
                  Blog
                </a>
              </li>
              <li>
                <i
                  className="fa fa-cart-arrow-down snipcart-checkout snipcart-summary btn-danger"
                  style={{ padding: "10px" }}
                  aria-hidden="true"
                >
                  (<span className="snipcart-total-items"></span>)
                </i>
              </li>
            </ul>
          </div>
        </nav>
        {/* <div
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
                      <a href="/" className="nav-link text-left">
                        Blog
                      </a>
                    </li>
                    <li>
                      <i
                        className="fa fa-cart-arrow-down snipcart-checkout snipcart-summary btn-danger"
                        style={{ padding: "10px" }}
                        aria-hidden="true"
                      >
                        (<span className="snipcart-total-items"></span>)
                      </i>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default navBar;

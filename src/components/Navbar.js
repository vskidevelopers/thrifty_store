import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header className="header bg-white">
        <div className="container px-0 px-lg-3">
          <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0">
            <Link className="navbar-brand" to="index.html">
              <span className="font-weight-bold text-uppercase text-dark">
                Thifty Shop
              </span>
            </Link>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Product detail
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    id="pagesDropdown"
                    to="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </Link>
                  <div
                    className="dropdown-menu mt-3"
                    aria-labelledby="pagesDropdown"
                  >
                    <Link
                      className="dropdown-item border-0 transition-link"
                      to="#"
                    >
                      Homepage
                    </Link>
                    <Link
                      className="dropdown-item border-0 transition-link"
                      to="#"
                    >
                      Category
                    </Link>
                    <Link
                      className="dropdown-item border-0 transition-link"
                      to="detail.html"
                    >
                      Product detail
                    </Link>
                    <Link
                      className="dropdown-item border-0 transition-link"
                      to="#"
                    >
                      Shopping cart
                    </Link>
                    <Link
                      className="dropdown-item border-0 transition-link"
                      to="#"
                    >
                      Checkout
                    </Link>
                  </div>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    {" "}
                    <i className="fas fa-dolly-flatbed mr-1 text-gray"></i>Cart
                    <small className="text-gray">(2)</small>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    {" "}
                    <i className="fa fa-heart mr-1"></i>
                    <small className="text-gray"> (0)</small>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    {" "}
                    <i className="fas fa-user-alt mr-1 text-gray"></i>Login
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

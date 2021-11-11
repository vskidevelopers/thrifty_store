import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <div className="bg-dark text-white">
      <div className="container py-4">
        <div className="row py-5">
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="text-uppercase mb-3">Customer services</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <Link className="footer-link" to="#">
                  Help &amp; Contact Us
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Returns &amp; Refunds
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Online Stores
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h6 className="text-uppercase mb-3">Thrifty Shop</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <Link className="footer-link" to="#">
                  What We Do
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Available Services
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Latest Posts
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="text-uppercase mb-3">Social media</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <Link className="footer-link" to="">
                  Twitter
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="">
                  Instagram
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="">
                  Tumblr
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="">
                  Pinterest
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

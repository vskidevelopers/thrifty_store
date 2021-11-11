import React from "react";
import { Link } from "react-router-dom";
import background from "../images/home/banner.jpg";

import "./Hero.css";

function HeroBanner() {
  return (
    <div className="container">
      <section
        className="hero pb-3 bg-cover bg-center d-flex align-items-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container py-5">
          <div className="row px-4 px-lg-5">
            <div className="col-lg-6">
              <p class="text-muted small text-uppercase mb-2">
                New Inspiration 2020
              </p>
              <h1 className="h2 text-uppercase mb-3">20% off on new season</h1>
              <Link className="btn btn-dark" to="#">
                Browse collections
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroBanner;

import React from "react";
import cat1 from "../images/cat-1.png";
import cat2 from "../images/cat-2.jpg";
import cat3 from "../images/cat-3.jpg";
import cat4 from "../images/cat-4.jpg";

import "./Categories.css";
function Categories() {
  return (
    <div className="container pt-5">
      <header className="text-center">
        <p className="small text-muted text-uppercase mb-1">
          Our Perfect Collection
        </p>
        <h2 className="h5 text-uppercase mb-4">Browse our categories</h2>
      </header>
      <div className="row">
        <div className="col-md-4 mb-4 mb-md-0">
          <a href="" className="category-item">
            <img src={cat1} alt="" className="img-fluid" />
            <strong className="category-item-title">Shirts</strong>
          </a>
        </div>

        <div className="col-md-4 mb-4 mb-md-0">
          <a href="" className="category-item mb-4">
            <img src={cat2} alt="" className="img-fluid" />
            <strong className="category-item-title">Shoes</strong>
          </a>
          <a href="" className="category-item">
            <img src={cat4} alt="" className="img-fluid" />
            <strong className="category-item-title">Socks</strong>
          </a>
        </div>

        <div className="col-md-4">
          <a href="" className="category-item">
            <img src={cat3} alt="" className="img-fluid" />
            <strong className="category-item-title">Hoodies</strong>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Categories;

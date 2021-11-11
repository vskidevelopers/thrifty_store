import React from "react";
import { Link } from "react-router-dom";
import cat1 from "../images/home/cat-1.png";
import cat2 from "../images/home/cat-2.jpg";
import cat3 from "../images/home/cat-3.jpg";
import cat4 from "../images/home/cat-4.jpg";

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
          <Link href="" className="category-item">
            <img src={cat1} alt="" className="img-fluid" />
            <strong className="category-item-title">Shirts</strong>
          </Link>
        </div>

        <div className="col-md-4 mb-4 mb-md-0">
          <Link to="#" className="category-item mb-4">
            <img src={cat2} alt="" className="img-fluid" />
            <strong className="category-item-title">Shoes</strong>
          </Link>
          <Link to="#" className="category-item">
            <img src={cat4} alt="" className="img-fluid" />
            <strong className="category-item-title">Socks</strong>
          </Link>
        </div>

        <div className="col-md-4">
          <Link to="#" className="category-item">
            <img src={cat3} alt="" className="img-fluid" />
            <strong className="category-item-title">Hoodies</strong>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Categories;

import React from "react";
import { Link } from "react-router-dom";
import prod1 from "../images/home/prod1.png";
import prod2 from "../images/home/prod2.png";
import prod3 from "../images/home/prod3.jpg";
import prod4 from "../images/home/prod4.jpg";

import "./Trending.css";

function Trending() {
  return (
    <div className="container py-5">
      <header>
        <h2 className="h5 text-uppercase mb-4">Top Trends in Town</h2>
      </header>
      <div className="row">
        {/* PRODUCT 1 */}
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="product text-center">
            <div className="position-relative mb-3">
              <div className="badge text-white badge-"></div>
              <Link to="#" className="d-block">
                <img src={prod1} alt="" className="img-fluid w-100" />
              </Link>
              <div className="product-overlay">
                <ul className="mb-0 list-inline">
                  <li className="list-inline-item m-0 p-0">
                    <Link to="#" className="btn btn-sm btn-outline-dark">
                      <i className="fa fa-heart"></i>
                    </Link>
                    <li className="list-inline-item m-0 p-0">
                      <Link to="#" className="btn btn-sm btn-dark">
                        Add to cart
                      </Link>
                    </li>
                    <li className="list-inline-item mr-0">
                      <Link to="#" className="btn btn-sm btn-outline-dark">
                        <i className="fa fa-shopping-cart"></i>
                      </Link>
                    </li>
                  </li>
                </ul>
              </div>
            </div>
            <h6>
              <Link to="#" className="reset-anchor">
                Alpha Hoodies
              </Link>
            </h6>
            <p className="small text-muted"> $250</p>
          </div>
        </div>
        {/* PRODUCT 2 */}
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="product text-center">
            <div className="position-relative mb-3">
              <div className="badge text-white badge-"></div>
              <Link to="#" className="d-block">
                <img src={prod2} alt="" className="img-fluid w-100" />
              </Link>
              <div className="product-overlay">
                <ul className="mb-0 list-inline">
                  <li className="list-inline-item m-0 p-0">
                    <Link to="#" className="btn btn-sm btn-outline-dark">
                      <i className="fa fa-heart"></i>
                    </Link>
                    <li className="list-inline-item m-0 p-0">
                      <Link to="#" className="btn btn-sm btn-dark">
                        Add to cart
                      </Link>
                    </li>
                    <li className="list-inline-item mr-0">
                      <Link to="#" className="btn btn-sm btn-outline-dark">
                        <i className="fa fa-shopping-cart"></i>
                      </Link>
                    </li>
                  </li>
                </ul>
              </div>
            </div>
            <h6>
              <Link to="#" className="reset-anchor">
                Chanel T-shirts
              </Link>
            </h6>
            <p className="small text-muted"> $250</p>
          </div>
        </div>
        {/* PRODUCT 3 */}
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="product text-center">
            <div className="position-relative mb-3">
              <div className="badge text-white badge-"></div>
              <Link to="#" className="d-block">
                <img src={prod3} alt="" className="img-fluid w-100" />
              </Link>
              <div className="product-overlay">
                <ul className="mb-0 list-inline">
                  <li className="list-inline-item m-0 p-0">
                    <Link to="#" className="btn btn-sm btn-outline-dark">
                      <i className="fa fa-heart"></i>
                    </Link>
                    <li className="list-inline-item m-0 p-0">
                      <Link to="#" className="btn btn-sm btn-dark">
                        Add to cart
                      </Link>
                    </li>
                    <li className="list-inline-item mr-0">
                      <Link to="#" className="btn btn-sm btn-outline-dark">
                        <i className="fa fa-shopping-cart"></i>
                      </Link>
                    </li>
                  </li>
                </ul>
              </div>
            </div>
            <h6>
              <Link to="#" className="reset-anchor">
                Air Jordan Tshirts
              </Link>
            </h6>
            <p className="small text-muted"> $250</p>
          </div>
        </div>
        {/* PRODUCT 4 */}
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="product text-center">
            <div className="position-relative mb-3">
              <div className="badge text-white badge-"></div>
              <Link to="#" className="d-block">
                <img src={prod4} alt="" className="img-fluid w-auto" />
              </Link>
              <div className="product-overlay">
                <ul className="mb-0 list-inline">
                  <li className="list-inline-item m-0 p-0">
                    <Link to="#" className="btn btn-sm btn-outline-dark">
                      <i className="fa fa-heart"></i>
                    </Link>
                    <li className="list-inline-item m-0 p-0">
                      <Link to="#" className="btn btn-sm btn-dark">
                        Add to cart
                      </Link>
                    </li>
                    <li className="list-inline-item mr-0">
                      <Link to="#" className="btn btn-sm btn-outline-dark">
                        <i className="fa fa-shopping-cart"></i>
                      </Link>
                    </li>
                  </li>
                </ul>
              </div>
            </div>
            <h6>
              <Link to="#" className="reset-anchor">
                Denim Jackets
              </Link>
            </h6>
            <p className="small text-muted"> $250</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;

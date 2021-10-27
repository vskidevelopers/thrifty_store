import React from "react";
import prod1 from "../images/prod1.png";
import prod2 from "../images/prod2.png";
import prod3 from "../images/prod3.jpg";
import prod4 from "../images/prod4.jpg";

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
              <a href="" className="d-block">
                <img src={prod1} alt="" className="img-fluid w-100" />
              </a>
              <div className="product-overlay">
                <ul className="mb-0 list-inline">
                  <li className="list-inline-item m-0 p-0">
                    <a href="" className="btn btn-sm btn-outline-dark">
                      <i className="fa fa-heart"></i>
                    </a>
                    <li className="list-inline-item m-0 p-0">
                      <a href="" className="btn btn-sm btn-dark">
                        Add to cart
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a href="" className="btn btn-sm btn-outline-dark">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </li>
                </ul>
              </div>
            </div>
            <h6>
              <a href="" className="reset-anchor">
                Alpha Hoodies
              </a>
            </h6>
            <p className="small text-muted"> $250</p>
          </div>
        </div>
        {/* PRODUCT 2 */}
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="product text-center">
            <div className="position-relative mb-3">
              <div className="badge text-white badge-"></div>
              <a href="" className="d-block">
                <img src={prod2} alt="" className="img-fluid w-100" />
              </a>
              <div className="product-overlay">
                <ul className="mb-0 list-inline">
                  <li className="list-inline-item m-0 p-0">
                    <a href="" className="btn btn-sm btn-outline-dark">
                      <i className="fa fa-heart"></i>
                    </a>
                    <li className="list-inline-item m-0 p-0">
                      <a href="" className="btn btn-sm btn-dark">
                        Add to cart
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a href="" className="btn btn-sm btn-outline-dark">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </li>
                </ul>
              </div>
            </div>
            <h6>
              <a href="" className="reset-anchor">
                Chanel T-shirts
              </a>
            </h6>
            <p className="small text-muted"> $250</p>
          </div>
        </div>
        {/* PRODUCT 3 */}
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="product text-center">
            <div className="position-relative mb-3">
              <div className="badge text-white badge-"></div>
              <a href="" className="d-block">
                <img src={prod3} alt="" className="img-fluid w-100" />
              </a>
              <div className="product-overlay">
                <ul className="mb-0 list-inline">
                  <li className="list-inline-item m-0 p-0">
                    <a href="" className="btn btn-sm btn-outline-dark">
                      <i className="fa fa-heart"></i>
                    </a>
                    <li className="list-inline-item m-0 p-0">
                      <a href="" className="btn btn-sm btn-dark">
                        Add to cart
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a href="" className="btn btn-sm btn-outline-dark">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </li>
                </ul>
              </div>
            </div>
            <h6>
              <a href="" className="reset-anchor">
                Air Jordan Tshirts
              </a>
            </h6>
            <p className="small text-muted"> $250</p>
          </div>
        </div>
        {/* PRODUCT 4 */}
        <div className="col-xl-3 col-lg-4 col-sm-6">
          <div className="product text-center">
            <div className="position-relative mb-3">
              <div className="badge text-white badge-"></div>
              <a href="" className="d-block">
                <img src={prod4} alt="" className="img-fluid w-auto" />
              </a>
              <div className="product-overlay">
                <ul className="mb-0 list-inline">
                  <li className="list-inline-item m-0 p-0">
                    <a href="" className="btn btn-sm btn-outline-dark">
                      <i className="fa fa-heart"></i>
                    </a>
                    <li className="list-inline-item m-0 p-0">
                      <a href="" className="btn btn-sm btn-dark">
                        Add to cart
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a href="" className="btn btn-sm btn-outline-dark">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </li>
                </ul>
              </div>
            </div>
            <h6>
              <a href="" className="reset-anchor">
                Denim Jackets
              </a>
            </h6>
            <p className="small text-muted"> $250</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;

import React from "react";
import { Link } from "react-router-dom";

// import prod1 from "../images/shop/shop1.jpg";
// import prod2 from "../images/shop/shop2.png";
// import prod3 from "../images/shop/shop3.jpg";
// import prod4 from "../images/shop/shop4.png";

function Product(props) {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="product text-center">
        <div className="mb-3 position-relative">
          <div className="badge text-white badge-"></div>
          <Link className="d-block" to="#">
            <img className="img-fluid w-100" src={props.src} alt="..." />
          </Link>
          <div className="product-overlay">
            <ul className="mb-0 list-inline">
              <li className="list-inline-item m-0 p-0">
                <Link className="btn btn-sm btn-outline-dark" to="#">
                  <i className="fa fa-heart"></i>
                </Link>
              </li>
              <li className="list-inline-item m-0 p-0">
                <Link className="btn btn-sm btn-dark" to="#">
                  Add to cart
                </Link>
              </li>
              <li className="list-inline-item mr-0">
                <Link className="btn btn-sm btn-outline-dark" to="#">
                  <i className="fa fa-shopping-cart"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <h6>
          <Link className="reset-anchor" to="#">
            Tee shirt
          </Link>
        </h6>
        <p className="small text-muted">Ksh 2500</p>
      </div>
    </div>
  );
}

export default Product;

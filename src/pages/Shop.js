import React from "react";
import Navbar from "../components/Navbar";
import Shophero from "../components/Shophero";
import ShopSidebar from "../components/ShopSidebar";
import Shoplisting from "../components/Shoplisting";
import Product from "../components/Product";
import ProductPagination from "../components/ProductPagination";
import Footer from "../components/Footer";

// prop  images
import src1 from "../images/shop/shop1.jpg";
import src2 from "../images/shop/shop2.png";
import src3 from "../images/shop/shop3.jpg";
import src4 from "../images/shop/shop4.png";

import "./Shop.css";

function shop() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Shophero />
        <section className="py-5">
          <div className="container p-0">
            <div className="row">
              <ShopSidebar />
              <div className="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
                <Shoplisting />
                <div class="row">
                  <Product src={src1} />
                  <Product src={src2} />
                  <Product src={src3} />
                  <Product src={src4} />
                </div>
                <ProductPagination />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default shop;

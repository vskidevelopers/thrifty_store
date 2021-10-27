import React from "react";
import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import Categories from "../components/Categories";
import Trending from "../components/Trending";
import Services from "../components/Services";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import "./Landingpg.css";

function Landing_pg() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <Categories />
      <Trending />
      <Services />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Landing_pg;

import React from "react";

import Banner from "../components/Banner/Banner";
import PopularProducts from "../components/Allproducts/PopularProducts";
import "../App.css";
import TrendingProducts from "../components/Allproducts/TrendingProducts";
import AboutSeeraPrint from "../components/AboutSeeraPrint/AboutSeeraPrint";
import SingleBanner from "../components/Banner/SingleBanner";
import NewArrivalProducts from "../components/Allproducts/NewArrivalProducts";
import ExploreAllProducts from "../components/Allproducts/ExploreAllProducts";
import SeeraBanner from "../images/seerabanner1.jpg";
import SeeraBanner2 from "../images/seerabanner2.jpg";
import SupportCard from "../components/somecomponents/SupportCard";
import HomeCategory from "../components/HomeCategory/HomeCategory";

const Home = () => {
  return (
    <>
      <div
        className="container-fluid"
        style={{ paddingLeft: "0%", paddingRight: "0%" }}
      >
        <div>
          <Banner />
        </div>

        <div>
          <HomeCategory />
        </div>

        <div className="py-4">
          <PopularProducts />
        </div>

        <div className="py-4">
          <TrendingProducts />
        </div>

        <div className="py-4">
          <SingleBanner imgsrc={SeeraBanner} />
        </div>

        <div className="py-4">
          <NewArrivalProducts />
        </div>

        <div className="py-4">
          <ExploreAllProducts />
        </div>

        <div className="py-4">
          <SingleBanner imgsrc={SeeraBanner2} />
        </div>

        <div className="py-4">
          <AboutSeeraPrint />
        </div>

        <div>
          <SupportCard />
        </div>
      </div>
    </>
  );
};

export default Home;

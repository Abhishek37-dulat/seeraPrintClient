import React from "react";
import Slider from "react-slick";
import { PopularProductsData } from "../../ConstantData/PopularProductsData";
import Products from "./Products";

const NewArrivalProducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container-fluid">
      <h2 className="py-4" style={{ textAlign: "center" }}>
        <span style={{ color: "#138EDE" }}>New Arrival </span>Products
      </h2>
      <Slider {...settings}>
        {PopularProductsData.map((slide, index) => {
          return (
            <div key={index}>
              <Products imgSrc={slide.image} title={slide.title} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default NewArrivalProducts;

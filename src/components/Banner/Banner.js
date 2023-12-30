import React from "react";
import Banner1 from "../../images/bn11.jpg";
import Banner2 from "../../images/bn2.jpg";
import Banner3 from "../../images/bn3.jpg";
import Banner4 from "../../images/WEBSITE 123.jpg";

const Banner = () => {
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Banner1} className="d-block w-100" alt="bn1" />
          </div>
          <div className="carousel-item">
            <img src={Banner1} className="d-block w-100" alt="bn2" />
          </div>
          <div className="carousel-item">
            <img src={Banner1} className="d-block w-100" alt="bn3" />
          </div>
          <div className="carousel-item">
            <img src={Banner1} className="d-block w-100" alt="bn4" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Banner;

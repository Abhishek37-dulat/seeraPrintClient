import React from "react";
import { useNavigate } from "react-router-dom";
import Img999 from "../../images/img999.jpg";
import Button from "../somecomponents/Button";

const AboutSeeraPrint = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6">
            <img
              src={Img999}
              alt="img999"
              className="d-flex justify-content-center"
              style={{ height: "260px", width: "auto" }}
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6">
            <h3>Seera Print : Customisation Leader</h3>
            <p className="py-2" style={{ justifyContent: "center" }}>
              For more thhan 10 years, Seera Print has helped business owners,
              entrepreneurs, and individuals create their identities with custom
              designs and professional marketing. Our online printing services
              are intended to help you find high quality customised products you
              need - visiting cards, personlized clothing, gifting products and
              much more. Our wide selection of high quality products and online
              design tools make it easy for you to customize and order your
              favourite products.{" "}
            </p>
            <Button btn="Read More" link={() => navigate("/about-us")}></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSeeraPrint;

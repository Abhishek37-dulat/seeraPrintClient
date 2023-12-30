import React from "react";
import { Link } from "react-router-dom";
import Image9 from "../images/404-ghost.png";
import LargeButton from "../components/somecomponents/LargeButton";

const NotFoundPage = () => {
  return (
    <>
      <div className="container">
        <div className="row py-4 ">
          <div
            className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 "
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={Image9}
              alt="notfoundpage"
              style={{
                width: "140px",
                height: "140px",
              }}
            />
          </div>
          <div className="row py-4 ">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
              <h1 style={{ textAlign: "center" }}>
                Boo. That page didn’t turn up – but we’re here to help.
              </h1>
            </div>
          </div>
          <div className="row py-4 ">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
              <div className="text-center">
                <Link to="/">
                  <LargeButton btn="Go To Home Page" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row py-4 ">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
              <div className="text-center">
                <p style={{ fontSize: "18px" }}>
                  <span style={{ fontWeight: 600 }}>Need help?</span> Call us at
                  02522-669393 -- Mon. – Sat. 10 AM – 7 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;

import React from "react";
import "./banner.css";

const SingleBanner = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div
            className="single-banner"
            style={{
              backgroundSize: "cover",
              width: "100%",
              maxWidth: "100%",
              height: "auto",
              textAlign: "center",
            }}
          >
            <img src={props.imgsrc} alt="banner2" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBanner;

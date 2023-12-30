import React from "react";
import D from "../../images/d.svg";
import "./dashboard.css";

const MyDigitalMarketing = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
            <h2 style={{ fontWeight: "600" }}>My Digital Marketing</h2>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
            <div className="card" style={{ background: "#F8F8F8" }}>
              <div
                className=""
                style={{ padding: "60px 0px", textAlign: "center" }}
              >
                <img
                  src={D}
                  alt="d"
                  style={{ width: "100%", height: "130px" }}
                />

                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                  }}
                >
                  You don't have any digital projects yet
                </span>
                <br />
                <span>When you start one, it will appear here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyDigitalMarketing;

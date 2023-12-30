import React from "react";
import Tshirt from "../../images/tshirt9.png";
import { Link } from "react-router-dom";

const Thankyou = () => {
  return (
    <>
      <div className="container py-4">
        <div className="text-center">
          <h1>ThankYou for your Order!</h1>
          <div className="card mx-4">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <img
                  src={Tshirt}
                  alt="my tshirt"
                  style={{ width: "200px", height: "180px" }}
                />
              </div>
              <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 align-items-start">
                <p>Products Name</p>
                <p>Products Quantity</p>
                <p>Products Price</p>
              </div>
            </div>
          </div>
          <h3 className="py-2">Your Order has been successfully submitted.</h3>
          <Link to="/">
            <button
              className="btn"
              style={{
                background: "#000",
                color: "#fff",
                fontWeight: "600",
              }}
            >
              Back Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Thankyou;

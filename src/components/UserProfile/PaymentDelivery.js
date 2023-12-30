import React from "react";
import "./paymentdelivery.css";

const PaymentDelivery = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
            <h2 style={{ fontWeight: "600" }}>Payment & Delivery</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 py-4">
            <h4 style={{ fontWeight: "600" }}>Saved Address</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
            <div className="card">
              <div className="address">
                <p
                  className="add-address"
                  style={{
                    padding: "80px 30px",
                    fontSize: "18px",
                    textAlign: "center",
                  }}
                >
                  + Add a new address
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
            <div className="card">
              <div className="saved-address">
                <span style={{ fontSize: "20px", fontWeight: 600 }}>
                  Bishnu Kumar
                </span>
                <br />
                <span style={{ fontSize: "18px" }}>Station Road, Tupkadih</span>
                <br />
                <span style={{ fontSize: "18px" }}>
                  Bokaro, Jharkhand 827010
                </span>
                <br />
                <span style={{ fontSize: "18px" }}>India</span>
                <br />
                <span style={{ fontSize: "18px" }}>+91 9123248063</span>
                <br />
                <span
                  style={{
                    fontSize: "18px",
                    position: "relative",
                    borderTopColor: "5px",
                  }}
                >
                  <u>Edit</u>
                </span>
                <span
                  className=""
                  style={{
                    fontSize: "18px",
                    marginLeft: "15px",
                    position: "relative",
                    borderTopColor: "5px",
                  }}
                >
                  <u>Remove</u>
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 py-4">
              <h4 style={{ fontWeight: "600" }}>Saved Payment</h4>
              <p>You haven’t saved any payments yet.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 py-2">
              <h4 style={{ fontWeight: "600" }}>GSTINs</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="card">
                <div className="add-gst">
                  <p
                    style={{
                      padding: "20px 20px",
                      fontSize: "18px",
                      textAlign: "center",
                    }}
                  >
                    {" "}
                    + Add a new GSTIN
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row py-2">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 py-2">
              <h4 style={{ fontWeight: "600" }}>Merchandise Credits</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <div className="card">
                <div className="credits">
                  <span style={{ color: "green", fontSize: "34px" }}>
                    ₹0.00
                  </span>
                  <br />
                  <span>Avialable Credits</span> <br />
                  <span>Transaction History</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentDelivery;

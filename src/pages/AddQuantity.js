import React from "react";
import Img9 from "../images/tshirt9.png";
import "./cart.css";
import Button from "../components/somecomponents/Button";
import { useNavigate } from "react-router-dom";

const AddQuantity = () => {
  const navigate = useNavigate();
  const handlePlaceOrder = () => {
    navigate("/cart");
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="content-quantity">
              <h2> Add Quantity</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div className="img-quantity">
              <img src={Img9} alt="tshirt" />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
            <div className="content-quantity">
              <p style={{ fontSize: "20px", fontWeight: 600 }}>
                Men's Embroidered Polo Tshirt
              </p>
              <span style={{ fontSize: "20px", fontWeight: 600 }}>
                ₹ 1000.00 for 2 Units
              </span>
              <br />
              <strike> ₹525.00</strike> {"   "}
              <span style={{ color: "green" }}>₹500.00 / unit</span>
              <br />
              <span style={{ color: "green", fontSize: "18px" }}>
                5% Volume Discount
              </span>
              <br />
              <span>No setup fee</span>
              <div className="row py-4">
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                  <span>Small</span>
                  <input
                    className="form-control form-control-lg"
                    style={{ border: "1px solid #000" }}
                    type="text"
                  ></input>
                </div>
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                  <span>Medium</span>
                  <input
                    className="form-control form-control-lg"
                    style={{ border: "1px solid #000" }}
                    type="text"
                  ></input>
                </div>
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                  <span>Large</span>
                  <input
                    className="form-control form-control-lg"
                    style={{ border: "1px solid #000" }}
                    type="text"
                  ></input>
                </div>
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                  <span>Extra Large</span>
                  <input
                    className="form-control form-control-lg"
                    style={{ border: "1px solid #000" }}
                    type="text"
                  ></input>
                </div>
              </div>
              <div className="d-flex flex-row-reverse py-4">
                <button
                  style={{
                    color: "#fff",
                    backgroundColor: "#138EDE",
                    padding: "10px 30px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    border: "none",
                    outline: "none",
                    boxShadow: "0px 0px 2px rgba(0,0,0,0.2)",
                  }}
                  onClick={() => handlePlaceOrder()}
                >
                  Add To Cart
                </button>
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    marginRight: "30px",
                  }}
                >
                  ₹ 1000.00{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddQuantity;

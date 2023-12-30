import React, { useState } from "react";
import "./cart.css";
import { BiDownArrowAlt } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import Img9 from "../images/tshirt9.png";
import Cartlogo from "../images/cartlogo.png";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [drop, setDrop] = useState(false);
  const [graphic, setGraphic] = useState(false);

  const handleDrop = (event) => {
    setDrop(true);
  };
  const handleGraphic = (event) => {
    setGraphic(true);
  };
  const handleCheckOut = () => {
    navigate("/my-accounts");
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ position: "relative", top: "10px" }}>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex">
            <h1> My Cart</h1>
            <span className="circleOrange">1</span>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <hr />
            <div className="card">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <p style={{ fontSize: "20px", fontWeight: 600 }}>
                    Men's Embroidered Polo T-Shirts
                  </p>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <p>
                    <u>Remove</u>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="cart-img">
                    <img src={Img9} alt="" />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <span style={{ fontSize: "18px" }}>Size: (M)2 </span>
                  <br />
                  <span style={{ fontSize: "18px" }}>
                    <u>Edit quantity and size</u>
                  </span>
                  <div className="accordion" id="accordionExample">
                    <div
                      className="card"
                      style={{
                        background: "#F8F8F8",
                        boxShadow: "none",
                        border: "none",
                        borderRadius: "0px",
                        padding: "20px",
                      }}
                    >
                      <div className="card-head" id="headingOne">
                        <p
                          className="mb-0"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                          style={{ cursor: "pointer", fontSize: "18px" }}
                        >
                          Selected Options +
                        </p>
                      </div>

                      <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          <span style={{ fontSize: "18px" }}>
                            Gender : Male
                          </span>
                          <br />
                          <span style={{ fontSize: "18px" }}>
                            Type: Embroidered
                          </span>
                          <br />
                          <span style={{ fontSize: "18px" }}>Color: White</span>
                          <br />
                          <span style={{ fontSize: "18px" }}>
                            Stock: Standard
                          </span>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <p style={{ fontSize: "18px", fontWeight: 600 }}>
                    Group Total
                  </p>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <p style={{ fontSize: "18px", fontWeight: 600 }}>₹ 1000.00</p>
                </div>
              </div>
            </div>

            <hr />
            <div className="row py-2">
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <img
                  src={Cartlogo}
                  alt="cart-logo"
                  style={{ padding: "10px 25px" }}
                />
              </div>
              <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                <p style={{ fontSize: "20px", fontWeight: 600 }}>
                  Graphic Design - Men's Embroidered Polo T-Shirts
                </p>
                <span className="d-flex flex-row" style={{ fontSize: "18px" }}>
                  Quantity 1
                </span>
                <span
                  className="d-flex flex-row-reverse"
                  style={{ fontSize: "18px" }}
                >
                  Remote
                </span>
                <hr />
                <br />
                <span
                  className="d-flex flex-row"
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                  onClick={handleGraphic}
                >
                  Selected Options
                </span>
                <span className="d-flex flex-row-reverse">
                  <BsPlusLg
                    size={18}
                    onClick={handleGraphic}
                    style={{ cursor: "pointer" }}
                  />
                </span>
                {graphic ? (
                  <>
                    <span>Graphic Design: Printed Product</span>
                    <span style={{ marginLeft: "30px", fontWeight: 500 }}>
                      {" "}
                      ₹ 300.00
                    </span>
                  </>
                ) : null}
                <hr />
                <br />
                <span className="d-flex flex-row" style={{ fontSize: "18px" }}>
                  Item Total
                </span>
                <span
                  className="d-flex flex-row-reverse"
                  style={{ fontSize: "18px", fontWeight: 600 }}
                >
                  ₹ 300.00
                </span>
                <hr />
              </div>
            </div>
          </div>
          <div
            className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"
            style={{ position: "relative" }}
          >
            <div
              className="py-4 card"
              style={{
                background: "#F8F8F8",
                boxShadow: "none",
                border: "none",
                borderRadius: "0px",
                padding: "20px",
              }}
            >
              <p style={{ fontSize: "20px", fontWeight: 600 }}>This Order</p>

              <span
                className="d-flex flex-row"
                style={{ fontSize: "16px", fontWeight: 600 }}
              >
                Item Subtotal
              </span>
              <span
                className="d-flex flex-row-reverse"
                style={{ fontSize: "20px", fontWeight: 600 }}
              >
                ₹1,300.00
              </span>
              <p
                onClick={handleDrop}
                style={{ cursor: "pointer", fontSize: "20px", fontWeight: 500 }}
              >
                Have a code? <BiDownArrowAlt />
              </p>
              {drop ? (
                <>
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Apply Code"
                        style={{ border: "1px solid #000" }}
                      ></input>
                    </div>

                    <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                      <button
                        style={{
                          background: "#fff",
                          color: "#000",
                          width: "110px",
                          height: "40px",
                          border: "1px solid #000",
                          borderRadius: "5px",
                        }}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </>
              ) : null}
              <br />
              <button
                style={{
                  background: "#000",
                  color: "#fff",
                  width: "340px",
                  height: "60px",
                  border: "1px solid #000",
                  borderRadius: "50px",
                  alignSelf: "center",
                }}
                onClick={() => handleCheckOut()}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

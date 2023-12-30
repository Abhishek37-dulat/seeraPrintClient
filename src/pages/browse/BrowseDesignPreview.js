import React from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Tshirt from "../../images/tshirt2.png";
import "./browse.css";

const BrowseDesignPreview = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Design Preview
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div>
                  <img
                    src={Tshirt}
                    alt="my tshirt"
                    className="mx-auto d-flex justify-content-center flex-wrap"
                    style={{ width: "75%", height: "460px" }}
                  />
                  <div
                    className="mx-auto d-flex justify-content-center flex-wrap"
                    style={{ marginTop: "5px" }}
                  >
                    <button className="smallbtn">Front</button>
                    <button className="smallbtn">Back</button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className=" justify-content-end ">
                  <p style={{ fontSize: "18px" }}>1 from ₹950.00</p>
                  <span style={{ fontSize: "16px" }}>
                    <u>Free Delivery</u>
                  </span>
                  <h5>Men's Tshirt</h5>
                  <h5>Colours</h5>
                  <div>
                    <label className="orange">
                      <input
                        type="radio"
                        name="color"
                        value="orange"
                        className="myinput"
                      />
                      <div className="layer"></div>
                      <div className="button">
                        <span></span>
                      </div>
                    </label>

                    <label className="amber">
                      <input
                        type="radio"
                        name="color"
                        value="amber"
                        className="myinput"
                      />
                      <div className="layer"></div>
                      <div className="button">
                        <span></span>
                      </div>
                    </label>

                    <label className="lime">
                      <input
                        type="radio"
                        name="color"
                        value="lime"
                        className="myinput"
                      />
                      <div className="layer"></div>
                      <div className="button">
                        <span></span>
                      </div>
                    </label>

                    <label className="teal">
                      <input
                        type="radio"
                        name="color"
                        value="teal"
                        className="myinput"
                      />
                      <div className="layer"></div>
                      <div className="button">
                        <span></span>
                      </div>
                    </label>

                    <label className="blue">
                      <input
                        type="radio"
                        name="color"
                        value="blue"
                        className="myinput"
                      />
                      <div className="layer"></div>
                      <div className="button">
                        <span></span>
                      </div>
                    </label>

                    <label className="indigo">
                      <input
                        type="radio"
                        name="color"
                        value="indigo"
                        className="myinput"
                      />
                      <div className="layer"></div>
                      <div className="button">
                        <span></span>
                      </div>
                    </label>
                  </div>
                  <button
                    style={{
                      position: "relative",
                      background: "#000",
                      color: "#fff",
                      marginTop: "50%",
                      width: "280px",
                      height: "50px",
                      borderRadius: "25px",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                    onClick={() => navigate("/editor")}
                  >
                    Edit My Design
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BrowseDesignPreview;

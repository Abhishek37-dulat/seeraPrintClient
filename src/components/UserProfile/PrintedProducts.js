import React from "react";
import { MdDone } from "react-icons/md";
import { GiPolarStar } from "react-icons/gi";
import { BsUpload } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import "./myproject.css";
import Img9 from "../../images/tshirt9.png";
import { PrintedImageData } from "../../ConstantData/PrintedImageData";
import Button from "../somecomponents/Button";
import { ChromePicker } from "react-color-pick";

const PrintedProducts = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row py-2" style={{ background: "#138ede" }}>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
            <div className="mx-4">
              <h3 style={{ color: "#fff" }}>
                Let us know about your design project
              </h3>
              <p style={{ color: "#fff" }}>3 revisions, 24 hour turnaround</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 ">
            <div className="row py-4">
              <div className="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 ">
                <div className="py-4">
                  <h2 className="mx-4" style={{ fontSize: "30px" }}>
                    <span class="step">1</span>Choose a product for us to design
                  </h2>
                  <span
                    className="mx-4"
                    style={{ fontSize: "16px", fontWeight: 500 }}
                  >
                    Product{" "}
                    <GiPolarStar
                      size={6}
                      style={{
                        color: "red",
                        bottom: "4px",
                        position: "relative",
                      }}
                    />
                  </span>
                  <select
                    className="form-select form-select-lg mb-3 mx-4"
                    aria-label=".form-select-lg example"
                  >
                    <option selected>-- Select Your Design --</option>
                    <option value="1">Standard Visting Cards - ₹300.00</option>
                    <option value="2">
                      Rounded Corner Visting Cards - ₹300.00
                    </option>
                    <option value="3">Square Visting Cards - ₹300.00</option>
                    <option value="4">Classic Visting Cards - ₹300.00</option>
                    <option value="5">
                      Non-Tearable Visting Cards - ₹300.00
                    </option>
                    <option value="6">
                      Velvet Touch Visting Cards - ₹300.00
                    </option>
                    <option value="7">
                      Premiuim White Visting Cards - ₹300.00
                    </option>
                    <option value="8">Glossy Visting Cards - ₹300.00</option>
                    <option value="9">
                      Matte Touch Visting Cards - ₹300.00
                    </option>
                    <option value="10">
                      Primiuim Plus Visting Cards - ₹300.00
                    </option>
                    <option value="11">
                      Women's Embroidered Polo T-Shirt - ₹300.00
                    </option>
                    <option value="12">
                      Men's Embroidered Polo T-Shirt - ₹300.00
                    </option>
                    <option value="13">Premium Polo T-Shirt - ₹300.00</option>
                    <option value="14">
                      Men's Scott Polo T-Shirt - ₹300.00
                    </option>
                    <option value="15">
                      Women's Scott Polo T-Shirt - ₹300.00
                    </option>
                  </select>
                </div>
                <div className="py-4">
                  <h2 className="mx-4" style={{ fontSize: "30px" }}>
                    <span class="step">2</span> Describe your design idea
                  </h2>
                  <span
                    className="mx-4"
                    style={{ fontSize: "16px", fontWeight: 500 }}
                  >
                    Required{" "}
                    <GiPolarStar
                      size={6}
                      style={{
                        color: "red",
                        bottom: "4px",
                        position: "relative",
                      }}
                    />
                  </span>
                  <textarea
                    className="form-control mx-4"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    placeholder="Include exact text and design specifics that you would like to see incorporated into 
                    the design, such as colours, style, feel and product sizes you are looking for.
                    For example: For my beauty salon, I am looking for a large banner with plain colours,
                    minimalist style, including some flowers, with a slim font."
                  ></textarea>
                  <span
                    className="mx-4"
                    style={{
                      fontSize: "20px",
                      fontWeight: 500,
                      top: "10px",
                      position: "relative",
                    }}
                  >
                    Want to upload any images for reference?{" "}
                  </span>
                  <div className="row py-4 mx-2">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <div className="card">
                        <div className="d-flex justify-content-end">
                          <AiOutlineClose size={18} />
                        </div>
                        <div className="inner-img">
                          <img src={Img9} alt="tshit" />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <div className="card">
                        <div className="mid-card">
                          <div className="inner-upload">
                            <BsUpload size={45} />
                            <p>Drag and drop an image file or browse</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 py-4">
            <div className="card">
              <span style={{ fontSize: "20px", fontWeight: 600 }}>
                Filling out your request
              </span>
              <span style={{ fontSize: "18px" }}>
                <MdDone style={{ color: "green" }} />
                {"  "}
                The more details the better
              </span>
              <span style={{ fontSize: "18px" }}>
                <MdDone style={{ color: "green" }} />
                {"  "}
                Describe your target audience and any industry norms or
                standards
              </span>
              <span>
                <MdDone style={{ color: "green" }} />
                {"  "} Tell us about any styles, colours and even brands you
                like
              </span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="py-4">
              <h2 className="mx-4" style={{ fontSize: "30px" }}>
                <span class="step">3</span> Tell us about your style
              </h2>
              <span
                className="mx-4"
                style={{ fontSize: "16px", fontWeight: 500 }}
              >
                Which design examples are similar to your style?{" "}
                <GiPolarStar
                  size={6}
                  style={{
                    color: "red",
                    bottom: "4px",
                    position: "relative",
                  }}
                />
              </span>
              <div className="row">
                {PrintedImageData.map((data) => {
                  return (
                    <>
                      <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 py-2">
                        <div className="card">
                          <img src={data.image} alt="printed" />
                          <span
                            className="py-2"
                            style={{ textAlign: "center", fontSize: "20px" }}
                          >
                            {data.text}
                          </span>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <span
                className="mx-4"
                style={{ fontSize: "16px", fontWeight: 500 }}
              >
                Select the colors you would like most prevalent in your design{" "}
                <GiPolarStar
                  size={6}
                  style={{
                    color: "red",
                    bottom: "4px",
                    position: "relative",
                  }}
                />
              </span>
              <ChromePicker />
            </div>
          </div>
        </div>

        <div className="row py-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h2 className="mx-4" style={{ fontSize: "30px" }}>
              <span class="step">4</span> Tell us about your style
            </h2>
            <Button btn="Continue"></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrintedProducts;

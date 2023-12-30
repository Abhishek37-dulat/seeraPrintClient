import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
// import { FaPhoneVolume } from "react-icons/fa6";
import Logo from "../../images/seeraprintlogo.png";
import Innovative from "../../images/innovative.png";
import payment from "../../images/payments.png";

const Footer = () => {
  return (
    <div>
      <div className="container-fluid" style={{ background: "#138EDE" }}>
        <div className="row mx-2 py-2">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
            <img
              src={Logo}
              alt="logo"
              style={{ width: "120px", height: "60px" }}
            />
          </div>
        </div>

        <div className="row mx-2 py-2">
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xxl-3">
            {/* <p style={{ fontWeight: "600", fontSize: "22px" }}>
              <FaPhoneVolume size={22} />
              {"  "}
              +91 9123248063
            </p>
            <p style={{ fontWeight: "600" }}>
              Station Road, Tupkadih, Bokaro, jharkhand, 827010
            </p> */}
            <p className="py-2" style={{ fontWeight: "600", color: "#fff" }}>
              Easy Returns:
              <Link to="/">
                {" "}
                {"   "}
                <span style={{ cursor: "pointer", color: "#fff" }}>
                  <u>Free Replacement or Full Refund</u>
                </span>
              </Link>
            </p>

            <div style={{ width: "240px", color: "#fff" }}>
              <img src={Innovative} alt="innovative" />
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xxl-3">
            <h4>Let Us Help</h4>
            <br />
            <p style={{ fontWeight: "600" }}>
              <Link
                to="/blogs"
                style={{
                  fontWeight: "600",
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                Blogs
              </Link>
            </p>
            <p style={{ fontWeight: "600" }}>
              <Link
                to="/contact"
                style={{
                  fontWeight: "600",
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                {" "}
                Help Me
              </Link>
            </p>
            <p style={{ fontWeight: "600" }}>
              <Link
                to="/my-accounts"
                style={{
                  fontWeight: "600",
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                My Account
              </Link>
            </p>
            <p style={{ fontWeight: "600" }}>
              <Link
                to="/career"
                style={{
                  fontWeight: "600",
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                Career
              </Link>
            </p>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xxl-3">
            <h4>Our Company</h4>
            <br />
            <p style={{ fontWeight: "600" }}>
              <Link
                to="/about-us"
                style={{
                  fontWeight: "600",
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                About Us
              </Link>
            </p>
            <p style={{ fontWeight: "600" }}>
              {" "}
              <Link
                to="/faq"
                style={{
                  fontWeight: "600",
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                FAQ
              </Link>
            </p>
            <p style={{ fontWeight: "600", color: "#fff" }}>About Work</p>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xxl-3">
            <h4>Our policies</h4>
            <br />
            <p>
              <Link
                to="/terms-conditions"
                style={{
                  fontWeight: "600",

                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                Terms & Conditions
              </Link>
            </p>
            <p>
              <Link
                to="/privacy-policy"
                style={{
                  fontWeight: "600",
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                Privacy & Cookies Policy
              </Link>
            </p>
            <p>
              <Link
                to="/copyright-trademark"
                style={{
                  fontWeight: "600",
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                Copyright matters
              </Link>
            </p>
          </div>
        </div>
        <hr />
        <div className="container-fluid">
          <div className="row mx-2 py-2">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xxl-4">
              <p
                className="text-center"
                style={{ fontWeight: "600", fontSize: "18px", color: "#fff" }}
              >
                2023@ All Right Reserved!
              </p>
            </div>

            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xxl-4 d-flex align-items-center justify-content-center">
              <img
                src={payment}
                alt="visa"
                style={{
                  width: "340px",
                  height: "60px",
                  position: "relative",
                  bottom: "10px",
                }}
              />
            </div>

            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xxl-4">
              <div className="text-center">
                <FaFacebook size={32} />
                <FaInstagram size={32} />
                <FaLinkedin size={32} />
                <FaYoutube size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

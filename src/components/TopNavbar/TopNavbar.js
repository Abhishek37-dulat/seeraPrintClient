import React from "react";
import "./topnavbar.css";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const TopNavbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 wrap">
            <div className="left-side d-flex flex-row">
              <p style={{ padding: "2px 10px", fontWeight: "600" }}>
                <Link
                  to="/contact"
                  style={{
                    textDecoration: "none",
                    color: "#000",
                    cursor: "pointer",
                  }}
                >
                  Help Me
                </Link>
              </p>
              <p style={{ padding: "2px 10px", fontWeight: "600" }}>
                <Link
                  to="/contact"
                  style={{
                    textDecoration: "none",
                    color: "#000",
                    cursor: "pointer",
                  }}
                >
                  Contact Us
                </Link>
              </p>
            </div>

            <div className="right-side d-flex flex-row-reverse">
              <Link
                style={{
                  padding: "2px 10px",
                  fontWeight: "600",
                  textDecoration: "none",
                  color: "#fff",
                }}
                to="/login"
              >
                <FaUserAlt /> Login/Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;

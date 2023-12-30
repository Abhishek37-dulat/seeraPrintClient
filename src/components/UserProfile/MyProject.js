import React from "react";
import "./myproject.css";
import Img9 from "../../images/tshirt9.png";
import Button from "../somecomponents/Button";
import { BiEdit } from "react-icons/bi";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa";

const MyProject = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
            <h2 style={{ fontWeight: "600" }}>My Project</h2>
          </div>
        </div>
        <div className="row box">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 py-2">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 py-2">
                <div className="card">
                  <div className="main-img">
                    <img src={Img9} alt="tshirt9 " className="single-img" />{" "}
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 py-2">
                <h5>
                  Men's Embroidered Polo T-Shirts{" "}
                  <MdModeEditOutline size={22} />
                </h5>

                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#5C5C5C",
                  }}
                >
                  Product Name: Men's Embroidered Polo T-Shirts
                </span>
                <br />
                <span
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Color: White
                </span>
                <br />
                <span
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Stock: standard
                </span>
                <br />
                <span
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Identification #: bd67af60-f331-4c18
                </span>
                <br />
                <span
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Created on: 4/10/2023
                </span>
                <br />
                <span
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Last Edited on: 6/10/2023
                </span>
                <Button btn="Add"></Button>
                <span
                  style={{
                    fontSize: "14px",
                    position: "relative",
                    top: "10px",
                  }}
                >
                  2 starting at ₹1,000.00
                </span>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">
                <div style={{ position: "relative", top: "60px" }}>
                  <p>
                    <BiEdit size={20} />
                    {"  "}
                    Edit
                  </p>
                  <p>
                    <FaRegCopy size={20} />
                    {"  "}
                    Copy
                  </p>
                  <p>
                    <MdDelete size={20} />
                    {"  "}
                    Delete
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProject;

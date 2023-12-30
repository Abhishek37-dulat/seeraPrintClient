import React from "react";
import "./dashboard.css";
import Img from "../../images/tshirt9.png";
import { BiRightArrowAlt } from "react-icons/bi";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
            <h2 style={{ fontWeight: "600" }}>Dashboard</h2>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
            <h3 style={{ fontWeight: "600" }}>My project</h3>
          </div>
        </div>
        <div className="row py-2">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
            <div className="card">
              <img
                src={Img}
                alt="Avatar"
                style={{
                  width: "50%",
                  alignSelf: "center",
                }}
              />
              <div>
                <h5>
                  <b>Men's Embroidered Polo T-Shirts</b>
                </h5>
                <p>Edited: 4 Oct</p>
                <p>
                  Edit <BiRightArrowAlt />
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
            <div className="card">
              <div className="newproject">
                <h4>
                  <b>Start a new project</b>
                </h4>
                <p>Here are some popular starting points:</p>
                <p>Business Cards</p>
                <p>Marketing Materials</p>
                <p>Invitation & Stationery</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row  py-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
            <h3 style={{ fontWeight: "600" }}>My Order</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
            <div className="card">
              <div className="order-content">
                <h4>You don't have any orders yet.</h4>
                <p>When you’ve placed your first order, you’ll see it here.</p>
                <p>Continue Shopping</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

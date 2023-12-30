import React from "react";
import Button from "../somecomponents/Button";

const MyDesigns = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
            <h2 style={{ fontWeight: "600" }}>My Design Services</h2>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
            <h4 style={{ fontWeight: "600" }}>
              You currently have no projects
            </h4>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
            <Button btn="New Projects"></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyDesigns;

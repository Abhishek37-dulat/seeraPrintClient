import React from "react";
import Img9 from "../../images/tshirt9.png";
import "./myuploads.css";

const MyUploads = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
            <h2 style={{ fontWeight: "600" }}>My Uploads</h2>
          </div>
        </div>
        <div className="row py-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
            <p style={{ fontWeight: "600", fontSize: "18px" }}>
              We’ve saved the images, logos or designs you’ve uploaded in the
              past, keeping them here for easy access and reuse.
            </p>
          </div>
        </div>
        <div className="row py-2">
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 ">
            <div className="cards">
              <img src={Img9} alt="tshirt9 " />
              <div className="extension">
                <p className="text-center">image.jpg</p>
                <p className="text-center">Uploaded on 4/10/2023</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 ">
            <div className="cards">
              <img src={Img9} alt="tshirt9 " />
              <div className="extension">
                <p className="text-center">image.jpg</p>
                <p className="text-center">Uploaded on 4/10/2023</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 ">
            <div className="cards">
              <img src={Img9} alt="tshirt9 " />
              <div className="extension">
                <p className="text-center">image.jpg</p>
                <p className="text-center">Uploaded on 4/10/2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyUploads;

import React from "react";
import "./some.css";

const SupportCard = () => {
  return (
    <>
      <div className="container py-2">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 support">
            <img
              src="https://i.pinimg.com/564x/a5/89/87/a5898778e5a1c30801a96dd4084b038c.jpg"
              alt="cus "
              style={{ width: "100%", height: "auto" }}
            />
            <p></p>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 support">
            <img
              src="https://i.pinimg.com/564x/1e/fb/d4/1efbd49ed82fac1f00af94ace965f5f4.jpg"
              alt="cus "
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 support">
            <img
              src="https://i.pinimg.com/564x/59/23/86/59238622fa94a2d3ef8af34a6043bdc4.jpg"
              alt="cus "
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 support">
            <img
              src="https://i.pinimg.com/564x/1d/f9/ce/1df9ce37bd1a8ae90e0b2fca7c9a4ae6.jpg"
              alt="cus "
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportCard;

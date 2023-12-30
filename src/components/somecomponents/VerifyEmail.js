import React from "react";

const VerifyEmail = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row py-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
            <div style={{ alignItems: "center" }}>
              <h2>Please Verify and Change your password</h2>

              <div className="row"></div>
              <br />

              <div>
                <input
                  type="email"
                  placeholder="   Email Address"
                  className="inputfield"
                />
                <br />
                <br />
                <button className="signup">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;

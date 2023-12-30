import React, { useState } from "react";
import "./accountsettings.css";
import { useSelector } from "react-redux";

const AccountSettings = () => {
  const [IsPersonalInfo, setIsPersonalInfo] = useState(true);
  const [noThanks, setNoThanks] = useState(false);
  const [yes, setYes] = useState(false);
  const userData = useSelector((state) => state.auth.userDetails);
  console.log(userData);

  const handlePersonalInfo = (event) => {
    setIsPersonalInfo(true);
  };

  const handlePreference = (event) => {
    setIsPersonalInfo(false);
  };

  const handleNoThanks = (event) => {
    setNoThanks(true);
    setYes(false);
  };
  const handleYes = () => {
    setYes(true);
    setNoThanks(false);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
            <h2 style={{ fontWeight: "600" }}>Account Settings</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
            <span
              onClick={handlePersonalInfo}
              style={{ cursor: "pointer", fontWeight: 600 }}
            >
              Personal Info
            </span>
            <span
              className="mx-4"
              onClick={handlePreference}
              style={{ cursor: "pointer", fontWeight: 600 }}
            >
              Preference
            </span>
          </div>
        </div>
        <hr />
        {IsPersonalInfo ? (
          <>
            <div className="row py-4">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="card">
                  <div className="py-4">
                    <span style={{ fontWeight: 600, fontSize: "22px" }}>
                      Name
                    </span>
                    <br />
                    <span style={{ fontSize: "20px" }}>
                      {userData?.first_name + " " + userData?.last_name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row py-4">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                <div className="card">
                  <div className="py-4">
                    <span style={{ fontWeight: 600, fontSize: "22px" }}>
                      Email
                    </span>
                    <br />
                    <span style={{ fontSize: "20px" }}>{userData?.email}</span>
                    <p style={{ position: "relative", top: "10px" }}>
                      In order to change your email, disconnect your social
                      accounts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row py-4">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                <div className="card">
                  <div className="py-4">
                    <span style={{ fontWeight: 600, fontSize: "22px" }}>
                      Google
                    </span>
                    <br />
                    <span>
                      In order to change your account information, visit your
                      Google account settings.
                    </span>
                  </div>
                </div>
              </div>
              <div className="row py-4">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                  <p>
                    To update your address, go to{" "}
                    <span>
                      <u>Payment & Delivery</u>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="row py-2">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                <p style={{ fontWeight: 600, fontSize: "22px" }}>
                  Marketing Preference
                </p>
                <p style={{ fontSize: "18px" }}>
                  {" "}
                  You can update your marketing preferences at any time.
                </p>
                <p style={{ fontSize: "18px" }}>
                  For more information, please read our
                  <span> Privacy and Cookie Policy</span>.
                </p>
              </div>
            </div>
            <div className="row py-2" style={{ background: "#F8F8F8" }}>
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                <span
                  style={{ fontWeight: 600, fontSize: "22px" }}
                  className="py-2"
                >
                  Email
                </span>
                <br />
                <p style={{ fontSize: "18px" }}>
                  Would you like to sign up for exclusive email offers?
                </p>
                <label className="our-container" onClick={handleYes}>
                  Yes, I'd like to receive special offers from SeeraPrint, as
                  well as news about products, services and my designs in
                  progress.
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                </label>
                <label className="our-container" onClick={handleNoThanks}>
                  No, thanks.
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                </label>
                {noThanks ? (
                  <>
                    <span
                      className="py-2"
                      style={{ fontWeight: 600, fontSize: "22px" }}
                    >
                      Would you prefer fewer emails?
                    </span>
                    <label className="our-container py-2">
                      Yes I'd like to receive one email a week.
                      <input type="radio" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                  </>
                ) : (
                  " "
                )}

                <button
                  style={{
                    border: "1px solid #000",
                    borderRadius: "25px",
                    height: "50px",
                    width: "110px",
                    background: "#000",
                    color: "#fff",
                  }}
                >
                  Save
                </button>
                <span style={{ cursor: "pointer" }} className="mx-4">
                  <u>Cancel</u>
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AccountSettings;

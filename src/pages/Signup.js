import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import "./login.css";

const Signup = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row py-4 text-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 py-2">
            <h2 style={{ textAlign: "center" }}>
              Two great brands. One account.
            </h2>

            <div className="row py-4">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                <button className="loginwith">
                  <FcGoogle size={28} />
                  {"     "}
                  {"  "}
                  Sign up with Google
                </button>
                <br />
                <br />
                <button className="loginwith">
                  <BiLogoFacebookCircle color="blue" size={28} />
                  {"  "}
                  Sign up with Facebook
                </button>
              </div>
            </div>
            <br />
            <div className="row mx-2">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <p>Or, create an account with email.</p>
                <div>
                  <div className="">
                    <input
                      type="text"
                      placeholder="   Your Name"
                      className="inputfield"
                    />
                    <br />
                    <br />
                    <input
                      type="email"
                      placeholder="   Email Address"
                      className="inputfield"
                    />
                    <br />
                    <br />
                    <input
                      type="password"
                      placeholder="   Password"
                      className="inputfield"
                    />
                  </div>
                </div>
                <br />
                <br />
                <Link to="/">
                  <button className="signup">Create an account</button>
                </Link>
                <br />
                <br />
                <p style={{ fontSize: "14px", textAlign: "center" }}>
                  Already have an account{" "}
                  <Link to="/login">
                    <span
                      style={{
                        fontWeight: 600,
                        textDecorationLine: "underline",
                        color: "#000",
                        textDecorationStyle: "solid",
                      }}
                    >
                      Sign In
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

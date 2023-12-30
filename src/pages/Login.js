// Login.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/reducers/authSlice";
import { FcGoogle } from "react-icons/fc";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(loginUser({ username: email, password }));
    navigate("/");
  };

  return (
    <div className="container-fluid">
      <div className="row py-4">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center">
          <div style={{ alignItems: "center" }}>
            <h2>Two great brands. One account.</h2>
            <p style={{ fontSize: "18px" }}>
              Sign in to SeeraPrint and we’ll sync your accounts. If you have
              multiple accounts, including VistaPrint, sign in with your
              SeeraPrint account.
            </p>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <button className="loginwith">
                  <FcGoogle size={28} />
                  {"   "}
                  Continue with Google
                </button>
                <br />
                <br />
                <button className="loginwith">
                  <BiLogoFacebookCircle color="blue" size={28} />
                  {"   "}
                  Continue with Facebook
                </button>
              </div>
            </div>
            <br />
            <p style={{ fontSize: "18px", fontWeight: 600 }}>
              Or, Sign in with Email.
            </p>
            <div>
              <input
                type="email"
                placeholder="   Email Address"
                className="inputfield"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />
              <input
                type="password"
                placeholder="   Password"
                className="inputfield"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <span>
              <u>Forget Password?</u>
            </span>
            <br />
            <span style={{ fontSize: "12px", textAlign: "center" }}>
              By signing in, you have read and agree to our Seera General Terms
              and Conditions. For more details on how we use the information we
              collect about you, please read our Seera Privacy and Cookie
              Policy.
            </span>
            <br />
            <button
              className="signin"
              style={{ marginTop: "15px" }}
              onClick={handleLogin}
            >
              Sign in
            </button>
            <p style={{ fontWeight: 600, marginTop: "10px" }}>Or</p>
            <Link to="/signup">
              <button className="signup">Create an account</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

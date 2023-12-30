import React from "react";
import "./career.css";
import Job from "../../images/job.jpg";

const Career = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex py-2">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  d-flex align-items-center justify-content-center">
            <h1
              style={{
                marginTop: "20px",
                fontWeight: "600",
                fontSize: "32px",
              }}
            >
              Career
            </h1>
          </div>
        </div>
        <div className="row mx-2 py-4">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <img src={Job} alt="job" />
            <p>
              Non-surgical hair replacement technicians looking for career
              growth and a comfortable work environment are welcome to contact
              Maneology. Please fill in your details in the application form
              here, and attach a resume. We will get back to you for further
              interviews.
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div>
              <form className="Signup-form">
                <h4
                  style={{ textAlign: "center", color: "#138ede" }}
                  className="py-4"
                >
                  Job Options Application
                </h4>
                <div className="Signup-form-content">
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      name="firstname"
                      className="form-control mt-1"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      name="lastname"
                      className="form-control mt-1"
                      placeholder="Enter last name"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control mt-1"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="number"
                      name="mobile"
                      className="form-control mt-1"
                      placeholder="Enter mobile number"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label style={{ fontWeight: "500" }}>Upload CV</label>
                    <input
                      type="file"
                      className="form-control-file"
                      id="exampleFormControlFile1"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Message"
                    />
                  </div>
                  <div className="d-grid gap-2 mt-3">
                    <button
                      type="submit"
                      className="btn"
                      style={{
                        background: "#138ede",
                        color: "#fff",
                        fontSize: "20px",
                        fontWeight: "600",
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;

import React from "react";
import Image from "../../images/tshirt9.png";
import Modal from "react-bootstrap/Modal";
import Button from "../../components/somecomponents/Button";
import { TiTick } from "react-icons/ti";

const NextStep = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Design Review
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                <div
                  className="mx-auto d-flex justify-content-center flex-wrap "
                  style={{ width: "280px", height: "420px" }}
                >
                  <img src={Image} alt="next" />

                  <button className="smallbtn">Front</button>
                  <button className="smallbtn">Back</button>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                <div className="">
                  <h2>Design Review</h2>
                  <p>All set? Let's double check:</p>
                  <p>
                    <TiTick size={24} color="green" />
                    {"   "}
                    Text: Is it clear and legible?
                  </p>
                  <p>
                    {" "}
                    <TiTick size={24} color="green" /> Margin: Is everything
                    within the space?
                  </p>
                  <p>
                    {" "}
                    <TiTick size={24} color="green" /> Info: Everything
                    accurate? Spelled correctly?
                  </p>
                  <p>
                    {" "}
                    <TiTick size={24} color="green" /> Image: Is everything
                    clear (no blue)?
                  </p>
                  <Button btn="Edit Again"></Button>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    style={{ border: "1px solid black" }}
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    I've reviewed and approve my design.
                  </label>
                </div>
                <Button btn="Continue"></Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NextStep;

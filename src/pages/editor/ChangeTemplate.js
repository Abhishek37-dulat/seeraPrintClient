import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { ChangeTemplateData } from "../../ConstantData/ChangeTemplateData";

const ChangeTemplate = (props) => {
  const [agriculture, setAgriculture] = useState(false);
  const [animal, setAnimal] = useState(false);
  const [art, setArt] = useState(false);
  const [automotive, setAutomotive] = useState(false);
  const [beauty, setBeauty] = useState(false);

  const handleAgriculture = () => {
    setAgriculture(true);
    setAnimal(false);
    setArt(false);
    setAutomotive(false);
    setBeauty(false);
  };
  const handleAnimals = () => {
    setAgriculture(false);
    setAnimal(true);
    setArt(false);
    setAutomotive(false);
    setBeauty(false);
  };
  const handleArt = () => {
    setAgriculture(false);
    setAnimal(false);
    setArt(true);
    setAutomotive(false);
    setBeauty(false);
  };
  const handleAutomotive = () => {
    setAgriculture(false);
    setAnimal(false);
    setArt(false);
    setAutomotive(true);
    setBeauty(false);
  };
  const handleBeauty = () => {
    setAgriculture(false);
    setAnimal(false);
    setArt(false);
    setAutomotive(false);
    setBeauty(true);
  };

  return (
    <>
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <div>
                  <h5>Industry</h5>
                  <ul style={{ listStyle: "none" }}>
                    <li onClick={handleAgriculture}>Agriculture & Farming</li>
                    <li onClick={handleAnimals}>Animals & Pet Care</li>
                    <li onClick={handleArt}>Art & Entertainment</li>
                    <li onClick={handleAutomotive}>
                      Automotive & Transportation
                    </li>
                    <li onClick={handleBeauty}>Beauty & Spa</li>
                  </ul>
                </div>
                <div>
                  <h5>Events</h5>
                  <ul>
                    <li>Baby</li>
                    <li>Birthday</li>
                    <li>General Party</li>
                    <li>Wedding</li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
                <div className="row">
                  <div>
                    <h2>Change template</h2>
                    <p>Choose a new template to start editing.</p>
                  </div>

                  {ChangeTemplateData.map((data, id) => {
                    return (
                      <>
                        <div
                          className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4"
                          key={id}
                        >
                          <img
                            className="py-2"
                            src={data.image}
                            alt="template"
                          />
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ChangeTemplate;

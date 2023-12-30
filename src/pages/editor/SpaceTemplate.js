import React from "react";
import Modal from "react-bootstrap/Modal";

const SpaceTemplate = (props) => {
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
            Your Order
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is vody</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SpaceTemplate;

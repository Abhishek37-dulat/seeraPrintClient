import React, { useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { HiDownload } from "react-icons/hi";
import Image from "../../images/tshirt9.png";
import Image1 from "../../images/tshirt1.png";

const Preview = (props) => {
  const [isFront, setFront] = useState(true);
  const [isBack, setBack] = useState(false);
  // const [lgShow, setLgShow] = useState(false);
  const imageRef = useRef(null);
  const handleFront = () => {
    setFront(true);
    setBack(false);
  };
  const handleBack = () => {
    setFront(false);
    setBack(true);
  };
  const downloadPDF = () => {
    const input = imageRef.current;

    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        const imgWidth = 550;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save("image_to_pdf.pdf");
      })
      .catch((error) => {
        console.error("Error creating PDF:", error);
      });
  };

  return (
    <>
      <div className="py-2">
        <Modal
          {...props}
          size="lg"
          aria-labelledby="example-modal-sizes-title-lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              <button className="download-proof" onClick={downloadPDF}>
                <HiDownload /> Download PDF Proof
              </button>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <div
              className="preview-image mx-auto d-flex justify-content-center flex-wrap"
              ref={imageRef}
            >
              {isFront && (
                <img
                  src={Image}
                  alt="img"
                  className="preview-img  align-items-center "
                />
              )}
              {isBack && (
                <img src={Image1} alt="img" className="preview-img " />
              )}
            </div>

            <button className="smallbtn" onClick={handleFront}>
              Front
            </button>
            <button className="smallbtn" onClick={handleBack}>
              Back
            </button>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Preview;

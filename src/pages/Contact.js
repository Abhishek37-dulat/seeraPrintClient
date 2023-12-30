import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "../components/somecomponents/Button";
import { FAQData } from "../ConstantData/FAQData";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row py-4">
          <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 py-4">
            <h3>Popular Question</h3>
            <div className="row">
              {FAQData.map((data, id) => {
                return (
                  <>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <Accordion key={id} className="py-1">
                        <Accordion.Item
                          eventKey="0"
                          style={{ border: "1px solid #000" }}
                        >
                          <Accordion.Header>{data.title}</Accordion.Header>
                          <Accordion.Body>{data.content}</Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 py-4">
            <h2>Contact Us</h2>
            <div>
              <h3 className="py-3">Phone</h3>
              <p className="py-1" style={{ fontSize: "18px" }}>
                +91 9123248063
              </p>
              <p className="py-1" style={{ fontSize: "18px" }}>
                Mon. – Sat. 10:00 AM – 7:00 PM
              </p>
            </div>
            <div>
              <h3 className="py-1">Email</h3>
              <p className="py-1" style={{ fontSize: "18px" }}>
                Customer service specialists respond to emails from Monday –
                Saturday.
              </p>
              <p style={{ fontSize: "18px" }}>
                Our mail is:
                <br />
                <b>customerservice@seeraprint.com</b> or you can email us
                directly here.
              </p>
            </div>
            <div>
              <Button btn="Email Us" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

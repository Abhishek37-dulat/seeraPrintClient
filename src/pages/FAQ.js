import React from "react";
import Accordion from "react-bootstrap/Accordion";
import {
  CommonQuestion,
  AboutSeeraprint,
  MyAccount,
  MyOrder,
  ShippingInformation,
  DesignMyProduct,
} from "../ConstantData/FAQData";

const FAQ = () => {
  return (
    <>
      <div className="container-fluid py-2">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h1 className="text-center">FAQ</h1>
          </div>
        </div>
        <div className="row mx-2">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h3>Common Customer Questions</h3>

            {CommonQuestion.map((data) => {
              return (
                <>
                  <Accordion>
                    <Accordion.Item
                      eventKey="0"
                      style={{ border: "1px solid #000" }}
                    >
                      <Accordion.Header>{data.question}</Accordion.Header>
                      <Accordion.Body>{data.answer}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </>
              );
            })}
          </div>
        </div>
        <br />
        <br />
        <div className="row mx-2">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h3>About Brand Store by Vistaprint</h3>

            {AboutSeeraprint.map((data) => {
              return (
                <>
                  <Accordion>
                    <Accordion.Item
                      eventKey="0"
                      style={{ border: "1px solid #000" }}
                    >
                      <Accordion.Header>{data.question}</Accordion.Header>
                      <Accordion.Body>{data.answer}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </>
              );
            })}
          </div>
        </div>
        <br />
        <div className="row mx-2">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h3>My Account</h3>

            {MyAccount.map((data) => {
              return (
                <>
                  <Accordion>
                    <Accordion.Item
                      eventKey="0"
                      style={{ border: "1px solid #000" }}
                    >
                      <Accordion.Header>{data.question}</Accordion.Header>
                      <Accordion.Body>{data.answer}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </>
              );
            })}
          </div>
        </div>
        <br />
        <div className="row mx-2">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h3>My Order</h3>

            {MyOrder.map((data) => {
              return (
                <>
                  <Accordion>
                    <Accordion.Item
                      eventKey="0"
                      style={{ border: "1px solid #000" }}
                    >
                      <Accordion.Header>{data.question}</Accordion.Header>
                      <Accordion.Body>{data.answer}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </>
              );
            })}
          </div>
        </div>
        <br />
        <div className="row mx-2">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h3>Shipping Information</h3>

            {ShippingInformation.map((data) => {
              return (
                <>
                  <Accordion>
                    <Accordion.Item
                      eventKey="0"
                      style={{ border: "1px solid #000" }}
                    >
                      <Accordion.Header>{data.question}</Accordion.Header>
                      <Accordion.Body>{data.answer}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </>
              );
            })}
          </div>
        </div>
        <br />
        <div className="row mx-2">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h3>Design My Product</h3>

            {DesignMyProduct.map((data) => {
              return (
                <>
                  <Accordion>
                    <Accordion.Item
                      eventKey="0"
                      style={{ border: "1px solid #000" }}
                    >
                      <Accordion.Header>{data.question}</Accordion.Header>
                      <Accordion.Body>{data.answer}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;

import React, { useState } from "react";
import { BiSolidCircle } from "react-icons/bi";
import "./browse.css";
import BrowseDesignPreview from "./BrowseDesignPreview";
import {
  ChangeTemplateData,
  ChangeColorData,
  ChangeIndustryData,
  ChangeEventData,
} from "../../ConstantData/ChangeTemplateData";

const BrowseDesign = () => {
  const [isBrowseDesignPreview, setBrowseDesignPreview] = useState(false);
  const [isAgriculture, setAgriculture] = useState(false);
  const [isAnimal, setAnimal] = useState(false);
  const [isArt, setArt] = useState(false);
  const [isAutomotive, setAutomotive] = useState(false);
  const [isBeauty, setBeauty] = useState(false);
  const [isBaby, setBaby] = useState(false);
  const [isBirthday, setBirthday] = useState(false);
  const [isParty, setParty] = useState(false);
  const [isWedding, setWedding] = useState(false);

  // const handleAgriculture = () => {
  //   setAgriculture(true);
  //   setAnimal(false);
  //   setArt(false);
  //   setAutomotive(false);
  //   setBeauty(false);
  //   setBaby(false);
  //   setBirthday(false);
  //   setParty(false);
  //   setWedding(false);
  // };
  // const handleAnimals = () => {
  //   setAgriculture(false);
  //   setAnimal(true);
  //   setArt(false);
  //   setAutomotive(false);
  //   setBeauty(false);
  //   setBaby(false);
  //   setBirthday(false);
  //   setParty(false);
  //   setWedding(false);
  // };
  // const handleArt = () => {
  //   setAgriculture(false);
  //   setAnimal(false);
  //   setArt(true);
  //   setAutomotive(false);
  //   setBeauty(false);
  //   setBaby(false);
  //   setBirthday(false);
  //   setParty(false);
  //   setWedding(false);
  // };
  // const handleAutomotive = () => {
  //   setAgriculture(false);
  //   setAnimal(false);
  //   setArt(false);
  //   setAutomotive(true);
  //   setBeauty(false);
  //   setBaby(false);
  //   setBirthday(false);
  //   setParty(false);
  //   setWedding(false);
  // };
  // const handleBeauty = () => {
  //   setAgriculture(false);
  //   setAnimal(false);
  //   setArt(false);
  //   setAutomotive(false);
  //   setBeauty(true);
  //   setBaby(false);
  //   setBirthday(false);
  //   setParty(false);
  //   setWedding(false);
  // };
  const handleBaby = () => {
    setAgriculture(false);
    setAnimal(false);
    setArt(false);
    setAutomotive(false);
    setBeauty(false);
    setBaby(true);
    setBirthday(false);
    setParty(false);
    setWedding(false);
  };
  const handleBirthday = () => {
    setAgriculture(false);
    setAnimal(false);
    setArt(false);
    setAutomotive(false);
    setBeauty(false);
    setBaby(false);
    setBirthday(true);
    setParty(false);
    setWedding(false);
  };
  const handleParty = () => {
    setAgriculture(false);
    setAnimal(false);
    setArt(false);
    setAutomotive(false);
    setBeauty(false);
    setBaby(false);
    setBirthday(false);
    setParty(true);
    setWedding(false);
  };
  const handleWedding = () => {
    setAgriculture(false);
    setAnimal(false);
    setArt(false);
    setAutomotive(false);
    setBeauty(false);
    setBaby(false);
    setBirthday(false);
    setParty(false);
    setWedding(true);
  };
  const handleDesignPreview = () => {
    setBrowseDesignPreview(true);
  };
  return (
    <>
      <div className="container-fluid py-2">
        <div className="row py-4">
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
            <div>
              <h5 className="mx-4">Material Colour</h5>
              {ChangeColorData.map((data) => {
                return (
                  <>
                    <div className="mx-4">
                      <p class="comment-form-cookies-consent">
                        <input
                          id="wp-comment-cookies-consent"
                          name="wp-comment-cookies-consent"
                          type="checkbox"
                          value="yes"
                        />

                        <label for="wp-comment-cookies-consent">
                          {data.color}
                        </label>
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
            <div>
              <h5 className="mx-4">Industry</h5>
              {ChangeIndustryData.map((data, id) => {
                return (
                  <>
                    <ul
                      style={{ listStyle: "none", cursor: "pointer" }}
                      key={id}
                    >
                      <li>{data.text}</li>
                    </ul>
                  </>
                );
              })}
            </div>
            <div>
              <h5 className="mx-4">Events</h5>
              {ChangeEventData.map((data, id) => {
                return (
                  <>
                    <ul
                      style={{ listStyle: "none", cursor: "pointer" }}
                      key={id}
                    >
                      <li>{data.text}</li>
                    </ul>
                  </>
                );
              })}
            </div>
            <div>
              <h5 className="mx-4">Design Colour</h5>
              <div className="mx-4">
                <label className="orange">
                  <input
                    type="radio"
                    name="color"
                    value="orange"
                    className="myinput"
                  />
                  <div className="layer"></div>
                  <div className="button">
                    <span></span>
                  </div>
                </label>

                <label className="amber">
                  <input
                    type="radio"
                    name="color"
                    value="amber"
                    className="myinput"
                  />
                  <div className="layer"></div>
                  <div className="button">
                    <span></span>
                  </div>
                </label>

                <label className="lime">
                  <input
                    type="radio"
                    name="color"
                    value="lime"
                    className="myinput"
                  />
                  <div className="layer"></div>
                  <div className="button">
                    <span></span>
                  </div>
                </label>

                <label className="teal">
                  <input
                    type="radio"
                    name="color"
                    value="teal"
                    className="myinput"
                  />
                  <div className="layer"></div>
                  <div className="button">
                    <span></span>
                  </div>
                </label>

                <label className="blue">
                  <input
                    type="radio"
                    name="color"
                    value="blue"
                    className="myinput"
                  />
                  <div className="layer"></div>
                  <div className="button">
                    <span></span>
                  </div>
                </label>

                <label className="indigo">
                  <input
                    type="radio"
                    name="color"
                    value="indigo"
                    className="myinput"
                  />
                  <div className="layer"></div>
                  <div className="button">
                    <span></span>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
            <div className="row">
              <div>
                <h2>Change template</h2>
                <p>Choose a new template to start editing.</p>
              </div>

              <div>
                <label
                  style={{
                    background: "#000",
                    color: "#fff",
                    borderRadius: "25px",
                    height: "40px",
                    fontWeight: 500,
                    marginTop: "7px",
                    display: "inline-block",
                    padding: "10px 20px",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  <input
                    type="file"
                    accept="image/*"
                    name="image"
                    multiple
                    style={{ display: "none" }}
                  />
                  Upload logo or image
                </label>
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
                        onClick={handleDesignPreview}
                        style={{ cursor: "pointer" }}
                      />

                      <span>{data.price}</span>
                      <br />
                      <BiSolidCircle size={24} style={{ color: "red" }} />
                      <BiSolidCircle size={24} style={{ color: "brown" }} />
                      <BiSolidCircle size={24} style={{ color: "blue" }} />
                      <BiSolidCircle size={24} style={{ color: "white" }} />
                      <BiSolidCircle size={24} style={{ color: "black" }} />
                    </div>
                  </>
                );
              })}
              <BrowseDesignPreview
                show={isBrowseDesignPreview}
                onHide={() => setBrowseDesignPreview(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrowseDesign;

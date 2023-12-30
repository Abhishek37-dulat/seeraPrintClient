import React, { useState, useEffect, useRef } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { Link } from "react-router-dom";
import ColorPicker from "./ColorPicker";
import AddText from "./AddText";
import Table from "react-bootstrap/Table";
import { BsImage, BsFillHCircleFill } from "react-icons/bs";
import { TbIcons } from "react-icons/tb";
import { IoIosColorPalette } from "react-icons/io";
import Button from "../../components/somecomponents/Button";
import "./editor.css";
import MyTshirt from "../../images/mytshirt.png";
import ImageUpload from "./ImageUpload";
import DisplayText from "./DisplayText";
import Preview from "./Preview";
import SpaceTemplate from "./SpaceTemplate";
import ChangeTemplate from "./ChangeTemplate";
import DisplayImage from "./DisplayImage";
import NextStep from "./NextStep";

const ariaLabel = { "aria-label": "description" };

const Editor = ({ image, textInput, imgdata }) => {
  const imgRef = useRef(null);
  const canvasRef = useRef(null);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [preview, setPreview] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [isText, setISText] = useState(true);
  const [colorPicker, setColorPicker] = useState(false);
  const [imageUplaoad, setImageUpload] = useState(false);
  const [imageUplaoadData, setImageUploadData] = useState(null);
  const [currentColor, setCurrentColor] = useState("#D0021B");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);
  const [spaceTemplate, setSpaceTemplate] = useState(false);
  const [changeTemplate, setChangeTemplate] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const [isPreview, setIsPreview] = useState(false);

  // const imageRef = useRef(null);
  const [displayText, setDisplayText] = useState("");

  const handleTextChange = (newText) => {
    // setDisplayText(newText);
    return (
      <>
        <p>{newText}</p>
      </>
    );
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleMobileSubMenu = () => {
    setMobileSubMenuOpen(!isMobileSubMenuOpen);
  };

  const handlePopup = () => {
    setPopupOpen(true);
    setISText(false);
    setColorPicker(false);
    setImageUpload(false);
  };

  const handleText = () => {
    setISText(true);
    setColorPicker(false);
    setImageUpload(false);
  };

  const handleColor = () => {
    setColorPicker(true);
    setISText(false);
    setImageUpload(false);
  };

  const handleImage = () => {
    setImageUpload(true);
    setColorPicker(false);
    setISText(false);
  };

  // const editRef = useRef(null);
  // let canvas_width = editRef.width;
  // let canvas_height = editRef.height;

  // useEffect(() => {
  //   editRef.width = window.innerWidth;
  //   editRef.height = window.innerHeight;
  //   editRef.current.style.border = "1px solid #000";
  //   editRef.current.style.width = "250px";
  //   editRef.current.style.height = "180px";

  //   let shapes = [];
  //   shapes.push({ x: 0, y: 0, width: 200, height: 200, color: "#000" });
  //   shapes.push({ x: 0, y: 0, width: 100, height: 100, color: "blue" });
  // });
  console.log(currentColor);
  // useEffect(() => {
  //   if (editRef.current) {
  //     const canvas = editRef.current;
  //     const ctx = canvas.getContext("2d");
  //     ctx.fillStyle = "blue";
  //     ctx.fillRect(0, 0, 100, 100);
  //   }
  // }, []);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (imageUplaoad) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        ctx.fillStyle = "white";
        ctx.font = "30px Arial";
        ctx.fillText(textInput, 20, 50);
      };
      img.src = image;
    }
  }, [image, textInput]);

  const handleSpace = () => {
    setSpaceTemplate(true);
  };
  const handleChangeTemplate = () => {
    setChangeTemplate(true);
  };
  const handlePreview = () => {
    setIsPreview(true);
  };
  const handleNext = () => {
    setIsNext(true);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="row">
              <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                <Link to="/">
                  <span
                    className="desktop-text  mx-2"
                    style={{
                      cursor: "pointer",
                      fontWeight: 600,
                      color: "#000",
                      textDecoration: "none",
                    }}
                  >
                    My Project
                  </span>
                </Link>
              </div>
              <div className="col-6 col-sm-6 col-md-5 col-lg-5 col-xl-5">
                <span className="desktop-text  mx-2">
                  Men Embroidered polo T-shirt
                </span>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <span className="desktop-text  mx-2">All changed saved</span>
              </div>
            </div>

            <div className="d-block d-sm-none ">
              <button onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <BsChevronUp /> : <BsChevronDown />}
              </button>
            </div>

            {isMobileMenuOpen && (
              <div className="d-block d-sm-none">
                <p className="mx-2" style={{ cursor: "pointer" }}>
                  My Project
                </p>
                <p className="mx-2">Men Embroidered polo T-shirt</p>
                <p className="mx-2">All changed saved</p>
              </div>
            )}
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="row ">
              <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3  d-flex flex-column align-items-center ">
                {/* <HiOutlineClipboardCopy className="desktop-text " /> */}

                {/* <span
                  className="desktop-text  mx-2"
                  onClick={handleChangeTemplate}
                >
                  Change Template
                </span> */}
                <Button btn="Change Template" link={handleChangeTemplate} />
                <ChangeTemplate
                  show={changeTemplate}
                  onHide={() => setChangeTemplate(false)}
                />
              </div>
              <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3  d-flex flex-column align-items-center">
                <div className="desktop-text ">
                  {/* <AiOutlineEye className="desktop-text " />
                  <br /> */}
                  <Button btn="Preview" link={handlePreview} />
                  <Preview
                    show={isPreview}
                    onHide={() => setIsPreview(false)}
                  />
                </div>
              </div>
              <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3  d-flex flex-column align-items-center">
                {/* <GrTemplate className="desktop-text " />
                <br /> */}
                <Button btn="Specs & Template" link={handleSpace} />

                <SpaceTemplate
                  show={spaceTemplate}
                  onHide={() => setSpaceTemplate(false)}
                />
              </div>
              <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 desktop-text ">
                <Button btn="Next" link={handleNext} />
                <NextStep show={isNext} onHide={() => setIsNext(false)} />
                <Preview show={preview} onHide={() => setPreview(false)} />
              </div>
            </div>
          </div>

          <div className="d-block d-sm-none text-right">
            <button onClick={toggleMobileSubMenu}>
              {isMobileSubMenuOpen ? <BsChevronUp /> : <BsChevronDown />}
            </button>
          </div>

          {isMobileSubMenuOpen && (
            <div className="d-block d-sm-none">
              {/* <span className="mx-2" onClick={handleChangeTemplate}>
                Change Template
              </span>
              <ChangeTemplate
                show={changeTemplate}
                onHide={() => setChangeTemplate(false)}
              /> */}
              <div>
                <br />
                <span className="mx-2" onClick={handlePreview}>
                  Preview
                </span>
                <Preview show={isPreview} onHide={() => setIsPreview(false)} />
              </div>
              <span className="mx-2" onClick={handleSpace}>
                Specs & Template
              </span>
              <Button btn="Next" link={handleNext} />
              <NextStep show={isNext} onHide={() => setIsNext(false)} />
              {/* <bttton onClick={handleNext}>Next</bttton> */}
              <Preview show={preview} onHide={() => setPreview(false)} />
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-1 col-lg-1 col-xl-1 py-4">
            <div
              className="desktop-link  py-4 text-center"
              style={{ cursor: "pointer" }}
            >
              <div onClick={handleText}>
                <BsFillHCircleFill size={22} />
                <p>Text</p>
              </div>

              <div onClick={handleImage}>
                <BsImage size={22} />
                <p>Image</p>
              </div>
              <div>
                <TbIcons size={22} />
                <p>Icon</p>
              </div>

              <div onClick={handleColor}>
                <IoIosColorPalette size={22} />
                <p>Background</p>
              </div>
            </div>

            <Table responsive className="mobile-link">
              <thead>
                <tr>
                  <td>
                    <div onClick={handleText}>
                      <BsFillHCircleFill size={22} />
                      <p>Text</p>
                    </div>
                  </td>
                  <td>
                    <div onClick={handleImage}>
                      <BsImage size={22} />
                      <p>Image</p>
                    </div>
                  </td>
                  <td>
                    <div>
                      <TbIcons size={22} />
                      <p>Icon</p>
                    </div>
                  </td>
                  <td>
                    <div onClick={handleColor}>
                      <IoIosColorPalette size={22} />
                      <p>Background</p>
                    </div>
                  </td>
                </tr>
              </thead>
            </Table>
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 py-4">
            {colorPicker && <ColorPicker setCurrentColor={setCurrentColor} />}
            {isText && <AddText setDisplayText={setDisplayText} />}
            {imageUplaoad && (
              <ImageUpload setImageUploadData={setImageUploadData} />
            )}
          </div>
          <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 py-4">
            <div className="mx-auto d-flex justify-content-center flex-wrap">
              <img
                src={MyTshirt}
                alt="full"
                style={{
                  width: "440px",
                  height: "480px",
                  padding: "20px 0px",
                  position: "absolute",
                }}
              />
              <div
                style={{
                  border: "2px dotted black",
                  height: "120px",
                  width: "120px",
                  position: "relative",
                  marginTop: "90px",
                  marginLeft: "40px",
                  overflow: "hidden",
                }}
              ></div>
            </div>
            <div className="mx-auto d-flex justify-content-center flex-wrap edit-image">
              <div style={{ width: "100px", position: "relative" }}>
                <DisplayText textInput={displayText} />
                <DisplayImage imageUplaoadData={imageUplaoadData} />

                {/* <canvas
                  ref={editRef}
                  style={{ backgroundColor: currentColor }}
                  onChange={handleImageChange}
                >
                  <canvas
                    ref={imgRef}
                    style={{ background: imageUplaoad }}
                  ></canvas>
                  <canvas ref={canvasRef} className="img">
                    <useDragger imgRef={imgRef} />
                  </canvas>
                </canvas> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editor;

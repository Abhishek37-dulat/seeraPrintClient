import { Box, IconButton, Typography, styled } from "@mui/material";
import React, { useRef, useState } from "react";
import TitleRoundedIcon from "@mui/icons-material/TitleRounded";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";
import InterestsRoundedIcon from "@mui/icons-material/InterestsRounded";
import tempImage from "../../../assets/images/bb1.png";
import RectangleRoundedIcon from "@mui/icons-material/RectangleRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import PentagonRoundedIcon from "@mui/icons-material/PentagonRounded";
import HexagonRoundedIcon from "@mui/icons-material/HexagonRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ChangeHistoryRoundedIcon from "@mui/icons-material/ChangeHistoryRounded";
import ShapeLineRoundedIcon from "@mui/icons-material/ShapeLineRounded";
import CircleIcon from "@mui/icons-material/Circle";
import ExtensionIcon from "@mui/icons-material/Extension";

const MainEditor = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  marginTop: "100",
  zIndex: 10,
  //   height: "max-content",

  //   [theme.breakpoints.down("lsm")]: {
  //     flexDirection: "column",
  //   },
}));
const ItemBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100px",
  height: "100px",
  boxShadow: "0px 0px 3px rgba(0,0,0,0.3)",
  margin: "5px",
  position: "relative",
  backgroundColor: "#fff",
  zIndex: 10,
  "&>p": {
    fontFamily: "'Prompt', sans-serif",
    fontSize: "18px",
    fontWeight: "400",
    color: "#1e1e1e",
  },
}));

const TextBoxItem = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  position: "absolute",
  top: "0px",
  left: "120px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "300px",
  height: "max-content",
  boxShadow: "0px 0px 3px rgba(0,0,0,0.3)",
  borderRadius: "10px",
  padding: "10px",
  margin: "5px",
  zIndex: 10,
  backgroundColor: "#fff",
  "&>p:nth-of-type(1)": {
    fontFamily: "'Prompt', sans-serif",
    fontSize: "20px",
    fontWeight: "600",
    color: "#1e1e1e",
  },
  "&>p:nth-of-type(2)": {
    fontFamily: "'Prompt', sans-serif",
    fontSize: "18px",
    fontWeight: "400",
    color: "#1e1e1e",
  },
  "&>input": {
    width: "calc(100% - 20px)",
    padding: "10px 10px",
    marginTop: "10px",
    outline: "none",
    border: "none",
    borderBottom: "1px solid black",
  },
  "&>button": {
    fontFamily: "'Prompt', sans-serif",
    fontSize: "18px",
    fontWeight: "400",
    backgroundColor: "#1e1e1e",
    width: "calc(100% - 10px)",
    padding: "10px 10px",
    borderRadius: "20px",
    outline: "none",
    border: "none",
    color: "#fff",
    marginTop: "10px",
    marginLeft: "5px",
    cursor: "pointer",
    transition: "0.5s",
    ":hover": {
      transform: "scale(1.05)",
    },
    ":active": {
      transform: "scale(1)",
    },
  },
}));
const ImageBoxItem = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  position: "absolute",
  top: "0px",
  left: "120px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "300px",
  height: "350px",
  boxShadow: "0px 0px 3px rgba(0,0,0,0.3)",
  borderRadius: "10px",
  padding: "10px",
  margin: "5px",
  zIndex: 10,
  backgroundColor: "#fff",
}));

const ToggleImageFieldBox = styled(Box)(({ theme }) => ({
  borderBottom: "1px solid rgba(96,96,96,0.5)",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "calc(100% - 20px)",
  padding: "2px 10px",
  margin: "5px",
  zIndex: 10,
  backgroundColor: "#fff",
  "&>p": {
    fontFamily: "'Prompt', sans-serif",
    fontSize: "20px",
    fontWeight: "500",
    color: "#1e1e1e",
    marginRight: "10px",
    padding: "10px",
    cursor: "pointer",
  },
}));

const ImageBox1 = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "calc(100% - 20px)",
  borderRadius: "10px",
  padding: "10px",
  margin: "5px",
  zIndex: 10,
  backgroundColor: "#fff",
  "&>p:nth-of-type(1)": {
    fontFamily: "'Prompt', sans-serif",
    fontSize: "20px",
    fontWeight: "600",
    color: "#1e1e1e",
  },
  "&>p:nth-of-type(2)": {
    fontFamily: "'Prompt', sans-serif",
    fontSize: "14px",
    fontWeight: "400",
    color: "#1e1e1e",
  },
  "&>button": {
    fontFamily: "'Prompt', sans-serif",
    fontSize: "14px",
    fontWeight: "400",
    backgroundColor: "#1e1e1e",
    width: "calc(100% - 10px)",
    padding: "7px 10px",
    borderRadius: "20px",
    outline: "none",
    border: "none",
    color: "#fff",
    marginTop: "10px",
    marginLeft: "5px",
    cursor: "pointer",
    transition: "0.5s",
    ":hover": {
      transform: "scale(1.05)",
    },
    ":active": {
      transform: "scale(1)",
    },
  },
  "&>div": {
    // border: "1px solid black",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    height: "120px",
    marginTop: "5px",
    overflowY: "auto",
    "::-webkit-scrollbar": {
      width: "10px",
    },

    /* Track */
    "::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },

    /* Handle */
    "::-webkit-scrollbar-thumb": {
      background: "#888",
      ":hover": {
        background: "#555",
      },
    },
    "&>img": {
      width: "70px",
      height: "70px",
      borderRadius: "10px",
      boxShadow: "0px 0px 3px rgba(0,0,0,0.3)",
      padding: "5px",
      margin: "5px",
    },
  },
}));
const ShapeBoxItem = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  position: "absolute",
  top: "-100px",
  left: "120px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "300px",
  height: "350px",
  boxShadow: "0px 0px 3px rgba(0,0,0,0.3)",
  borderRadius: "10px",
  padding: "10px",
  margin: "5px",
  zIndex: 10,
  backgroundColor: "#fff",
}));
const ShapeBox1 = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "calc(100% - 20px)",
  borderRadius: "10px",
  padding: "10px",
  margin: "5px",
  zIndex: 10,
  backgroundColor: "#fff",
  "&>p:nth-of-type(1)": {
    fontFamily: "'Prompt', sans-serif",
    fontSize: "20px",
    fontWeight: "600",
    color: "#1e1e1e",
  },
  "&>p:nth-of-type(2)": {
    fontFamily: "'Prompt', sans-serif",
    fontSize: "14px",
    fontWeight: "400",
    color: "#1e1e1e",
  },
  "&>button": {
    fontFamily: "'Prompt', sans-serif",
    fontSize: "14px",
    fontWeight: "400",
    backgroundColor: "#1e1e1e",
    width: "calc(100% - 10px)",
    padding: "7px 10px",
    borderRadius: "20px",
    outline: "none",
    border: "none",
    color: "#fff",
    marginTop: "10px",
    marginLeft: "5px",
    cursor: "pointer",
    transition: "0.5s",
    ":hover": {
      transform: "scale(1.05)",
    },
    ":active": {
      transform: "scale(1)",
    },
  },
  "&>div": {
    // border: "1px solid black",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    height: "120px",
    marginTop: "5px",
    overflowY: "auto",
    "::-webkit-scrollbar": {
      width: "10px",
    },

    /* Track */
    "::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },

    /* Handle */
    "::-webkit-scrollbar-thumb": {
      background: "#888",
      ":hover": {
        background: "#555",
      },
    },
    "&>svg": {
      width: "70px",
      height: "70px",
      borderRadius: "10px",
      padding: "2px",
      margin: "2px",
      cursor: "pointer",
      transition: "0.5s",
      ":hover": {
        transform: "scale(1.05)",
      },
      ":active": {
        transform: "scale(1)",
      },
    },
  },
}));

const LeftFileds = ({
  textFieldValue,
  setTextFieldValue,
  addText,
  addImage,
  addCircle,
  addRectangle,
  addTriangle,
  addStar,
  addHeart,
  addHexagon,
  addPentagon,
  setShapDrawerCon,
}) => {
  const imageRef = useRef(null);

  const [uploadToggle, setUploadToggle] = useState(0);
  const [leftToggle, setLeftToggle] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const handleNewTextField = () => {
    console.log(textFieldValue);
    addText(textFieldValue);
  };

  const handleShapeEdit = () => {
    setShapDrawerCon(true);
  };

  const handleImageUpload = (e) => {
    e.preventDefault();
    const image = imageRef.current.click();
  };
  const handleNewImageField = (event) => {
    // console.log(event.target);
    const file = event?.target?.files[0];
    if (file) {
      const imageUrl = file;
      setUploadedImages([...uploadedImages, imageUrl]);

      setSelectedImage(imageUrl);
    }
  };
  const handleLeftToggle = (value) => {
    if (value === leftToggle) {
      setLeftToggle("");
    } else {
      setLeftToggle(value);
    }
  };

  return (
    <MainEditor>
      <ItemBox>
        <IconButton onClick={() => handleLeftToggle("text")}>
          <TitleRoundedIcon />
        </IconButton>
        <Typography>Text</Typography>
        {leftToggle === "text" ? (
          <TextBoxItem>
            <Typography>Text</Typography>
            <Typography>
              Edit your text below, or click on the field you'd like to edit
              directly on your design.
            </Typography>
            <input
              type="text"
              value={textFieldValue}
              onChange={(e) => setTextFieldValue(e.target.value)}
              placeholder="Enter Text Here"
            />
            <button onClick={(e) => handleNewTextField(e)}>
              New Text Field
            </button>
          </TextBoxItem>
        ) : null}
      </ItemBox>

      <ItemBox>
        <IconButton onClick={() => handleLeftToggle("image")}>
          <ImageRoundedIcon />
        </IconButton>
        <Typography>Images</Typography>
        {leftToggle === "image" ? (
          <ImageBoxItem>
            <ToggleImageFieldBox>
              <Typography
                style={{
                  borderBottom: `${
                    uploadToggle === 0 ? "4px solid black" : "2px solid #606060"
                  }`,
                }}
                onClick={() => setUploadToggle(0)}
              >
                Upload
              </Typography>
              <Typography
                style={{
                  borderBottom: `${
                    uploadToggle === 1 ? "4px solid black" : "2px solid #606060"
                  }`,
                }}
                onClick={() => setUploadToggle(1)}
              >
                Discover
              </Typography>
            </ToggleImageFieldBox>
            {uploadToggle === 0 ? (
              <ImageBox1>
                <Typography>Accepted formats</Typography>
                <Typography>
                  .jpg, .jpeg, .jfif, .bmp, .png, .gif, .heic, .svg, .pdf, .psd,
                  .ai, .eps, .ait, .ppt, .pptx, .tif, .tiff
                </Typography>
                <input
                  type="file"
                  ref={imageRef}
                  style={{ display: "none" }}
                  onChange={handleNewImageField}
                />
                <button onClick={(e) => handleImageUpload(e)}>
                  Upload Logo or Image
                </button>
                <Box>
                  {uploadedImages
                    ? uploadedImages?.length > 0
                      ? uploadedImages.map((data, index) => {
                          return (
                            <img
                              onClick={() => addImage(data)}
                              key={index}
                              src={URL.createObjectURL(data)}
                              alt="bb1"
                            />
                          );
                        })
                      : null
                    : null}
                </Box>
              </ImageBox1>
            ) : (
              <ImageBox1>
                <Box style={{ height: "250px" }}>
                  <img src={tempImage} alt="bb1" />
                  <img src={tempImage} alt="bb1" />
                  <img src={tempImage} alt="bb1" />
                  <img src={tempImage} alt="bb1" />
                  <img src={tempImage} alt="bb1" />
                  <img src={tempImage} alt="bb1" />
                  <img src={tempImage} alt="bb1" />
                  <img src={tempImage} alt="bb1" />
                  <img src={tempImage} alt="bb1" />
                  <img src={tempImage} alt="bb1" />
                  <img src={tempImage} alt="bb1" />
                  <img src={tempImage} alt="bb1" />
                  <img src={tempImage} alt="bb1" />
                  <img src={tempImage} alt="bb1" />
                  <img src={tempImage} alt="bb1" />
                  <img src={tempImage} alt="bb1" />
                  <img src={tempImage} alt="bb1" />
                  <img src={tempImage} alt="bb1" />
                </Box>
              </ImageBox1>
            )}
          </ImageBoxItem>
        ) : null}
      </ItemBox>
      <ItemBox>
        <IconButton onClick={() => handleLeftToggle("shape")}>
          <InterestsRoundedIcon />
        </IconButton>
        <Typography>Shapes</Typography>
        {leftToggle === "shape" ? (
          <ShapeBoxItem>
            <ShapeBox1>
              <Typography>Shapes & Icons</Typography>
              <Box style={{ height: "280px" }}>
                <RectangleRoundedIcon onClick={() => addRectangle()} />
                <StarRateRoundedIcon onClick={() => addStar()} />
                <PentagonRoundedIcon onClick={() => addPentagon()} />
                <HexagonRoundedIcon onClick={() => addHexagon()} />
                <FavoriteRoundedIcon onClick={() => addHeart()} />
                <ChangeHistoryRoundedIcon onClick={() => addTriangle()} />
                <ShapeLineRoundedIcon />
                <CircleIcon onClick={() => addCircle()} />
              </Box>
            </ShapeBox1>
          </ShapeBoxItem>
        ) : null}
      </ItemBox>
      <ItemBox>
        <IconButton onClick={() => handleShapeEdit()}>
          <ExtensionIcon />
        </IconButton>
        <Typography style={{ textAlign: "center" }}>Shapes Colors</Typography>
      </ItemBox>
    </MainEditor>
  );
};

export default LeftFileds;

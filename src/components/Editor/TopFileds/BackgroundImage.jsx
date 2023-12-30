import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import { ChromePicker } from "react-color";
import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";
import BackgroundColorChange from "./BackgroundColorChangeBox";
import ColorBox from "./ColorBox";

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "30px",
  marginLeft: "10px",
  marginRight: "10px",
  "&>div": {
    "&>svg": {
      fontSize: "36px",
      color: "#1e1e1e",
      cursor: "pointer",
    },
  },
}));

const ColorBoxItem = styled(Box)(({ theme }) => ({
  position: "relative",
  left: "-130px",
  top: "10px",
}));

const BackgroundImage = ({ setBackgroundImageBox }) => {
  const ImageBoxRef = useRef(null);
  const [ImageBoxCondition, setImageBoxCondition] = useState(null);
  const handleSelectImage = (e) => {
    e.preventDefault();
    ImageBoxRef.current.click();
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageBoxCondition(event.target.result);
        setBackgroundImageBox(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    setBackgroundImageBox(ImageBoxCondition);
  }, [ImageBoxCondition, setBackgroundImageBox]);

  return (
    <>
      <MainBox>
        <Box>
          <PhotoCameraBackIcon onClick={(e) => handleSelectImage(e)} />
        </Box>
        <input
          type="file"
          name="image"
          id="image"
          style={{ display: "none" }}
          ref={ImageBoxRef}
          onChange={handleImageUpload}
        />
        <Typography>Background Image</Typography>
      </MainBox>
    </>
  );
};

export default BackgroundImage;

import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import { ChromePicker } from "react-color";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import BackgroundColorChange from "./BackgroundColorChangeBox";
import ColorBox from "./ColorBox";

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "30px",
  marginLeft: "10px",
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

const BackgroundColorChangeBox = ({
  setBackSelectColor,
  addBackGroundColor,
}) => {
  const colorBoxRef = useRef(null);
  const [fontColor, setFontColor] = useState("#D6D6D6");
  const [colorBoxCondition, setColorBoxCondition] = useState(false);
  const handleColorChange = (color) => {
    setBackSelectColor(color.hex);
    setFontColor(color.hex);
  };
  const handleClickOutside = (event) => {
    if (colorBoxRef.current && !colorBoxRef.current.contains(event.target)) {
      setColorBoxCondition(false);
    }
  };
  useEffect(() => {
    setBackSelectColor(fontColor);
    addBackGroundColor(fontColor);
  }, [fontColor, setBackSelectColor]);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <MainBox>
        <Box>
          <FormatColorFillIcon
            onClick={() => setColorBoxCondition(!colorBoxCondition)}
          />
        </Box>
        <Typography>Background Color</Typography>
      </MainBox>
      {colorBoxCondition ? (
        <ColorBoxItem ref={colorBoxRef}>
          <ChromePicker color={fontColor} onChange={handleColorChange} />
        </ColorBoxItem>
      ) : null}
    </>
  );
};

export default BackgroundColorChangeBox;

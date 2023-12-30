import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import BackgroundColorChangeBox from "./BackgroundColorChangeBox";
import { Typography, styled } from "@mui/material";
import BackgroundImage from "./BackgroundImage";

const SliderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "50px",
}));

export default function BackgroundImageBoxSlider({ setValueForTopBottom }) {
  const handleChange = (event, newValue) => {
    setValueForTopBottom(newValue);
    console.log(newValue);
  };
  const marks = [
    {
      value: -700,
      label: "Top",
    },
    {
      value: 700,
      label: "Bottom",
    },
  ];
  return (
    <SliderBox sx={{ width: 200 }}>
      <Slider
        defaultValue={10}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={handleChange}
        max={700}
        min={-700}
        marks={marks}
      />
      <Typography>Background Image</Typography>
    </SliderBox>
  );
}

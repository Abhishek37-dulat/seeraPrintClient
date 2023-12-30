import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import BackgroundColorChangeBox from "./BackgroundColorChangeBox";
import { Typography, styled } from "@mui/material";

const SliderBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "50px",
}));

export default function BackgroundImageScaleX({ setImageValueForLeftRight }) {
  const handleChange = (event, newValue) => {
    setImageValueForLeftRight(newValue);
    console.log(newValue);
  };
  const marks = [
    {
      value: 0,
      label: "ScaleX 0",
    },
    {
      value: 1,
      label: "ScaleX 1",
    },
  ];
  return (
    <SliderBox sx={{ width: 200 }}>
      <Slider
        defaultValue={0.5}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={handleChange}
        max={1}
        min={0}
        step={0.1}
        marks={marks}
      />
      <Typography>Background Image</Typography>
    </SliderBox>
  );
}

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

export default function BackgroundImageScaleY({ setImageValueForTopBottom }) {
  const handleChange = (event, newValue) => {
    setImageValueForTopBottom(newValue);
    console.log(newValue);
  };
  const marks = [
    {
      value: 0,
      label: "ScaleY 0",
    },
    {
      value: 1,
      label: "ScaleY 1",
    },
  ];
  return (
    <SliderBox sx={{ width: 200 }}>
      <Slider
        defaultValue={1}
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

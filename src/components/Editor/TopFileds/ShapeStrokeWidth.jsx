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

export default function ShapeStrokeWidth({
  setShapeStrokeWidth,
  addShapeStrokeWidth,
}) {
  const handleChange = (event, newValue) => {
    setShapeStrokeWidth(newValue);
    addShapeStrokeWidth(newValue);
    console.log(newValue);
  };
  const marks = [
    {
      value: 0,
      label: "ScaleX 0",
    },
    {
      value: 10,
      label: "ScaleX 10",
    },
  ];
  return (
    <SliderBox sx={{ width: 200 }}>
      <Slider
        defaultValue={0}
        aria-label="Default"
        valueLabelDisplay="auto"
        onChange={handleChange}
        max={10}
        min={0}
        step={0.5}
        marks={marks}
      />
      <Typography>Border Width</Typography>
    </SliderBox>
  );
}

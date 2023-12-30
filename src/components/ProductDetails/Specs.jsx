import {
  Box,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";

const MainBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  // [theme.breakpoints.down("msm")]: {
  //   flexDirection: "column-reverse",
  // },
}));

const LeftBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "70%",
  padding: "50px",
  fontFamily: "'M PLUS Rounded 1c', sans-serif",
  color: "#010101",
  "&>p": {
    fontSize: "36px",
    fontWeight: "600",
  },
}));
const CardBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  backgroundColor: "#F8F8F8",
  padding: "10px",
  color: "#010101",
  "&>div": {
    // border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    color: "#010101",
    "&>p": {
      // border: "1px solid black",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      width: "100%",
      "&>span": {
        marginLeft: "20px",
        fontSize: "14px",
      },
    },

    "&>div": {
      // border: "1px solid black",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "100px",
      backgroundColor: "#fff",
      color: "#010101",
    },
  },
}));

const RightBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "30%",
  padding: "50px",
  fontFamily: "'M PLUS Rounded 1c', sans-serif",
  color: "#010101",
  "&>p": {
    marginLeft: "10px",
    marginTop: "10px",
  },
  "&>div": {
    width: "100%",
  },
}));

const Specs = () => {
  const [selectionName, setSelectionName] = useState("");
  const handleSelectionChange = (e) => {
    setSelectionName(e.target.value);
  };
  console.log(selectionName);
  return (
    <MainBox>
      <LeftBox>
        <Typography>Product Specs & Templates</Typography>
        <CardBox>
          <Box>
            <Box>
              <Typography
                style={{
                  fontSize: "36px",
                  fontWeight: "600",
                  color: "#C5CDCC",
                  textAlign: "center",
                }}
              >
                SAFE AREA
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography>
              <span style={{ fontWeight: "500", fontSize: "16px" }}>
                Full Bleed Size
              </span>{" "}
              <span>
                4" x 4"
                <br />
                101.6 x 101.6 mm
              </span>
            </Typography>
            <Typography>
              <span style={{ fontWeight: "500", fontSize: "16px" }}>
                Document Trim Size
              </span>{" "}
              <span>
                4" x 4"
                <br />
                101.6 x 101.6 mm
              </span>
            </Typography>
          </Box>
        </CardBox>
      </LeftBox>
      <RightBox>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            value={selectionName}
            onChange={handleSelectionChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>Color</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Typography>
          To avoid white edges, extend your design to the full bleed size – but
          keep text and images within the safety area.
        </Typography>
        <Typography>
          Create your print-ready file. Download the template.
        </Typography>
        <Typography>
          <u style={{ cursor: "pointer" }}>PDF</u> |{" "}
          <u style={{ cursor: "pointer" }}>SVG</u> |{" "}
          <u style={{ cursor: "pointer" }}>Adobe Illustrator (.ai)</u>
        </Typography>
      </RightBox>
    </MainBox>
  );
};

export default Specs;

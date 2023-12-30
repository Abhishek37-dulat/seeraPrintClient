import { Box, Typography, styled } from "@mui/material";
import React, { useEffect } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { useState } from "react";

const MainBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "150px",
  height: "50px",
  marginTop: "12px",
}));
const LeftBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "40px",
  height: "40px",
  borderRadius: "10px",
  boxShadow: "0px 0px 3px rgba(0,0,0,0.3)",
  cursor: "pointer",
  transition: "0.5s",
  ":hover": {
    transform: "scale(1.05)",
  },
  ":active": {
    transform: "scale(1)",
  },
  "&>svg": {
    color: "#1e1e1e",
  },
}));
const MidBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0px 0px 3px rgba(0,0,0,0.3)",
  width: "60px",
  height: "40px",
  "&>p": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    fontSize: "24px",
  },
}));
const RightBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "40px",
  height: "40px",
  borderRadius: "10px",
  boxShadow: "0px 0px 3px rgba(0,0,0,0.3)",
  cursor: "pointer",
  transition: "0.5s",
  ":hover": {
    transform: "scale(1.05)",
  },
  ":active": {
    transform: "scale(1)",
  },
  "&>svg": {
    color: "#1e1e1e",
  },
}));

const FontSizeBox = ({ setSelectFontSize }) => {
  const [fontSizeNumber, setFontSizeNumber] = useState(16);
  const handleIncrement = () => {
    setFontSizeNumber(fontSizeNumber + 1);
    setSelectFontSize(fontSizeNumber + 1);
  };
  const handleDecrement = () => {
    if (fontSizeNumber > 4) {
      setFontSizeNumber(fontSizeNumber - 1);
      setSelectFontSize(fontSizeNumber - 1);
    }
  };
  return (
    <MainBox>
      <LeftBox onClick={() => handleDecrement()}>
        <RemoveRoundedIcon />
      </LeftBox>
      <MidBox>
        <Typography>{fontSizeNumber}</Typography>
      </MidBox>
      <RightBox onClick={() => handleIncrement()}>
        <AddRoundedIcon />
      </RightBox>
    </MainBox>
  );
};

export default FontSizeBox;

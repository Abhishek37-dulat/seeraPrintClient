import { Box, Typography, styled } from "@mui/material";
import React from "react";
const MainEditor = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100px",
  height: "120px",
  borderRadius: "5px",
  boxShadow: "0px 0px 5px rgba(0,0,0,0.3)",
  cursor: "pointer",
  margin: "3px",
  padding: "2px",
  transition: "0.5s",
  ":hover": {
    transform: "scale(1.05)",
  },
  ":active": {
    transform: "scale(1)",
  },

  //   [theme.breakpoints.down("lsm")]: {
  //     flexDirection: "column",
  //   },
}));

const TopFiled = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "50%",
  backgroundColor: "#D6D6D6",
  borderRadius: "5px",
  "&>div": {
    width: "calc(100% - 20px)",
    height: "calc(100% - 20px)",
    padding: "5px",
    backgroundColor: "#fff",
  },

  //   [theme.breakpoints.down("lsm")]: {
  //     flexDirection: "column",
  //   },
}));
const BottomFiled = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "50%",
  backgroundColor: "#fff",

  //   [theme.breakpoints.down("lsm")]: {
  //     flexDirection: "column",
  //   },
}));
const SelectItem = ({ name, value }) => {
  return (
    <MainEditor>
      <TopFiled>
        <Box>{value ? <img src="" alt="" /> : null}</Box>
      </TopFiled>
      <BottomFiled>
        <Typography>{name}</Typography>
      </BottomFiled>
    </MainEditor>
  );
};

export default SelectItem;

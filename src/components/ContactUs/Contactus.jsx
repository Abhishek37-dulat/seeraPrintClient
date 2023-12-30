import { Box, styled } from "@mui/material";
import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import MoreDetails from "./MoreDetails";
import PopularDetails from "./PopularDetails";
const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
}));
const Contactus = () => {
  return (
    <MainBox>
      <Section1 />
      <Section2 />
      <MoreDetails />
      <PopularDetails />
    </MainBox>
  );
};

export default Contactus;

import { Box, Typography, styled } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import OverView from "./OverView";
import Specs from "./Specs";
import SizeChart from "./SizeChart";
import Faqs from "./Faqs";
import gsap from "gsap";

const MainBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "90%",
  overflow: "hidden",
  paddingLeft: "5%",
  paddingRight: "5%",
}));

const TopLayer = styled(Box)(({ theme }) => ({
  borderBottom: "1px solid #f2f2f2",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    overflowX: "scroll",
  },
  "&>div": {
    margin: "10px",
    padding: "5px",
    cursor: "pointer",
    transition: "1s",
    "&>div": {
      // border: "1px solid black",
      width: "0%",
      height: "2px",
      borderRadius: "2px",
      backgroundColor: "#138ede",
      transition: "1s",
    },
  },
}));

const DetailLayer = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  overflow: "hidden",
}));

const ProductUnderDetails = () => {
  const tabRef = useRef(null);
  const [tabNum, setTabNum] = useState(0);
  const handleTabSwitch = (num) => {
    setTabNum(num);
  };
  useEffect(() => {
    const parentWidth = tabRef.current.parentNode.offsetWidth;
    // tabRef.current.style.width = "0%";
    gsap.to(tabRef.current, {
      width: parentWidth - 10,
      duration: 0.2,
      ease: "none",
    });
  }, [tabNum]);
  return (
    <MainBox>
      <TopLayer>
        <Box onClick={() => handleTabSwitch(0)}>
          <Typography>Overview</Typography>
          {tabNum === 0 && <Box ref={tabRef}></Box>}
        </Box>
        <Box onClick={() => handleTabSwitch(1)}>
          <Typography>Specs&Templates</Typography>
          {tabNum === 1 && <Box ref={tabRef}></Box>}
        </Box>
        <Box onClick={() => handleTabSwitch(2)}>
          <Typography>Size&#160;Charts</Typography>
          {tabNum === 2 && <Box ref={tabRef}></Box>}
        </Box>
        <Box onClick={() => handleTabSwitch(3)}>
          <Typography>FAQ</Typography>
          {tabNum === 3 && <Box ref={tabRef}></Box>}
        </Box>
      </TopLayer>
      <DetailLayer>
        {tabNum === 0 && <OverView />}
        {tabNum === 1 && <Specs />}
        {tabNum === 2 && <SizeChart />}
        {tabNum === 3 && <Faqs />}
      </DetailLayer>
    </MainBox>
  );
};

export default ProductUnderDetails;

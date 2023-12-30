import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography, styled } from "@mui/material";
import React from "react";
import ContactUs from "../../ConstantData/contactus.json";

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  marginTop: "50px",
}));
const LeftBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "30%",
  "&>p": {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "16px",
    fontWeight: "500",
    color: "#010101",
    cursor: "pointer",
    ":hover": {
      textDecoration: "underline",
    },
  },
}));
const RightBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "70%",
  "&>p": {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "42px",
    fontWeight: "400",
    color: "#010101",
    marginBottom: "20px",
  },
  "&>div": {
    width: "100%",
    "&>p": {
      borderBottom: "1px solid #ECEEEF",
      fontFamily: "'Poppins', sans-serif",
      fontSize: "16px",
      fontWeight: "300",
      color: "#010101",
      marginTop: "20px",
      width: "90%",
      paddingBottom: "10px",
      cursor: "pointer",
      ":hover": {
        textDecoration: "underline",
      },
    },
  },
}));
const MoreDetails = () => {
  return (
    <MainBox>
      <LeftBox>
        <Typography>
          <FontAwesomeIcon icon={faArrowLeft} />
          &#160;&#160;Back to Help Centre
        </Typography>
      </LeftBox>
      <RightBox>
        <Typography>Updates to My Account</Typography>
        <Box>
          {ContactUs.helpcenter.new.map((data, index) => {
            return <Typography>{data}</Typography>;
          })}
        </Box>
      </RightBox>
    </MainBox>
  );
};

export default MoreDetails;

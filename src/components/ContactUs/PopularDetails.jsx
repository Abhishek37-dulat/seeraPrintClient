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
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));
const LeftBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "20%",
  [theme.breakpoints.up("sm")]: {
    width: "20%",
    marginBottom: 0,
  },
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

const MidBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "50%",
  "&>p": {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "36px",
    fontWeight: "400",
    color: "#010101",
    marginBottom: "20px",
  },
  "&>div": {
    width: "100%",
    "&>p": {
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
  [theme.breakpoints.up("sm")]: {
    width: "50%",
  },
}));

const RightBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "30%",
  "&>p": {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "24px",
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
  [theme.breakpoints.up("sm")]: {
    width: "30%",
  },
}));
const PopularDetails = () => {
  return (
    <MainBox>
      <LeftBox>
        <Typography>
          <FontAwesomeIcon icon={faArrowLeft} />
          &#160;&#160;Back
        </Typography>
      </LeftBox>
      <MidBox>
        <Typography>Where's my order?</Typography>
        <Box>
          <Typography>
            Once payment for your order is received, we'll send an order
            confirmation to the email address associated with your VistaPrint
            account. Once your order ships, you'll receive an email notification
            with a tracking number.
          </Typography>
          <Typography>
            You can view your order status 24 hours a day from your Order
            History page:
          </Typography>
        </Box>
      </MidBox>
      <RightBox>
        <Typography>Related Questions</Typography>
        <Box>
          {ContactUs.helpcenter.new.map((data, index) => {
            return <Typography>{data}</Typography>;
          })}
        </Box>
      </RightBox>
    </MainBox>
  );
};

export default PopularDetails;

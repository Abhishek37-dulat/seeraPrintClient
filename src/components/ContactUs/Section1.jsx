import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const MainBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "40vh",
  backgroundColor: "#138EDE",
}));
const MainText = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  "&>p": {
    color: "#fff",
    // fontFamily: "'M PLUS Rounded 1c', sans-serif",
    fontSize: "54px",
    fontWeight: "600",
  },
}));

const SearchBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: "10px",
  "&>div": {
    // border: "1px solid black",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
  },
}));

const LeftSearch = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "3%",
  padding: "11.6px",
  borderRadius: "20px 0px 0px 20px",
  backgroundColor: "#fff",
}));
const RightSearch = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "80%",
  backgroundColor: "#fff",
  borderRadius: "0px 20px 20px 0px",
  "&>input": {
    width: "90%",
    padding: "12px 0px",
    borderRadius: "0px 20px 20px 0px",
    border: "none",
    outline: "none",
    fontSize: "20px",
  },
}));

const EndText = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: "10px",
  "&>p": {
    color: "#fff",
    fontSize: "18px",
  },
}));
const Section1 = () => {
  return (
    <MainBox>
      <MainText>
        <Typography>Help is here.</Typography>
      </MainText>
      <SearchBox>
        <Box>
          <LeftSearch>
            <Typography>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Typography>
          </LeftSearch>
          <RightSearch>
            <input type="text" placeholder="Search for an article or answer" />
          </RightSearch>
        </Box>
      </SearchBox>
      <EndText>
        <Typography>
          <FontAwesomeIcon icon={faBox} /> <b>Need help tracking an order?</b>{" "}
          <small>
            <u>Find and track an order</u>
          </small>
        </Typography>
      </EndText>
    </MainBox>
  );
};

export default Section1;

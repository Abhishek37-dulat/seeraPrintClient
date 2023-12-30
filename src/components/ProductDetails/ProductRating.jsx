import { Box, Rating, Typography, styled } from "@mui/material";
import React from "react";
import Prating from "../../ConstantData/ratingdb.json";

const MainBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  overflow: "hidden",
}));

const LeftBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  overflow: "hidden",
  padding: "20px 0px",
  marginTop: "20px",
}));

const RightBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "50%",
  overflow: "hidden",
  flexWrap: "wrap",
  marginTop: "20px",
  "&>div": {
    // border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "300px",
    padding: "10px",
    margin: "20px",
    "&>div": {
      // border: "1px solid black",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      width: "100%",
      "&>div": {
        marginTop: "10px",
        width: "18%",
        marginRight: "2px",
        height: "5px",
        borderRadius: "5px",
        backgroundColor: "#FAAF00",
      },
    },
  },
}));

const ProductRating = () => {
  return (
    <MainBox>
      <LeftBox>
        <Typography>4.7</Typography>
        <Typography>
          {" "}
          <Rating name="read-only" value={5} readOnly />
        </Typography>
        <u>
          <Typography style={{ cursor: "pointer" }}>124 reviews</Typography>
        </u>
      </LeftBox>
      <RightBox>
        {Prating?.rating?.map((data) => {
          return (
            <Box>
              <Box>
                <Typography>{data?.name}</Typography>
                <Typography style={{ fontWeight: "600", fontSize: "14px" }}>
                  {data?.rating}
                </Typography>
              </Box>
              <Box style={{ justifyContent: "flex-start" }}>
                {Array.from({ length: data.rating }).map((_, i) => (
                  <Box key={`rating_${i}`}></Box>
                ))}
              </Box>
            </Box>
          );
        })}
      </RightBox>
    </MainBox>
  );
};

export default ProductRating;

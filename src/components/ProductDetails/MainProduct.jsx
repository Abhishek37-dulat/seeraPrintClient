import { Box, Rating, styled, Typography } from "@mui/material";
import React from "react";
import B1 from "../../images/bb1.png";
import B2 from "../../images/bb2.png";
import { Scale } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import UploadIcon from "@mui/icons-material/Upload";
import {useNavigate} from "react-router-dom"

const MainBox = styled(Box)(({ theme }) => ({
  borderBottom: "1px solid #f2f2f2",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  overflow: "hidden",
  marginBottom: "20px",
  [theme.breakpoints.down("msm")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.down("msm")]: {
    flexDirection: "column",
  },
}));
const ImageBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  position: "relative",
  [theme.breakpoints.down("msm")]: {
    width: "100%",
  },
}));
const BackgroundText = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "10%",
  position: "absolute",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "2",
  "&>p": {
    fontSize: "125px",
    color: "rgba(0,1,12,0.4)",
  },
}));
const MainImage = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "300px",
  zIndex: "3",
  [theme.breakpoints.down("sm")]: {
    width: "200px",
  },
  "&>div": {
    width: "100%",
    "&>img": {
      width: "100%",
    },
  },
}));

const SmallImages = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  margin: "5px 0px",

  "&>div": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    "&>div": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "70px",
      padding: "10px",
      BackgroundColor: "#fff",
      borderRadius: "5px",
      cursor: "pointer",
      boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
      transition: "transform 0.4s",
      margin: "5px",

      ":hover": {
        boxShadow: "0px 0px 10px rgba(0,0,0,0.4)",
        transform: "scale(1.1)",
      },

      "&>img": {
        height: "100%",
      },
    },
    "&>span": {
      width: "100%",
      height: "3px",
      borderRadius: "3px",
      backgroundColor: "#252F43",
      position: "absolute",
      bottom: "-5px",
    },
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "50%",
  [theme.breakpoints.down("lmd")]: {
    paddingLeft: "5%",
  },
  [theme.breakpoints.down("md")]: {
    paddingLeft: "10%",
  },
  [theme.breakpoints.down("lsm")]: {
    paddingLeft: "15%",
  },
  [theme.breakpoints.down("msm")]: {
    width: "93%",
    paddingLeft: "2%",
    paddingRight: "5%",
    marginTop: "20px",
  },
  // [theme.breakpoints.down("sm")]: {
  //   width: "93%",
  //   paddingLeft: "2%",
  //   paddingRight: "5%",
  //   marginTop: "20px",
  // },

  "&>div:nth-of-type(2)": {
    "&>p": {
      fontSize: "36px",
      fontWeight: "600",
      color: "#010101",
    },
    marginTop: "10px",
  },
  "&>div:nth-of-type(3)": {
    "&>p": {
      fontSize: "16px",
      fontWeight: "500",
      paddingRight: "150px",
      color: "#010101",
      [theme.breakpoints.down("lmd")]: {
        paddingRight: "10px",
      },
    },
    marginTop: "10px",
  },
  "&>div:nth-of-type(4)": {
    marginTop: "10px",
    "&>p": {
      fontSize: "14px",
      fontWeight: "500",
      color: "rgba(0,0,0,.6)",
      fontFamily: "'M PLUS Rounded 1c', sans-serif",
    },
    "&>div": {
      marginTop: "5px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      "&>p": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "14px",
        fontWeight: "500",
        color: "#010101",
        backgroundColor: "#F0F0F0",
        fontFamily: "'M PLUS Rounded 1c', sans-serif",
        width: "20px",
        padding: "20px",
        height: "20px",
        margin: "5px",
        borderRadius: "100%",
        cursor: "pointer",
        textAlign: "center",
        transition: "transform 0.2s",
        ":hover": {
          color: "#f0f0f0",
          backgroundColor: "#138ede",
          transform: "scale(1.2)",
        },
      },
    },
  },
  "&>div:nth-of-type(5)": {
    marginTop: "10px",
    "&>p": {
      fontSize: "14px",
      fontWeight: "500",
      color: "rgba(0,0,0,.6)",
      fontFamily: "'M PLUS Rounded 1c', sans-serif",
    },
    "&>div": {
      marginTop: "5px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      "&>p": {
        fontSize: "14px",
        fontWeight: "500",
        color: "#010101",
        backgroundColor: "#F0F0F0",
        fontFamily: "'M PLUS Rounded 1c', sans-serif",
        width: "20px",
        padding: "5px",
        height: "20px",
        margin: "5px",
        borderRadius: "100%",
        cursor: "pointer",
        textAlign: "center",
        transition: "transform 0.3s",
        ":hover": {
          boxShadow: "0px 0px 5px rgba(0,0,0,0.5)",
          transform: "scale(1.2)",
        },
      },
    },
  },
  "&>div:nth-of-type(6)": {
    marginTop: "10px",
    "&>p": {
      fontSize: "36px",
      fontWeight: "600",
      color: "#010101",
      fontFamily: "'M PLUS Rounded 1c', sans-serif",
    },
  },
  "&>div:nth-of-type(7)": {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: "20px",
    [theme.breakpoints.down("msm")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    "&>div:nth-of-type(1)": {
      [theme.breakpoints.down("msm")]: {
        marginLeft: "10px",
      },
      "&>button": {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        fontSize: "14px",
        fontWeight: "500",
        marginTop: "5px",
        color: "#fff",
        fontFamily: "'M PLUS Rounded 1c', sans-serif",
        padding: "15px 30px",
        backgroundColor: "#010101",
        border: "none",
        outline: "none",
        boxShadow: "0px 0px 3px rgba(0,0,0,0.3)",
        borderRadius: "4px",
        transition: "transform 0.5s",
        cursor: "pointer",
        "&>div": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          "&>p":{
            color:"#fff"
          }
        },
        ":hover": {
          transform: "scale(1.05)",
        },
      },
    },
    "&>div:nth-of-type(2)": {
      [theme.breakpoints.down("msm")]: {
        marginLeft: "10px",
      },
      "&>button": {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        fontSize: "14px",
        fontWeight: "500",
        marginTop: "5px",
        color: "#000",
        fontFamily: "'M PLUS Rounded 1c', sans-serif",
        padding: "15px 30px",
        backgroundColor: "#010101",
        border: "none",
        outline: "none",
        boxShadow: "0px 0px 3px rgba(0,0,0,0.3)",
        borderRadius: "4px",
        transition: "transform 0.5s",
        cursor: "pointer",
        "&>div": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          
        },
        ":hover": {
          transform: "scale(1.05)",
        },
      },
    },
  },
}));

const MainProduct = () => {
  const navigate = useNavigate()
  return (
    <MainBox>
      <ImageBox>
        <BackgroundText>
          <Typography>American</Typography>
        </BackgroundText>
        <MainImage>
          <Box>
            <img src={B1} alt="bagimage" />
          </Box>
        </MainImage>
        <SmallImages>
          <Box>
            <Box>
              <img src={B1} alt="bagimage" />
            </Box>
            <span></span>
          </Box>
          <Box>
            <Box>
              <img src={B2} alt="bagimage" />
            </Box>
          </Box>
        </SmallImages>
      </ImageBox>
      <ContentBox>
        <Box>
          <Rating name="read-only" value={4} readOnly />
        </Box>
        <Box>
          <Typography>Hand Bag Slogans And Taglines</Typography>
        </Box>
        <Box>
          <Typography>
            Slogans are one of the effective ways to draw attention to things.
            Making interesting and easy slogans is not a small feat. Nowadays,
            slogans are everywhere in any business to point toward the benefit
            of a product. Here are some catchy slogans for your handbag.
          </Typography>
        </Box>
        <Box>
          <Typography>SELECT SIZE</Typography>
          <Box>
            <Typography>42</Typography>
            <Typography>44</Typography>
            <Typography>46</Typography>
            <Typography>48</Typography>
          </Box>
        </Box>
        <Box>
          <Typography>Colour</Typography>
          <Box>
            <Typography style={{ backgroundColor: "#FDB308" }}></Typography>
            <Typography style={{ backgroundColor: "#474FA0" }}></Typography>
            <Typography style={{ backgroundColor: "#2DB484" }}></Typography>
            <Typography style={{ backgroundColor: "#414D63" }}></Typography>
          </Box>
        </Box>
        <Box>
          <Typography>$225</Typography>
        </Box>
        <Box>
          <Box>
            <button onClick={()=>navigate("/editor")}>
              <Box>
                <Typography style={{ fontSize: "18px" }}>
                  Browse designs
                </Typography>
                <Typography style={{ fontSize: "14px", fontWeight: "400" }}>
                  Choose one of our templates
                </Typography>
              </Box>
              <Box style={{ marginLeft: "50px" }}>
                <Typography>
                  <PhotoLibraryIcon />
                </Typography>
              </Box>
            </button>
          </Box>
          <Box>
            <button style={{ backgroundColor: "#fff", color: "#010101" }} onClick={()=>navigate("/editor")}>
              <Box>
                <Typography style={{ fontSize: "18px" }}>
                  Upload design
                </Typography>
                <Typography style={{ fontSize: "14px", fontWeight: "400" }}>
                  Have a design? Upload and edit it
                </Typography>
              </Box>
              <Box style={{ marginLeft: "50px" }}>
                <Typography>
                  <UploadIcon />
                </Typography>
              </Box>
            </button>
          </Box>
        </Box>
      </ContentBox>
    </MainBox>
  );
};

export default MainProduct;

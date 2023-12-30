import { Box, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import Product from "../../ConstantData/productdb.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const MainCarousel = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  marginTop: "100px",
  marginBottom: "100px",
  width: "100%",
  "&>p": {
    fontFamily: "'M PLUS Rounded 1c', sans-serif",
    color: "#010101",
    fontSize: "36px",
    fontWeight: "600",
    marginBottom: "50px",
    [theme.breakpoints.down("lxs")]: {
      fontSize: "24px",
    },
  },
}));
const ContentBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "flex-start",
  width: "100%",
  position: "relative",
  "&>div": {
    // border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "250px",
    [theme.breakpoints.down("lg")]: {
      width: "200px",
    },
    [theme.breakpoints.down("lmd")]: {
      width: "150px",
    },
    [theme.breakpoints.down("lsm")]: {
      width: "200px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "250px",
    },
    [theme.breakpoints.down("lxs")]: {
      width: "200px",
    },
    "&>div": {
      // border: "1px solid black",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: "100%",
      "&>p": {
        marginTop: "5px",
      },
      "&>img": {
        width: "100%",
      },
    },
  },
}));

const LeftBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  left: "0px",
  width: "100px",
  height: "100px",
  "&>p": {
    // border: "1px solid black",
    width: "50px",
    height: "50px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 5px rgba(0,0,0,0.3)",
    cursor: "pointer",
  },
}));

const RightBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  right: "0px",
  width: "100px",
  height: "100px",
  "&>p": {
    // border: "1px solid black",
    width: "50px",
    height: "50px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 5px rgba(0,0,0,0.3)",
    cursor: "pointer",
  },
}));

const RelatedProduct = ({ ItemsToShow }) => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [numberOfItems, setNumberOfItems] = useState(ItemsToShow);
  const totalGroups = Math.ceil(Product.products.length / numberOfItems);

  const showGroup = (groupIndex) => {
    const startIndex = groupIndex * numberOfItems;
    const endIndex = Math.min(
      startIndex + (numberOfItems - 1),
      Product.products.length - 1
    );
    return Product.products.slice(startIndex, endIndex + 1);
  };

  const handleLeftClick = () => {
    setCurrentGroup((currentGroup - 1 + totalGroups) % totalGroups);
  };
  const handleRightClick = () => {
    setCurrentGroup((currentGroup + 1) % totalGroups);
  };

  useEffect(() => {
    const UpdateNumberOfItems = () => {
      if (window.innerWidth < 500) {
        setNumberOfItems(1);
      } else if (window.innerWidth < 600) {
        setNumberOfItems(2);
      } else if (window.innerWidth < 800) {
        setNumberOfItems(3);
      } else {
        setNumberOfItems(ItemsToShow);
      }
    };
    UpdateNumberOfItems();
    window.addEventListener("resize", UpdateNumberOfItems);
    return () => {
      window.removeEventListener("resize", UpdateNumberOfItems);
    };
  }, []);
  const renderedItems = showGroup(currentGroup);
  console.log(totalGroups, currentGroup);

  return (
    <MainCarousel>
      <Typography>Related Products</Typography>
      <ContentBox style={{ justifyContent: "space-evenly" }}>
        {renderedItems.map((data, index) => {
          return (
            <Box>
              <Box style={{ justifyContent: "center", alignItems: "center" }}>
                <img src={`${data.productImage}`} alt="sdfsd" />
              </Box>
              <Box>
                <Typography>{data.productName}</Typography>
              </Box>
              <Box>
                <Typography>{data.productPrice}</Typography>
              </Box>
            </Box>
          );
        })}
      </ContentBox>
      <LeftBox>
        <Typography onClick={() => handleLeftClick()}>
          <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: "36px" }} />
        </Typography>
      </LeftBox>
      <RightBox>
        <Typography onClick={() => handleRightClick()}>
          <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: "36px" }} />
        </Typography>
      </RightBox>
      <Typography
        style={{
          fontFamily: "Raleway",
          color: "#010101",
          fontSize: "14px",
          fontWeight: "500",
          marginTop: "50px",
          marginBottom: "20px",
        }}
      >
        Vistaprint offers <u>Fleece Jacket design templates</u> in assorted
        styles.
      </Typography>
    </MainCarousel>
  );
};

export default RelatedProduct;

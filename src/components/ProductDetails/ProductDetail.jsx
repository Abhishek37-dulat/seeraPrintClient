import React from "react";
import MainProduct from "./MainProduct";
import { Box, styled } from "@mui/material";
import ProductRating from "./ProductRating";
import ProductUnderDetails from "./ProductUnderDetails";
import RelatedProduct from "./RelatedProduct";

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
}));

const ProductDetail = () => {
  return (
    <MainBox>
      <MainProduct />
      <ProductRating />
      <ProductUnderDetails />
      <RelatedProduct ItemsToShow={1} />
    </MainBox>
  );
};

export default ProductDetail;

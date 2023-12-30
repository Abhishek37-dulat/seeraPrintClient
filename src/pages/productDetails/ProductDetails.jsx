import React from "react";
import ProductDetail from "../../components/ProductDetails/ProductDetail";
import { Box } from "@mui/material";

const ProductDetails = () => {
  return (
    <Box
      style={{
        display: "flex",
        width: "100%",
      }}
    >
      <ProductDetail />
    </Box>
  );
};

export default ProductDetails;

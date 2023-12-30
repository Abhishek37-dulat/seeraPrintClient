import { Box, Button } from "@mui/material";
import React from "react";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";

const PreviewImage = (addShape) => {
  return (
    <Box style={{ margin: "0px 5px" }}>
      <Button
        style={{
          color: "#fff",
          fontWeight: "600",
          marginTop: "20px",
          backgroundColor: "#1e1e1e",
        }}
        onClick={() => addShape()}
      >
        Preview
        <VisibilityRoundedIcon />
      </Button>
    </Box>
  );
};

export default PreviewImage;

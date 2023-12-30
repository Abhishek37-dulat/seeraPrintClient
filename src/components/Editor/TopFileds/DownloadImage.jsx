import { Box, Button } from "@mui/material";
import React from "react";
import GetAppRoundedIcon from "@mui/icons-material/GetAppRounded";

const DownloadImage = ({ canvas }) => {
  const downloadCanvas = () => {
    if (!canvas) {
      console.error("Canvas not available for download");
      return;
    }

    const dataURL = canvas.toDataURL({
      format: "png", // or 'jpeg', 'jpg', etc.
      quality: 0.8, // a value from 0.1 to 1.0
    });

    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "canvas_image.png"; // Set the desired file name and extension
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box>
      <Button
        style={{
          color: "#fff",
          fontWeight: "600",
          marginTop: "20px",
          backgroundColor: "#1e1e1e",
        }}
        onClick={() => downloadCanvas()}
      >
        Download
        <GetAppRoundedIcon />
      </Button>
    </Box>
  );
};

export default DownloadImage;

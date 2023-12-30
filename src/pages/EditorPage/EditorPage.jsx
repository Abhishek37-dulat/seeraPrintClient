import { Box } from "@mui/material";
import React from "react";
import Editor from "../../components/Editor/Editor";

const EditorPage = () => {
  return (
    <Box
      style={{
        display: "flex",
        width: "100%",
      }}
    >
      <Editor />
    </Box>
  );
};

export default EditorPage;

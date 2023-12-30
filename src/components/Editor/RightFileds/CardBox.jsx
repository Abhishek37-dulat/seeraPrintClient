import { Box, styled } from "@mui/material";
import React, { useEffect } from "react";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";

const MainEditor = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "flex-start",
  width: "calc(355px * 2)",
  height: "calc(220px * 2)",
  marginRight: "50px",
  backgroundColor: "#D6D6D6",
  padding: "5px 5px",
  "&>div": {
    border: "3px dashed #1e1e1e",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "calc(100% - 10px)",
    height: "calc(100% - 10px)",
    "&>div": {
      width: "100%",
      height: "100%",
    },
  },
  //   marginRight: "100px",
  //   height: "max-content",

  //   [theme.breakpoints.down("lsm")]: {
  //     flexDirection: "column",
  //   },
}));

const CardBox = ({
  selectFontFamily,
  selectFontSize,
  selectFontBold,
  selectFontItalic,
  selectFontUnderLine,
  selectColor,
  textFieldValue,
  setTextFieldValue,
  editor,
  onReady,
}) => {
  //   const handleMove = () => {
  //     const activeObject = editor?.canvas?.getActiveObject();
  //     if (activeObject) {
  //       activeObject.set({
  //         left: activeObject.left + 10,
  //         top: activeObject.top + 10,
  //       });
  //       editor?.canvas?.requestRenderAll();
  //     }
  //   };

  //   const handleResize = () => {
  //     const activeObject = editor?.canvas?.getActiveObject();
  //     if (activeObject) {
  //       activeObject.set({
  //         scaleX: activeObject.scaleX * 1.2,
  //         scaleY: activeObject.scaleY * 1.2,
  //       });
  //       editor?.canvas?.requestRenderAll();
  //     }
  //   };

  const handleDelete = () => {
    const activeObject = editor?.canvas?.getActiveObject();
    if (activeObject) {
      editor?.canvas?.remove(activeObject);
      editor?.canvas?.requestRenderAll();
    }
  };
  //   const addText = () => {
  //     editor?.addText(textFieldValue);
  //   };
  const handleKeyDown = (event) => {
    if (event.key === "Delete") {
      handleDelete();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    const activeObject = editor?.canvas?.getActiveObject();
    console.log(activeObject);
    if (activeObject && activeObject?.type === "text") {
      activeObject.set({
        fill: selectColor,
        fontFamily: selectFontFamily,
        fontWeight: selectFontBold ? "bold" : "normal",
        fontStyle: selectFontItalic ? "italic" : "normal",
        fontSize: selectFontSize ? `${selectFontSize}` : "16",
        underline: selectFontUnderLine,
      });
      editor?.canvas?.requestRenderAll();
    }
  }, [selectColor, selectFontFamily, selectFontBold, editor]);
  useEffect(() => {
    const canvasElement = editor?.canvas?.upperCanvasEl;
    if (canvasElement) {
      canvasElement.style.zIndex = 1;
    }
  }, [editor]);
  return (
    <MainEditor>
      <Box>
        <FabricJSCanvas editor={editor} onReady={onReady} />
      </Box>
    </MainEditor>
  );
};

export default CardBox;

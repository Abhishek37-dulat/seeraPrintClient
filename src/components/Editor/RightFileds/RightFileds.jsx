import { Box, styled } from "@mui/material";
import React from "react";
import SelectItem from "./SelectItem";
import CardBox from "./CardBox";
const MainEditor = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "row-reverse",
  justifyContent: "flex-start",
  alignItems: "center",
  //   width: "calc(355px * 2)",
  //   height: "calc(220px * 2)",

  width: "100%",
  height: "100%",
  //   marginRight: "100px",
  //   height: "max-content",

  //   [theme.breakpoints.down("lsm")]: {
  //     flexDirection: "column",
  //   },
}));
const RightBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  //   width: "calc(355px * 2)",
  //   height: "calc(220px * 2)",
  width: "max-content",
  height: "100%",

  //   [theme.breakpoints.down("lsm")]: {
  //     flexDirection: "column",
  //   },
}));
const LeftBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  //   width: "calc(355px * 2)",
  //   height: "calc(220px * 2)",
  width: "max-content",
  height: "100%",

  //   [theme.breakpoints.down("lsm")]: {
  //     flexDirection: "column",
  //   },
}));
const RightFileds = ({
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
  const rightJSON = [
    {
      name: "Left",
      value: "",
    },
    {
      name: "Right",
      value: "",
    },
    {
      name: "Front",
      value: "",
    },
    {
      name: "Back",
      value: "",
    },
  ];
  return (
    <MainEditor>
      <RightBox>
        {rightJSON.map((data, index) => {
          return <SelectItem key={index} name={data.name} value={data.value} />;
        })}
      </RightBox>
      <LeftBox>
        <CardBox
          selectFontFamily={selectFontFamily}
          selectFontSize={selectFontSize}
          selectFontBold={selectFontBold}
          selectFontItalic={selectFontItalic}
          selectFontUnderLine={selectFontUnderLine}
          selectColor={selectColor}
          textFieldValue={textFieldValue}
          setTextFieldValue={setTextFieldValue}
          editor={editor}
          onReady={onReady}
        />
      </LeftBox>
    </MainEditor>
  );
};

export default RightFileds;

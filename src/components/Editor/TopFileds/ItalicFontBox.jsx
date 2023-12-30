import React, { useEffect, useState } from "react";
import FormatItalicRoundedIcon from "@mui/icons-material/FormatItalicRounded";
import { Box, styled } from "@mui/material";
const MainBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "50px",
  height: "50px",
  marginTop: "12px",
  "&>div": {
    // border: "1px solid black",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    "&>svg": {
      fontSize: "36px",
      color: "#1e1e1e",
      cursor: "pointer",
    },
  },
}));
const ItalicFontBox = ({ setSelectFontItalic }) => {
  const [fontItalicCondition, setFontItalicCondition] = useState(false);
  useEffect(() => {
    setSelectFontItalic(fontItalicCondition);
  }, [fontItalicCondition]);
  return (
    <MainBox>
      <Box>
        <FormatItalicRoundedIcon
          onClick={() => setFontItalicCondition(!fontItalicCondition)}
          style={{ color: `${fontItalicCondition ? "#4F68CC" : "#1e1e1e"}` }}
        />
      </Box>
    </MainBox>
  );
};

export default ItalicFontBox;

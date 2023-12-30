import React, { useEffect, useState } from "react";
import FormatUnderlinedRoundedIcon from "@mui/icons-material/FormatUnderlinedRounded";
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
const UnderLineFontBox = ({ setSelectFontUnderLine }) => {
  const [fontUnderLineCondition, setFontUnderLineCondition] = useState(false);
  useEffect(() => {
    setSelectFontUnderLine(fontUnderLineCondition);
  }, [fontUnderLineCondition]);
  return (
    <MainBox>
      <Box>
        <FormatUnderlinedRoundedIcon
          onClick={() => setFontUnderLineCondition(!fontUnderLineCondition)}
          style={{ color: `${fontUnderLineCondition ? "#4F68CC" : "#1e1e1e"}` }}
        />
      </Box>
    </MainBox>
  );
};

export default UnderLineFontBox;

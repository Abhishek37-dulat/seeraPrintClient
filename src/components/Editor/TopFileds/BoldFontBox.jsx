import React, { useEffect, useState } from "react";
import FormatBoldRoundedIcon from "@mui/icons-material/FormatBoldRounded";
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
const BoldFontBox = ({ setSelectFontBold }) => {
  const [fontBoldCondition, setFontBoldCondition] = useState(false);
  useEffect(() => {
    setSelectFontBold(fontBoldCondition);
  }, [fontBoldCondition]);
  return (
    <MainBox>
      <Box>
        <FormatBoldRoundedIcon
          onClick={() => setFontBoldCondition(!fontBoldCondition)}
          style={{ color: `${fontBoldCondition ? "#4F68CC" : "#1e1e1e"}` }}
        />
      </Box>
    </MainBox>
  );
};

export default BoldFontBox;

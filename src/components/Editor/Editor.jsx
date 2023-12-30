import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import DesignReview from "./DesignReview";
import Quantity from "./Quantity";
import MainEditor from "./MainEditor";
import { useNavigate } from "react-router-dom";

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
}));
const ButtonBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "100%",
  "&>button": {
    padding: "10px 30px",
    border: "none",
    outline: "none",
    borderRadius: "5px",
    boxShadow: "0px 0px 3px rgba(0,0,0,0.3)",
    margin: "10px 30px",
    cursor: "pointer",
    backgroundColor: "#1e1e1e",
    color: "#fff",
    transition: "0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
    "&:active": {
      transform: "scale(1)",
    },
  },
}));
const Editor = () => {
  const navigate = useNavigate();
  const [valueItem, setValueItem] = useState(0);
  const handleBack = () => {
    if (valueItem > 0) {
      setValueItem(valueItem - 1);
    }
  };
  const handleSave = () => {
    setValueItem(valueItem + 1);
  };
  const handlePlaceOrder = () => {
    navigate("/add-quantity");
  };
  return (
    <MainBox>
      {valueItem === 0 && <MainEditor />}
      {valueItem === 1 && (
        <DesignReview
          valueItem={valueItem}
          setValueItem={setValueItem}
          handleBack={handleBack}
          handleSave={handleSave}
        />
      )}
      {valueItem === 2 && (
        <Quantity
          valueItem={valueItem}
          setValueItem={setValueItem}
          handleBack={handleBack}
          handleSave={handleSave}
        />
      )}
      {valueItem === 0 && (
        <ButtonBox>
          <button onClick={() => handleSave()}>Next</button>
        </ButtonBox>
      )}
      {valueItem === 2 && (
        <ButtonBox>
          <button onClick={() => handleBack()}>Back</button>
          <button onClick={() => handlePlaceOrder()}>Next</button>
        </ButtonBox>
      )}
    </MainBox>
  );
};

export default Editor;

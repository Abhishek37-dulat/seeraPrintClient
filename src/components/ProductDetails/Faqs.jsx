import { Box, Typography, styled } from "@mui/material";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const MainBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "96%",
  marginBottom: "200px",
  padding: "2%",
  "&>div": {
    "&>p": {
      fontFamily: "'M PLUS Rounded 1c', sans-serif",
      fontSize: "36px",
      fontWeight: "600",
      color: "#010101",
    },
  },
  // [theme.breakpoints.down("msm")]: {
  //   flexDirection: "column-reverse",
  // },
}));

const QuestionsBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: "10px",
}));

const Question = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  borderRadius: "5px",
  boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
  marginBottom: "5px",
  "&>p": {
    fontFamily: "'M PLUS Rounded 1c', sans-serif",
    fontSize: "24px",
    fontWeight: "400",
    color: "#010101",
    padding: "10px",
    marginBottom: "20px",
  },
}));

const AnswersBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  // display: "flex",
  display: "none",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
  width: "100%",
  height: "0%",
  borderRadius: "5px",
  "&>p": {
    fontFamily: "'M PLUS Rounded 1c', sans-serif",
    fontSize: "16px",
    fontWeight: "400",
    color: "#010101",
    padding: "10px",
    marginBottom: "20px",
  },
}));

const Faqs = () => {
  const [toggleQues, setToggleQues] = useState(false);
  const QuestionRef = useRef(null);
  const handleToggleQuestion = () => {
    setToggleQues(!toggleQues);
  };

  useEffect(() => {
    if (toggleQues) {
      // QuestionRef.current.style.height = "100%";
      QuestionRef.current.style.display = "flex";
      gsap.fromTo(
        QuestionRef.current,
        { y: "0", scale: 0 },
        { y: "5", scale: 1, duration: 2, ease: "bounce" }
      );
    } else {
      QuestionRef.current.style.height = "0%";
      QuestionRef.current.style.display = "none";
    }
  }, [toggleQues]);
  return (
    <MainBox>
      <Box>
        <Typography>Frequently Asked Questions</Typography>
      </Box>
      <QuestionsBox>
        <Question>
          <Typography style={{ marginLeft: "10px" }}>
            What is Seera Prints
          </Typography>
          {toggleQues ? (
            <Typography
              style={{ marginRight: "10px", cursor: "pointer" }}
              onClick={() => handleToggleQuestion()}
            >
              -
            </Typography>
          ) : (
            <Typography
              style={{ marginRight: "10px", cursor: "pointer" }}
              onClick={() => handleToggleQuestion()}
            >
              +
            </Typography>
          )}
        </Question>
        <AnswersBox style={{ display: "none" }} ref={QuestionRef}>
          <Typography>sdfsdf</Typography>
        </AnswersBox>
      </QuestionsBox>
    </MainBox>
  );
};

export default Faqs;

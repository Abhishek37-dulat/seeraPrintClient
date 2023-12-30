import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography, styled } from "@mui/material";
import React from "react";

const MainBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  marginTop: "20px",
  overflow: "hidden",
  [theme.breakpoints.down("lsm")]: {
    flexDirection: "column",
  },
}));

const LeftBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  position: "relative",
  [theme.breakpoints.down("lsm")]: {
    width: "100%",
  },
  "&>div": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",

    "&>div": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      "&>img": {
        width: "80%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
        borderRadius: "5px",
      },
    },
    "&>div:nth-of-type(2)": {
      position: "absolute",
      top: "0%",
      right: "-50%",
      fontSize: "24px",
      display: "none",
      [theme.breakpoints.down("lsm")]: {
        right: "-45%",
        display: "flex",
      },
    },
  },
}));

const RightBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "50%",
  position: "relative",
  [theme.breakpoints.down("lsm")]: {
    width: "96%",
    padding: "10px",
  },
  "&>div:nth-of-type(1)": {
    "&>button": {
      marginTop: "20px",
      fontFamily: "'Poppins', sans-serif",
      fontSize: "16px",
      fontWeight: "400",
      color: "#010101",
      outline: "none",
      border: "none",
      width: "100%",
      padding: "10px 20px",
      backgroundColor: "#fff",
      boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
      borderRadius: "20px",
    },
    "&>p": {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "16px",
      fontWeight: "300",
      color: "#010101",
      marginTop: "20px",
    },
    "&>p:nth-of-type(1)": {
      fontSize: "36px",
      fontWeight: "500",
      marginTop: "20px",
      marginBottom: "20px",
    },
    "&>p:nth-of-type(2)": {
      fontSize: "16px",
      fontWeight: "500",
    },
  },
  "&>div:nth-of-type(2)": {
    "&>div": {
      //   border: "1px solid black",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "20px",
      marginBottom: "20px",
      "&>input": {
        width: "24px",
        height: "24px",
      },
      "&>p": {
        fontFamily: "'Poppins', sans-serif",
        fontSize: "16px",
        fontWeight: "400",
        color: "#010101",
        marginLeft: "10px",
      },
    },
    "&>button": {
      marginTop: "20px",
      fontFamily: "'Poppins', sans-serif",
      fontSize: "16px",
      fontWeight: "400",
      color: "#fff",
      outline: "none",
      border: "none",
      width: "100%",
      padding: "10px 20px",
      backgroundColor: "#010101",
      boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
      borderRadius: "20px",
    },
  },
  "&>div:nth-of-type(3)": {
    position: "absolute",
    top: "0%",
    right: "5%",
    fontSize: "24px",
    [theme.breakpoints.down("lsm")]: {
      display: "none",
    },
  },
}));

const DesignReview = ({ valueItem, setValueItem, handleBack, handleSave }) => {
  return (
    <MainBox>
      <LeftBox>
        <Box>
          <Box>
            <img
              src="https://rendering.mcp.cimpress.com/v2/vp/preview?height=1360&instructions_uri=https%3A%2F%2Finstructions.documents.cimpress.io%2Fv3%2Finstructions%3Apreview%3FdocumentUri%3DrVNNj9sgEP0vHHoKNgYT40jRXqqoldqq3XYPVbUHPoYYyTYWkKRplP3txV6ttLnsaTk9Zpg3b%252BBxQcbrwwBjQpsLmuQIfUSbPxfkDNog4LSpiVbYCqtwbaDFbasAW2qNaBhZUybRCo1ygHx6F3ymWaGTM6nL%252B4pUxXoYcqQDt%252B%252FSTcgNcg%252BvWjWaCK2kxmLNalxLKrEUHLAGZozgjDBCc9kU3JgeQp8rupSmuCnLw9R7aWLxMkgstBumADEWzpfH6uVAyVtW2TqzA9Uc14QKLJRlmBKiuba00Wv2VFFaLk3uEoxyTFsD0e3HBLqbgjeLBDg6ON2KkJMrYgdBQUi3%252FWkpY4QUS%252FfjSyM%252FpbPd050x6cj08Pv%252BiRFSnkB9fya9m3vJdAiwpZyqtRZCNxlpw4EobmqmNa14S6lWum4lcPgQO3%252F6CD0kMFsr%252BwhZow9u70bZ%252F%252FSHoOH9pL6XvslHl5wfZ9P9zdrI4olzRpQWlPJl%252B4aPeFNUdftq5fR1hXTw0y5IPVPHmTv5CW3ICvVg0wKUT8kPCwzPXCTX%252Ffs8Gsg6qpbkxJSd%252Be0w5PvJkevjChnQPsiZ9Fe2weh7v5%252BlwqCCdwbCedfL2fg6Z8JXb%252BbPsGB0fczsNn%252BLe1hG9uF8%252Bxhz7g3rhpcyB7EkkqnKKomFlWtcM6iw0AywJJWQHJSoOCmng%252Bpdft7ZqUcIcblkRAuCrv8B%26ignoreProjection%3Dtrue&scene=https%3A%2F%2Fcdn.scenes.documents.cimpress.io%2Fv3%2Fassets%2F75eafe18-63a4-4619-91eb-a17b97c88a9d%2Fcontent&overrideThreadId=mcp0015&category=studio&width=1360"
              alt="sadasd"
            />
          </Box>
          <Box>
            <FontAwesomeIcon icon={faXmark} />
          </Box>
        </Box>
      </LeftBox>
      <RightBox>
        <Box>
          <Typography>Design Review</Typography>
          <Typography>All set? Let’s double check:</Typography>
          <Typography>
            <FontAwesomeIcon icon={faCheck} style={{ color: "#138EDE" }} />
            Text: Is it clear and legible?
          </Typography>
          <Typography>
            <FontAwesomeIcon icon={faCheck} style={{ color: "#138EDE" }} />
            Margin: Is everything within the space?
          </Typography>
          <Typography>
            <FontAwesomeIcon icon={faCheck} style={{ color: "#138EDE" }} />
            Info: Everything accurate? Spelled correctly?
          </Typography>
          <Typography>
            <FontAwesomeIcon icon={faCheck} style={{ color: "#138EDE" }} />
            Images: Is everything clear (no blur)?
          </Typography>
          <button onClick={() => setValueItem(valueItem - 1)}>
            Edit my design
          </button>
        </Box>
        <Box>
          <Box>
            <input type="checkbox" />{" "}
            <Typography>I've reviewed and approve my design.</Typography>
          </Box>
          <button onClick={() => setValueItem(valueItem + 1)}>Continue</button>
        </Box>
        <Box>
          <FontAwesomeIcon icon={faXmark} />
        </Box>
      </RightBox>
    </MainBox>
  );
};

export default DesignReview;

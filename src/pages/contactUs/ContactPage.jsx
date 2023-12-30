import { Box } from "@mui/material";
import React from "react";
import Contactus from "../../components/ContactUs/Contactus";

const ContactPage = () => {
  return (
    <Box
      style={{
        display: "flex",
        width: "100%",
      }}
    >
      <Contactus />
    </Box>
  );
};

export default ContactPage;

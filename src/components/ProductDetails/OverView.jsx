import { Box, Typography, styled } from "@mui/material";
import React from "react";
import C1 from "../../images/cot1.png";

const MainBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  [theme.breakpoints.down("msm")]: {
    flexDirection: "column-reverse",
  },
}));

const LeftBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "50%",
  padding: "50px",
  fontFamily: "'M PLUS Rounded 1c', sans-serif",
  color: "#010101",
  [theme.breakpoints.down("msm")]: {
    width: "100%",
    padding: "10px",
  },
  "&>p:nth-of-type(1)": {
    fontSize: "36px",
    fontWeight: "600",
  },
  "&>p:nth-of-type(2)": {
    marginTop: "10px",
    fontSize: "20px",
    fontWeight: "600",
  },
  "&>p:nth-of-type(3)": {
    marginTop: "10px",
    paddingLeft: "30px",
  },
  "&>p:nth-of-type(4)": {
    marginTop: "10px",
  },
}));

const RightBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "50%",
  padding: "50px",
  [theme.breakpoints.down("lsm")]: {
    padding: "10px",
  },
  [theme.breakpoints.down("msm")]: {
    width: "100%",
  },
  "&>img": {
    width: "100%",
    [theme.breakpoints.down("lsm")]: {
      width: "110%",
    },
    [theme.breakpoints.down("msm")]: {
      width: "100%",
    },
  },
}));
const OverView = () => {
  return (
    <MainBox>
      <LeftBox>
        <Typography>
          Share the warmth of your brand this winter with customizable fleece
          jackets
        </Typography>
        <Typography>Embroidery Design Guidelines:</Typography>
        <Typography>
          <ul>
            <li>
              Simple designs look better when embroidered. Avoid detailed
              artwork.
            </li>
            <li>Keep font size above 10 points for better results.</li>
            <li>
              Logos and text will work best. Simple elements, clean lines. Use
              high-resolution images.
            </li>
            <li>Do not use photographs, human faces, or scenic images.</li>
          </ul>
        </Typography>
        <Typography>
          Why let winters stop you from marketing your business? With a 100%
          polyester fleece jacket, you can ensure that you are marketing your
          brand correctly. With nice and sturdy front zip, the fleece jacket
          will last longer and feel good. The jacket has a soft finish, which is
          in-trend these days, to ensure that people wearing it do not feel out
          of place. This mens fleece jacket is furnished with stretchable string
          around the waist, allowing adjustments for a better fit. These custom
          jackets deliver the perfect concoction of warmth without being heavy.
          The chin guard present in this mens fleece jacket is a great addition
          to the jacket, which will keep you warm even in the peak winters. The
          jacket is unisex, which means it is also a womens fleece jacket. The
          jacket can be worn with other apparel allowing hassle-free layering.
          Wear this mens or womens fleece jacket on an item of clothing during
          mild winters or wear it under a thick coat during chilly winters.
          <br />
          You can create the best designs on these fleece jackets. The
          customization process on our website is really easy. With custom
          jackets, you can market your brand in winters with ease. Start
          personalising by selecting the color, size, and quantity of the
          jackets, then click on “START DESIGNING.” It is where we will create
          the best embroidered fleece jackets for your brand. Add texts of
          images in the space given. Ensure that the image or text is within the
          safety line as anything beyond that will be trimmed. You can select
          the font, size, and color of the text you are willing to present on
          your mens fleece jacket. Move on to the next step. Check if the print
          you want is as per your requirement. If there are no edits, tick the
          checkbox and approve the design for your fleece jacket India online.
          You will get a prompt for selecting the quantity, select the quantity
          of the sizes you want and then move the order to the basket and check
          out to order.
        </Typography>
      </LeftBox>
      <RightBox>
        <img src={C1} alt="c1" />
      </RightBox>
    </MainBox>
  );
};

export default OverView;

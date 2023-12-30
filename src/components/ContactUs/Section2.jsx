import { Box, Typography, styled } from "@mui/material";
import React from "react";
import ContactUs from "../../ConstantData/contactus.json";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const MainBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "100%",
}));
const LeftBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "65%",
}));
const ContactUsBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  flexWrap: "wrap",
  width: "100%",
}));

const HelpBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
}));

const HelpBox1 = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  marginTop: "20px",
  "&>p": {
    fontSize: "42px",
    fontWeight: "600",
  },
}));
const HelpBox2 = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  "&>div": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    marginTop: "20px",
    "&>div": {
      // border: "1px solid black",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: "100%",
      "&>div": {
        width: "100%",
        marginTop: "10px",
        marginBottom: "10px",
        "&>p": {
          fontSize: "24px",
          fontWeight: "500",
          fontFamily: "'Poppins', sans-serif",
        },
      },
      "&>div:nth-of-type(2)": {
        width: "100%",
        marginTop: "15px",
        marginBottom: "10px",
        "&>p": {
          fontFamily: "'Poppins', sans-serif",
          fontSize: "18px",
          fontWeight: "500",
          cursor: "pointer",
          ":hover": {
            textDecoration: "underline",
          },
        },
      },
      "&>p": {
        borderBottom: "1px solid #ECEEEF",
        fontFamily: "'Poppins', sans-serif",
        fontSize: "16px",
        fontWeight: "400",
        color: "#010101",
        marginTop: "20px",
        width: "90%",
        paddingBottom: "10px",
        cursor: "pointer",
        ":hover": {
          textDecoration: "underline",
        },
      },
    },
  },
}));

const Box1 = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  marginTop: "20px",
  "&>p": {
    fontSize: "42px",
    fontWeight: "600",
  },
}));
const Box2 = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "40%",
  padding: "18px",
  borderRadius: "5px",
  margin: "5px",
  boxShadow: "0px 0px 3px rgba(0,0,0,0.2)",
  cursor: "pointer",
  marginTop: "20px",
  "&:active": {
    transform: "scale(0.98)",
  },
}));

const RightBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "30%",
}));

const BoxForRight = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  marginTop: "10px",
  "&>p": {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "500",
    marginTop: "10px",
  },
  "&>p:nth-of-type(1)": {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "400",
    fontSize: "24px",
  },
  "&>button": {
    marginTop: "20px",
    width: "100%",
    padding: "15px",
    borderRadius: "20px",
    backgroundColor: "#262626",
    color: "#fff",
    cursor: "pointer",
    "&>p": {
      fontFamily: "'Poppins', sans-serif",
    },
  },
}));
const Section2 = () => {
  return (
    <MainBox>
      <LeftBox>
        <ContactUsBox>
          <Box1>
            <Typography>Popular Questions</Typography>
          </Box1>
          {ContactUs.popularquestion.map((data, index) => {
            return (
              <Box2>
                <Typography>{data}</Typography>
                <Typography>
                  <ChevronRightIcon />
                </Typography>
              </Box2>
            );
          })}
        </ContactUsBox>
        <HelpBox>
          <HelpBox1>
            <Typography>Browse Help Centre</Typography>
          </HelpBox1>
          <HelpBox2>
            <Box>
              <Box>
                <Box>
                  <Typography>What's New</Typography>
                </Box>
                {ContactUs.helpcenter.new.map((data, index) => {
                  return <Typography>{data}</Typography>;
                })}
                <Box>
                  <Typography>
                    See All <FontAwesomeIcon icon={faArrowRight} />
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box>
                  <Typography>My Order</Typography>
                </Box>
                {ContactUs.helpcenter.order.map((data, index) => {
                  return <Typography>{data}</Typography>;
                })}
                <Box>
                  <Typography>
                    See All <FontAwesomeIcon icon={faArrowRight} />
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box>
                <Box>
                  <Typography>Shipping & Delivery</Typography>
                </Box>
                {ContactUs.helpcenter.ShippingDelivery.map((data, index) => {
                  return <Typography>{data}</Typography>;
                })}
                <Box>
                  <Typography>
                    See All <FontAwesomeIcon icon={faArrowRight} />
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box>
                  <Typography>Placing My Order</Typography>
                </Box>
                {ContactUs.helpcenter.PlacingMyOrder.map((data, index) => {
                  return <Typography>{data}</Typography>;
                })}
                <Box>
                  <Typography>
                    See All <FontAwesomeIcon icon={faArrowRight} />
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box>
                <Box>
                  <Typography>My Account</Typography>
                </Box>
                {ContactUs.helpcenter.MyAccount.map((data, index) => {
                  return <Typography>{data}</Typography>;
                })}
                <Box>
                  <Typography>
                    See All <FontAwesomeIcon icon={faArrowRight} />
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box>
                  <Typography>Pricing & Product Information</Typography>
                </Box>
                {ContactUs.helpcenter.PricingProductInformation.map(
                  (data, index) => {
                    return <Typography>{data}</Typography>;
                  }
                )}
                <Box>
                  <Typography>
                    See All <FontAwesomeIcon icon={faArrowRight} />
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box>
                <Box>
                  <Typography>Designing My Product</Typography>
                </Box>
                {ContactUs.helpcenter.DesigningMyProduct.map((data, index) => {
                  return <Typography>{data}</Typography>;
                })}
                <Box>
                  <Typography>
                    See All <FontAwesomeIcon icon={faArrowRight} />
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box>
                  <Typography>Design Services</Typography>
                </Box>
                {ContactUs.helpcenter.DesignServices.map((data, index) => {
                  return <Typography>{data}</Typography>;
                })}
                <Box>
                  <Typography>
                    See All <FontAwesomeIcon icon={faArrowRight} />
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box>
                <Box>
                  <Typography>Websites</Typography>
                </Box>
                {ContactUs.helpcenter.Websites.map((data, index) => {
                  return <Typography>{data}</Typography>;
                })}
                <Box>
                  <Typography>
                    See All <FontAwesomeIcon icon={faArrowRight} />
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box>
                  <Typography>Domains & Email Hosting</Typography>
                </Box>
                {ContactUs.helpcenter.DomainsEmailHosting.map((data, index) => {
                  return <Typography>{data}</Typography>;
                })}
                <Box>
                  <Typography>
                    See All <FontAwesomeIcon icon={faArrowRight} />
                  </Typography>
                </Box>
              </Box>
            </Box>
          </HelpBox2>
        </HelpBox>
      </LeftBox>

      <RightBox>
        <Box>
          <Box1>
            <Typography>Contact us</Typography>
          </Box1>
          <BoxForRight>
            <Typography>Phone</Typography>
            <Typography>
              <b>95181-18356</b>
            </Typography>
            <Typography>Mon. – Sat. 10:00 AM – 7:00 PM</Typography>
          </BoxForRight>
          <BoxForRight>
            <Typography>Email</Typography>
            <Typography>
              Customer service specialists respond to emails from Monday –
              Saturday.
            </Typography>
            <Typography>
              Our email is <b>customerservice@vistaprint.in</b> or you can email
              us directly here.
            </Typography>
          </BoxForRight>
          <BoxForRight>
            <button>
              <Typography>Email us</Typography>
            </button>
          </BoxForRight>
        </Box>
      </RightBox>
    </MainBox>
  );
};

export default Section2;

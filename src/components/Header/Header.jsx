import React, { useEffect } from "react";
import "./header.css";
import { Box, styled, Typography, Badge } from "@mui/material";
import logo from "../../images/seeraprintlogo.png";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { Link, useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import cart from "../../images/shopping-cart.png";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { SpaceBar } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logoutUser } from "../../redux/reducers/authSlice";

const MainNavBar = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  width: "100%",
  height: "10vh",
  overflow: "hidden",
}));
const MainContent = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2px",
}));
const LogoContent = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  marginLeft: "50px",

  "&>img": {
    width: "100px",
    [theme.breakpoints.down("sm")]: {
      width: "40px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: "10px",
  },
}));
const SearchContent = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  marginLeft: "50px",
  boxShadow: "0px 0px 2px rgba(0,0,0,0.3)",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "15px",
  },
  "&>div:nth-of-type(1)": {
    width: "200px",
    height: "50px",
    // border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C5C6C9",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    "&>p": {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "16px",
      fontWeight: "300",
      color: "#010101",
    },
  },
  "&>div:nth-of-type(2)": {
    width: "400px",
    height: "50px",
    // border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "180px",
    },
    "&>input": {
      padding: "10px",
      width: "calc(100% - 20px)",
      height: "calc(100% - 20px)",
      border: "none",
      outline: "none",
      fontFamily: "'Poppins', sans-serif",
    },
  },
  "&>div:nth-of-type(3)": {
    width: "120px",
    height: "50px",
    // border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#138EDE",
    [theme.breakpoints.down("sm")]: {
      width: "60px",
    },
    "&>svg": {
      color: "#fff",
    },
  },
}));
const OtherNav = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  marginRight: "50px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
    SpaceBar: "inherit",
  },
}));
const SpeOtherNav = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "none",
  justifyContent: "flex-start",
  alignItems: "center",
  marginRight: "50px",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
  },
}));
const SpeNavItems = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  marginLeft: "30px",

  "&>span": {
    "&>img": {
      width: "30px",
    },
    "&>span": {
      //   backgroundColor: "#138EDE",
      color: "#fff",
    },
    "&>svg": { fontSize: "36px" },
  },
}));
const NavItems = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  marginLeft: "10px",

  "&>span": {
    "&>img": {
      width: "40px",
    },
    "&>span": {
      //   backgroundColor: "#138EDE",
      color: "#fff",
    },
    "&>svg": { fontSize: "36px" },
  },

  "&>p": {
    display: "flex",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "16px",
    fontWeight: "400",
    color: "#010101",
    marginTop: "10px",
    "&>p": {
      transition: "0.3s",
      cursor: "pointer",
      padding: "2px",
      ":hover": {
        textDecoration: "underline",
        transform: "scale(1.05)",
      },
    },
  },
}));
// const MainNavBarBottom = styled(Box)(({ theme }) => ({
//   //   border: "1px solid black",
//   width: "100%",
//   //   height: "10vh",
//   display: "flex",
//   justifyContent: "flex-start",
//   alignItems: "center",
//   padding: "10px",
// }));
// const NavBottomMain = styled(Box)(({ theme }) => ({
//   //   border: "1px solid black",
//   width: "100%",
//   height: "100%",
//   display: "flex",
//   justifyContent: "flex-start",
//   alignItems: "flex-start",
//   flexWrap: "wrap",
// }));
// const NavBottomItem = styled(Box)(({ theme }) => ({
//   //   border: "1px solid black",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   padding: "4px",
//   cursor: "pointer",
//   margin: "2px",
//   marginLeft: "4px",
//   "&>p": {
//     display: "flex",
//     fontFamily: "'Prompt', sans-serif",
//     fontSize: "18px",
//     fontWeight: "400",
//     color: "#010101",
//   },
//   "&>svg": {
//     marginLeft: "5px",
//   },
// }));

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);
  const tokenData = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    localStorage.removeItem("seera-token");
    dispatch(logoutUser());
    setUserData(null);
    navigate("/");
  };

  useEffect(() => {
    let token = localStorage.getItem("seera-token");
    if (token) {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      if (decodedToken) {
        setUserData(decodedToken);
      }
    }
  }, [tokenData]);
  return (
    <>
      <MainNavBar>
        <MainContent>
          <LogoContent onClick={() => navigate("/")}>
            <img src={logo} alt="logo" />
          </LogoContent>
          <SearchContent>
            <Box>
              <Typography>All Categories</Typography>
              <KeyboardArrowDownRoundedIcon />
            </Box>
            <Box>
              <input type="text" placeholder="Search here..." />
            </Box>
            <Box>
              <SearchRoundedIcon />
            </Box>
          </SearchContent>
          <OtherNav>
            <NavItems>
              <Typography>
                {userData ? (
                  <>
                    <p
                      style={{
                        padding: "7px 15px",
                        textDecoration: "underline",
                      }}
                      onClick={() => navigate("/my-accounts")}
                    >
                      {userData?.first_name + " " + userData.last_name}{" "}
                    </p>{" "}
                    <p
                      style={{
                        padding: "7px 15px",
                        backgroundColor: "#138EDE",
                        color: "#fff",
                        borderRadius: "5px",
                        boxShadow: "0px 0px 2px rgba(0,0,0,0.2)",
                      }}
                      onClick={() => handleLogout()}
                    >
                      Logout
                    </p>
                  </>
                ) : (
                  <>
                    <p onClick={() => navigate("/login")}>Login</p> /{" "}
                    <p onClick={() => navigate("/signup")}>Signup</p>
                  </>
                )}
              </Typography>
            </NavItems>
            <NavItems>
              <Badge badgeContent={1} variant="dot" color="notificationprimary">
                <FavoriteRoundedIcon />
              </Badge>
            </NavItems>
            <NavItems>
              <Badge badgeContent={4} color="notificationsecondary">
                <img src={cart} alt="cart" />
              </Badge>
            </NavItems>
          </OtherNav>
          <SpeOtherNav>
            <SpeNavItems>
              <Badge badgeContent={4} color="notificationsecondary">
                <img src={cart} alt="cart" />
              </Badge>
            </SpeNavItems>
          </SpeOtherNav>
        </MainContent>
      </MainNavBar>
      <nav>
        <div className="wrapper">
          <label for="menu-btn" className="btn menu-btn">
            <i class="fas fa-bars"></i>
          </label>
        </div>
        <div className="wrapper">
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />

          <ul className="nav-links">
            <label for="close-btn" className="btn close-btn">
              <i className="fas fa-times"></i>
              <AiFillCloseCircle style={{ background: "#000" }} />
            </label>
            <li>
              <Link to="/" className="desktop-item">
                View All
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">
                View All
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    {/* <img
                      src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                      alt=""
                    /> */}
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Stationery</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Stamps & Ink</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Diary</Link>
                      </li>
                      <li>
                        <Link to="/collection">Office Supplies</Link>
                      </li>
                      <li>
                        <Link to="/collection">Invitation</Link>
                      </li>
                      <li>
                        <Link to="/collection">Weddings</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Marketing Materials</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Poster</Link>
                      </li>
                      <li>
                        <Link to="/collection">Menu Cards</Link>
                      </li>
                      <li>
                        <Link to="/collection">Privacy Seal</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/" className="desktop-item">
                Visiting Cards
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">
                Visiting Cards
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    {/* <img
                      src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                      alt=""
                    /> */}
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Stationery</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Stamps & Ink</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Diary</Link>
                      </li>
                      <li>
                        <Link to="/collection">Office Supplies</Link>
                      </li>
                      <li>
                        <Link to="/collection">Invitation</Link>
                      </li>
                      <li>
                        <Link to="/collection">Weddings</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Marketing Materials</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Poster</Link>
                      </li>
                      <li>
                        <Link to="/collection">Menu Cards</Link>
                      </li>
                      <li>
                        <Link to="/collection">Privacy Seal</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/" className="desktop-item">
                Clothing & Bags
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">
                Clothing & Bags
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    {/* <img
                      src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                      alt=""
                    /> */}
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Stationery</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Stamps & Ink</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Diary</Link>
                      </li>
                      <li>
                        <Link to="/collection">Office Supplies</Link>
                      </li>
                      <li>
                        <Link to="/collection">Invitation</Link>
                      </li>
                      <li>
                        <Link to="/collection">Weddings</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Marketing Materials</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Poster</Link>
                      </li>
                      <li>
                        <Link to="/collection">Menu Cards</Link>
                      </li>
                      <li>
                        <Link to="/collection">Privacy Seal</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/" className="desktop-item">
                Mugs, Album & Gifts
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">
                Mugs, Album & Gifts
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    {/* <img
                      src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                      alt=""
                    /> */}
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Stationery</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Stamps & Ink</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Diary</Link>
                      </li>
                      <li>
                        <Link to="/collection">Office Supplies</Link>
                      </li>
                      <li>
                        <Link to="/collection">Invitation</Link>
                      </li>
                      <li>
                        <Link to="/collection">Weddings</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Marketing Materials</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Poster</Link>
                      </li>
                      <li>
                        <Link to="/collection">Menu Cards</Link>
                      </li>
                      <li>
                        <Link to="/collection">Privacy Seal</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/" className="desktop-item">
                Drinkware
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">
                Drinkware
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    {/* <img
                      src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                      alt=""
                    /> */}
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Stationery</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Stamps & Ink</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Diary</Link>
                      </li>
                      <li>
                        <Link to="/collection">Office Supplies</Link>
                      </li>
                      <li>
                        <Link to="/collection">Invitation</Link>
                      </li>
                      <li>
                        <Link to="/collection">Weddings</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Marketing Materials</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Poster</Link>
                      </li>
                      <li>
                        <Link to="/collection">Menu Cards</Link>
                      </li>
                      <li>
                        <Link to="/collection">Privacy Seal</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/" className="desktop-item">
                Stamps & Ink
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">
                Stamps & Ink
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    {/* <img
                      src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                      alt=""
                    /> */}
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Stationery</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Stamps & Ink</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Diary</Link>
                      </li>
                      <li>
                        <Link to="/collection">Office Supplies</Link>
                      </li>
                      <li>
                        <Link to="/collection">Invitation</Link>
                      </li>
                      <li>
                        <Link to="/collection">Weddings</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Marketing Materials</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Poster</Link>
                      </li>
                      <li>
                        <Link to="/collection">Menu Cards</Link>
                      </li>
                      <li>
                        <Link to="/collection">Privacy Seal</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/" className="desktop-item">
                Marketing Materials
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">
                Marketing Materials
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    {/* <img
                      src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                      alt=""
                    /> */}
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Stationery</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Stamps & Ink</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Diary</Link>
                      </li>
                      <li>
                        <Link to="/collection">Office Supplies</Link>
                      </li>
                      <li>
                        <Link to="/collection">Invitation</Link>
                      </li>
                      <li>
                        <Link to="/collection">Weddings</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Marketing Materials</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Poster</Link>
                      </li>
                      <li>
                        <Link to="/collection">Menu Cards</Link>
                      </li>
                      <li>
                        <Link to="/collection">Privacy Seal</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link to="/" className="desktop-item">
                Stationery
              </Link>
              <input type="checkbox" id="showMega" />
              <label for="showMega" className="mobile-item">
                Stationery
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                    {/* <img
                      src="https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg"
                      alt=""
                    /> */}
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Cloths & Bags</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Custom T-Shirt</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Caps</Link>
                      </li>
                      <li>
                        <Link to="/collection">Winterwear</Link>
                      </li>
                      <li>
                        <Link to="/collection">Bags</Link>
                      </li>
                      <li>
                        <Link to="/collection">New Launches</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Stationery</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Stamps & Ink</Link>
                      </li>
                      <li>
                        <Link to="/collection">Custom Diary</Link>
                      </li>
                      <li>
                        <Link to="/collection">Office Supplies</Link>
                      </li>
                      <li>
                        <Link to="/collection">Invitation</Link>
                      </li>
                      <li>
                        <Link to="/collection">Weddings</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>Marketing Materials</header>
                    <ul className="mega-links">
                      <li>
                        <Link to="/collection">Poster</Link>
                      </li>
                      <li>
                        <Link to="/collection">Menu Cards</Link>
                      </li>
                      <li>
                        <Link to="/collection">Privacy Seal</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                      <li>
                        <Link to="/collection">Website design</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;

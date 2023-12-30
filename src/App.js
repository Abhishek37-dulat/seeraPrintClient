import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import { Route, Routes, useNavigate } from "react-router-dom";
import Collection from "./pages/Collection";
import ProductDetail from "./pages/productDetails/ProductDetails";
import Cart from "./pages/Cart";
import Navbar from "./components/TopNavbar/Navbar";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import Contact from "./pages/Contact";
import UserProfile from "./pages/userprofile/UserProfile";
import PrintedProducts from "./components/UserProfile/PrintedProducts";
import Shipping from "./pages/Shipping";
import AddQuantity from "./pages/AddQuantity";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Editor from "./pages/editor/Editor";
import TermAndCondition from "./pages/Policy/TermAndCondition";
import NotFoundPage from "./pages/NotFoundPage";
import PrivacyAndCookiePolicy from "./pages/Policy/PrivacyAndCookiePolicy";
import CopyrightMatters from "./pages/Policy/CopyrightMatters";
import ScrollTop from "./components/somecomponents/ScrollTop";
import ContactPage from "./pages/contactUs/ContactPage";
import FAQ from "./pages/FAQ";
import BlogCategory from "./pages/blog/BlogCategory";
import Blogpage from "./pages/blog/Blogpage";
import AboutUs from "./components/AboutSeeraPrint/AboutUs";
import Career from "./pages/Career/Career";
import MyEditors from "./pages/editor/MyEditors";
import BrowseDesign from "./pages/browse/BrowseDesign";
import Header from "./components/Header/Header";
import ThankYou from "./components/somecomponents/Thankyou";
import VerifyEmail from "./components/somecomponents/VerifyEmail";
import EditorPage from "./pages/EditorPage/EditorPage.jsx";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const authData = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  return (
    <>
      <ScrollTop />
      {/* <TopNavbar />
      <Navbar /> */}
      <Header />
      <Routes>
        <Route exact index path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/browse-design" element={<BrowseDesign />} />
        <Route path="/product-details" element={<ProductDetail />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/add-quantity" element={<AddQuantity />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/editor" element={<EditorPage />} />
        <Route path="/my-editors" element={<MyEditors />} />

        {/* <Route
          path="/editor"
          render={(props) => (
            <Editor
              image={"image URL or data"}
              textInput={"text input"}
              {...props}
            />
          )}
        /> */}

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/customer-care/help-centre" element={<Contact />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/my-accounts" element={<UserProfile />} />
        <Route
          path="/my-accounts/printed-products"
          element={<PrintedProducts />}
        />
        <Route path="/terms-conditions" element={<TermAndCondition />} />
        <Route path="/privacy-policy" element={<PrivacyAndCookiePolicy />} />
        <Route path="/copyright-trademark" element={<CopyrightMatters />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blogs" element={<BlogCategory />} />
        <Route path="/blogpage" element={<Blogpage />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

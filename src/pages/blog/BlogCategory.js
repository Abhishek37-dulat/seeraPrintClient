import React, { useState } from "react";
import "./blogpage.css";
import ImageBlog from "../../images/blog.jpg";
import BusinessTips from "./BusinessTips";
import Branding from "./Branding";
import Creativity from "./Creativity";
import DesignTips from "./DesignTips";
import MarketingAdvertising from "./MarketingAdvertising";

const BlogCategory = () => {
  const [businessTip, setBusinesstips] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [branding, setBranding] = useState(false);
  const [design, setDesign] = useState(false);
  const [creativity, setCreativity] = useState(false);
  const [allArticles, setAllArticles] = useState(false);

  const handleBusinessTips = (event) => {
    setBusinesstips(true);
    setMarketing(false);
    setBranding(false);
    setDesign(false);
    setCreativity(false);
    setAllArticles(false);
  };
  const handleMarketing = () => {
    setMarketing(true);
    setBusinesstips(false);
    setBranding(false);
    setDesign(false);
    setCreativity(false);
    setAllArticles(false);
  };

  const handleBranding = () => {
    setBranding(true);
    setBusinesstips(false);
    setMarketing(false);
    setDesign(false);
    setCreativity(false);
    setAllArticles(false);
  };

  const handleDesign = () => {
    setDesign(true);
    setBusinesstips(false);
    setMarketing(false);
    setBranding(false);
    setCreativity(false);
    setAllArticles(false);
  };
  const handleCreativity = () => {
    setCreativity(true);
    setBusinesstips(false);
    setMarketing(false);
    setBranding(false);
    setDesign(false);
    setAllArticles(false);
  };

  const handleAllArticles = () => {
    setAllArticles(true);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row py-4">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="singleblog-heading">
              <h1 style={{ fontSize: "60px", fontWeight: 600, color: "#000" }}>
                {" "}
                Ideas & Advice{" "}
              </h1>
              <p style={{ fontSize: "18px" }}>
                A small business blog with helpful tips, practical advice and
                inspirational stories.
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <img src={ImageBlog} alt="blog" />
          </div>
        </div>
        <div className="row mx-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div style={{ alignItems: "center" }}>
              <div
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{ marginLeft: "8px", marginRight: "8px" }}
                  onClick={handleBusinessTips}
                >
                  Business Tips
                </span>
                <span
                  style={{ marginLeft: "8px", marginRight: "8px" }}
                  onClick={handleMarketing}
                >
                  Markting & Advertising
                </span>
                <span
                  style={{ marginLeft: "8px", marginRight: "8px" }}
                  onClick={handleBranding}
                >
                  Branding
                </span>
                <span
                  style={{ marginLeft: "8px", marginRight: "8px" }}
                  onClick={handleDesign}
                >
                  Design Tips
                </span>
                <span
                  style={{ marginLeft: "8px", marginRight: "8px" }}
                  onClick={handleCreativity}
                >
                  Creativity
                </span>
                <span
                  style={{ marginLeft: "8px", marginRight: "8px" }}
                  onClick={handleAllArticles}
                >
                  All Articles
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div>{businessTip ? <BusinessTips /> : null}</div>
          <div>{marketing ? <MarketingAdvertising /> : null}</div>
          <div>{branding ? <Branding /> : null}</div>
          <div>{design ? <DesignTips /> : null}</div>
          <div>{creativity ? <Creativity /> : null}</div>
        </div>
      </div>
    </>
  );
};

export default BlogCategory;

import React from "react";
import "./blogpage.css";
// import { Link } from "react-router-dom";
import BlogImage from "../../images/blogimage.png";

const Blogpage = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mx-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <img src={BlogImage} alt="blog" />
          </div>
        </div>
        <div className="row mx-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  d-flex align-items-center justify-content-center">
            <h1 className="heading-blog">
              How to market your small business as a new entrepreneur.
            </h1>
          </div>
        </div>
        <div className="row mx-4">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
            <p>
              Marketing materials are often one of the first things small
              business owners think about when starting their company. Do you
              need a website? What about brochures? Business cards?
            </p>
            <p>
              While the specific methods you use to get the word out will depend
              on your offerings, there are many affordable ways to market your
              business.
            </p>
            <h2>How to market your small business with strategy</h2>
            <p>
              Before you start designing and ordering marketing materials, give
              some thought to the type of person your business is going to help.
              If it’s a consumer, you’ll want to use different marketing
              materials than if you’re trying to get the attention of Fortune
              500 CEOs. With some strategy, however, you can attract both
              customer segments — and more — using these ideas.
            </p>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="card-container">
              <div className="card card-1">
                <div className="card-img"></div>
                <Link to="/" className="card-link">
                  <div class="card-img-hovered"></div>
                </Link>
                <div className="card-info">
                  <div className="card-about">
                    <div className="card-time">6/11/2018</div>
                  </div>
                  <h1 className="card-title">
                    There have been big Tesla accident at New Jersey
                  </h1>
                  <div className="card-creator">
                    category <Link to="/">Sardorbek Usmonov</Link>
                  </div>
                </div>
              </div>

              <div className="card card-2">
                <div className="card-img"></div>
                <Link to="/" className="card-link">
                  <div className="card-img-hovered"></div>
                </Link>
                <div className="card-info">
                  <div className="card-about">
                    <div className="card-time">6/07/2018</div>
                  </div>
                  <h1 className="card-title">
                    Samsung laptops is exploding again
                  </h1>
                  <div className="card-creator">
                    category <Link to="/">Tyler Platt</Link>
                  </div>
                </div>
              </div>

              <div className="card card-3">
                <div className="card-img"></div>
                <Link to="/" class="card-link">
                  <div className="card-img-hovered"></div>
                </Link>
                <div className="card-info">
                  <div className="card-about">
                    <div className="card-time">5/27/2018</div>
                  </div>
                  <h1 className="card-title">
                    Apple is having big Sale for the first time
                  </h1>
                  <div className="card-creator">
                    <span> category - Timur Mirzoyev</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Blogpage;

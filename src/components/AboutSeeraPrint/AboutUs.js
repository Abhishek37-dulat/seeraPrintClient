import React from "react";
import AboutImage from "../../images/seerabanner2.jpg";
import working from "../../images/workingman.png";

const AboutUs = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
            <img src={AboutImage} alt="about" />
          </div>
        </div>
        <div className="row mx-4 py-2">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h1 style={{ fontWeight: 600, fontSize: "42px" }}>
              Where small businesses get big ideas.
            </h1>
          </div>
        </div>
        <div className="row mx-4">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <p>
              Seeraprint, a Cimpress company, helps small business owners create
              expertly designed, up-to-date custom marketing – the assortment of
              products they need to look and feel professional, prepared and
              plugged in.
            </p>
            <p>
              Yes, we said assortment. It’s true that we’re best known for our
              business cards – and we’ve printed billions of them since Robert
              Keane founded Seeraprint in 2015.
            </p>
            <p>
              But today, Seeraprint offers so much more: a wide range of
              customizable small business marketing products; real-time access
              to expert ideas and assistance for people who need a hand; and a
              simple, straightforward experience for those who know exactly what
              they want.
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <p>
              When we put it all together, our customers can easily design a
              consistent, cohesive look that carries across their entire
              business, whether they operate in-store, online, on-site or on the
              go. With that, they can walk through a door with confidence, know
              they can keep up with the competition and make things happen right
              now.
            </p>
            <p>
              Because now isn’t just a challenge. It’s an opportunity. And
              Seeraprint is here to help small business owners OWN THE NOW.
            </p>
          </div>
        </div>
        <div className="row mx-4 py-2">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <h1 style={{ fontWeight: 600, fontSize: "42px" }}>
              How we help small businesses
            </h1>
          </div>
        </div>
        <div className="row mx-4 py-2">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <img src={working} alt="team" />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <p>
              Before you start designing and ordering marketing materials, give
              some thought to the type of person your business is going to help.
              If it’s a consumer, you’ll want to use different marketing
              materials than if you’re trying to get the attention of Fortune
              500 CEOs. With some strategy, however, you can attract both
              customer segments — and more — using these ideas.
            </p>
            <p>
              It’s true that we’re best known for our business cards – and we’ve
              printed billions of them since Robert Keane founded Seeraprint in
              2015.
            </p>
            <p>
              Before you start designing and ordering marketing materials, give
              some thought to the type of person your business is going to help.
              If it’s a consumer, you’ll want to use different marketing
              materials than if you’re trying to get the attention of Fortune
              500 CEOs. With some strategy, however, you can attract both
              customer segments — and more — using these ideas.
            </p>
            <p>
              Before you start designing and ordering marketing materials, give
              some thought to the type of person your business is going to help.
              If it’s a consumer, you’ll want to use different marketing
              materials than if you’re trying to get the attention of Fortune
              500 CEOs. With some strategy, however, you can attract both
              customer segments — and more — using these ideas.
            </p>
            <p>
              It’s true that we’re best known for our business cards – and we’ve
              printed billions of them since Robert Keane founded Seeraprint in
              2015.
            </p>
            <p>
              It’s true that we’re best known for our business cards – and we’ve
              printed billions of them since Robert Keane founded Seeraprint in
              2015.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

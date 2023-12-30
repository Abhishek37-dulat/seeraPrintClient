import React from "react";
import SingleBlog from "./SingleBlog";
import { BlogData } from "../../ConstantData/BlogData";

const DesignTips = () => {
  return (
    <>
      <div className="container-fluid">
        <h2
          className="py-4"
          style={{
            color: "#000",
            textDecorationLine: "underline",
            padding: "0px 80px",
          }}
        >
          Design Tips
        </h2>
        <div className="row d-flex">
          {BlogData.map((data, index) => {
            return (
              <>
                <div
                  className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
                  key={index}
                >
                  <SingleBlog
                    imgSrc={data.image}
                    title={data.title}
                    desc={data.desc}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DesignTips;

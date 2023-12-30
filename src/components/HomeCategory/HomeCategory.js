import React from "react";
import "./homecategory.css";
import { HomeCategoryData } from "../../ConstantData/HomeCategory";

const HomeCategory = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex">
          {HomeCategoryData.map((data, id) => {
            return (
              <>
                <div
                  className="col-6 col-sm-4 col-md-4 col-lg-2 col-xl-2"
                  key={id}
                >
                  <div className="card-list">
                    <article className="card">
                      <figure className="card-image">
                        <img
                          src={data.image}
                          alt="An orange painted blue, cut in half laying on a blue background"
                        />
                      </figure>
                      <div className="card-headers">
                        <p
                          className="mx-auto d-flex justify-content-center flex-wrap"
                          href="#"
                          style={{
                            color: "#fff",
                            fontSize: "1.2rem",
                          }}
                        >
                          {data.title}
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeCategory;

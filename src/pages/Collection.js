import React from "react";
import SingleBanner from "../components/Banner/SingleBanner";
import { TshirtData } from "../ConstantData/TshirtData";
import { TshirtLink } from "../ConstantData/TshirtData";
import SeeraBanner2 from "../images/seerabanner2.jpg";
import { Link, useNavigate } from "react-router-dom";
import "./collection.css";

const Collection = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <div>
        <SingleBanner imgsrc={SeeraBanner2} />
      </div>
      <div className="row py-4">
        <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <h6
            className="text-center"
            style={{ fontSize: "24px", fontWeight: 600 }}
          >
            Explore More Custom Tshirt
          </h6>
          {TshirtLink.map((ele, id) => {
            return (
              <>
                <div className="ourlinks" key={id}>
                  <Link className="reffer" to={ele.id}>
                    {ele.link}
                  </Link>
                </div>
              </>
            );
          })}

          <h6>Explore More Categories</h6>
          <p>List</p>
        </div>
        <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
          <div className="row">
            {TshirtData.map((data, id) => {
              return (
                <>
                  <div
                    className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 py-2"
                    key={id}
                  >
                    <main>
                      <div
                        className="card"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/product-details")}
                      >
                        <div className="card-img">
                          <img src={data.image} alt="tshirt" />
                        </div>
                        <div className="card-content">
                          <h4>{data.title}</h4>
                          <p style={{ fontSize: "20px" }}>
                            1 Starting at ₹ {data.price}
                          </p>
                        </div>
                      </div>
                    </main>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;

import React from "react";
import { useNavigate } from "react-router-dom";

const SingleBlog = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid">
        <div className="row py-2">
          <div
            className="card"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/blogpage")}
          >
            <img src={props.imgSrc} alt="img" />
            <h2 className="py-2">{props.title}</h2>
            <p>{props.desc}</p>
            <p style={{ color: "#138ede", fontSize: "22px", fontWeight: 600 }}>
              Read More
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;

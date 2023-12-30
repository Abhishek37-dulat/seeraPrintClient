import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const Products = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Card
        style={{ width: "inherit", cursor: "pointer" }}
        onClick={() => navigate("/collection")}
      >
        <Card.Img variant="top" src={props.imgSrc} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default Products;

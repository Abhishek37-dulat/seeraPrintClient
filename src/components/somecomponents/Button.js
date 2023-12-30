import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.link}
        style={{
          background: "#138ede",
          color: "#000",
          border: "1px solid #138ede",
          borderRadius: "25px",
          height: "45px",
          width: "150px",
          fontWeight: "600",
          fontSize: "16px",
        }}
      >
        {props.btn}
      </button>
    </div>
  );
};

export default Button;

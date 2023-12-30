import React from "react";

const LargeButton = (props) => {
  return (
    <>
      <div>
        <button
          style={{
            background: "#138ede",
            color: "#000",
            border: "1px solid #138ede",
            borderRadius: "25px",
            height: "45px",
            width: "260px",
            fontWeight: "600",
            fontSize: "16px",
          }}
        >
          {props.btn}
        </button>
      </div>
    </>
  );
};

export default LargeButton;

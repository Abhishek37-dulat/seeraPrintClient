import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";

const CustomButton = ({ type, title, customStyle, handleClick }) => {
  const snap = useSnapshot(state);
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    }
  };
  const forthStyle = {
    padding: "0.5rem 0.75rem",
    flex: "1",
    borderRadius: "0.375rem",
  };
  return (
    <button
      className={forthStyle}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;

import React from "react";
import { useSnapshot } from "valtio";

import state from "../store";

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state);

  const activeStyles =
    isFilterTab && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: "transparent", opacity: 1 };
  const firstStyle = {
    width: "66.666%",
    height: "66.666%",
  };
  const secondStyle = {
    width: "91.666%",
    height: "91.666%",
    objectFit: "contain",
  };
  const thirdStyle = {
    width: "14px",
    height: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    userSelect: "none",
  };
  return (
    <div
      key={tab.name}
      className={` ${thirdStyle} ${
        isFilterTab ? "rounded-full glassmorphism" : "rounded-4"
      }`}
      onClick={handleClick}
      style={activeStyles}
    >
      <img
        src={tab.icon}
        alt={tab.name}
        className={`${isFilterTab ? firstStyle : secondStyle}`}
      />
    </div>
  );
};

export default Tab;

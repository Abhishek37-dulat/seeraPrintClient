import React, { useState } from "react";
// import Editor from "./Editor";
import { SketchPicker } from "react-color-pick";

const ColorPicker = ({ setCurrentColor }) => {
  const [currentColor1, setCurrentColor1] = useState("#D0021B");
  const appStyle = {
    backgroundColor: currentColor1.hex,
  };
  const handleOnChange = (color) => {
    setCurrentColor(color.hex);
    setCurrentColor1(color.hex);
    console.log(color.hex);
  };

  return (
    <>
      <div style={appStyle}>
        <SketchPicker
          width={280}
          color={currentColor1}
          onChangeComplete={(e) => handleOnChange(e)}
        />
      </div>
    </>
  );
};

export default ColorPicker;

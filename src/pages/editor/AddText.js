import React, { useState } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { SketchPicker } from "react-color-pick";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Button from "../../components/somecomponents/Button";

const AddText = ({ setDisplayText }) => {
  const [textInput, setTextInput] = useState("");
  const [colorText, setColorText] = useState("#000");
  const ariaLabel = { "aria-label": "description" };

  const handleTextChan = (e) => {
    const newText = e.target.value;
    setTextInput(newText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayText(textInput);
    console.log(textInput);
  };
  const handleDelete = () => {
    setDisplayText("");
    setTextInput("");
  };
  const handleColorChange = (color) => {
    setColorText(color.hex);
    console.log(color);
  };

  return (
    <div className="card">
      <div className="py-4">
        <h4>Text</h4>
        <p>
          Edit your text below, or click on the field you'd like to edit
          directly on your design.
        </p>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <Input
            placeholder="Type Text"
            value={textInput}
            onChange={handleTextChan}
            inputProps={ariaLabel}
          />
          <MdOutlineDeleteOutline
            onClick={handleDelete}
            style={{ cursor: "pointer" }}
          />
        </Box>

        <Button btn="New text field" link={(e) => handleSubmit(e)} />
        <SketchPicker value={colorText} onChange={handleColorChange} />
      </div>
    </div>
  );
};

export default AddText;

import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { Box } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Arial, sans-serif",
  "Helvetica, sans-serif",
  "Gill Sans, sans-serif",
  "Lucida, sans-serif",
  "Helvetica Narrow, sans-serif",
  "sans-serif",
  "Times, serif",
  "Times New Roman, serif",
  "Palatino, serif",
  "Bookman, serif",
  "New Century Schoolbook, serif",
  "serif",
  "Andale Mono, monospace",
  "Courier New, monospace",
  "Courier, monospace",
  "Lucidatypewriter, monospace",
  "Fixed, monospace",
  "monospace",
  "Comic Sans, Comic Sans MS, cursive",
  "Zapf Chancery, cursive",
  "Coronetscript, cursive",
  "Florence, cursive",
  "Parkavenue, cursive",
  "cursive",
  "Impact, fantasy",
  "Arnoldboecklin, fantasy",
  "Oldtown, fantasy",
  "Blippo, fantasy",
  "Brushstroke, fantasy",
  "fantasy",
];

function getStyles(personName) {
  return {
    fontFamily: personName,
  };
}

const FontFamily = ({ setSelectFontFamily }) => {
  const [personName, setPersonName] = useState(names[0]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(value);
    setSelectFontFamily(value);
  };

  return (
    <Box>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            return <p style={getStyles(selected)}>{selected}</p>;
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FontFamily;

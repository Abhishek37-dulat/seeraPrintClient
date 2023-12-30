import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import EditIcon from "@mui/icons-material/Edit";
import BackgroundImageBoxSliderLeftRight from "./BackgroundImageSliderLeftRight";
import BackgroundImageBoxSlider from "./BackgroundImageSliderTopBottom";
import BackgroundImage from "./BackgroundImage";
import BackgroundImageScaleX from "./BackgroundImageScaleX";
import BackgroundImageScaleY from "./BackgroundImageScaleY";
import ShapeBackgroundColor from "./ShapeBackgroundColor";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import ShapeStrokeColor from "./ShapeStrokeColor";
import ShapeStrokeWidth from "./ShapeStrokeWidth";

export default function ShapeColorsDrawers({
  shapDrawerCon,
  setShapDrawerCon,
  setShapeBackSelectColor,
  addShapeBackGroundColor,
  setShapeStrokeColor,
  addShapeStrokeColor,
  addShapeStrokeWidth,
  setShapeStrokeWidth,
}) {
  const toggleDrawer = () => {
    setShapDrawerCon(false);
  };
  const handleShapeBackgroundColorClick = (event) => {
    // Prevent the event from reaching the parent ListItem
    event.stopPropagation();
  };
  const list = () => (
    <Box
      sx={{
        width: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List></List>
      <Divider />
      <List>
        <ListItem style={{ marginLeft: "150px" }}>
          <IconButton onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={handleShapeBackgroundColorClick}
          style={{ zIndex: "1" }}
        >
          <ShapeBackgroundColor
            setShapeBackSelectColor={setShapeBackSelectColor}
            addShapeBackGroundColor={addShapeBackGroundColor}
          />
        </ListItem>
        <ListItem
          disablePadding
          onClick={handleShapeBackgroundColorClick}
          style={{ zIndex: "1" }}
        >
          <ShapeStrokeColor
            setShapeStrokeColor={setShapeStrokeColor}
            addShapeStrokeColor={addShapeStrokeColor}
          />
        </ListItem>
        <ListItem disablePadding onClick={handleShapeBackgroundColorClick}>
          <ShapeStrokeWidth
            addShapeStrokeWidth={addShapeStrokeWidth}
            setShapeStrokeWidth={setShapeStrokeWidth}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div style={{ margin: "0px 10px" }}>
      <React.Fragment key={"left"}>
        <Drawer anchor={"left"} open={shapDrawerCon} onClose={toggleDrawer}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

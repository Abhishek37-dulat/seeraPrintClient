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

export default function BackgroundImageDrawer({
  setValueForTopBottom,
  setValueForLeftRight,
  setImageValueForLeftRight,
  setImageValueForTopBottom,
}) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List></List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <BackgroundImageBoxSliderLeftRight
            setValueForLeftRight={setValueForLeftRight}
          />
        </ListItem>
        <ListItem disablePadding>
          <BackgroundImageBoxSlider
            setValueForTopBottom={setValueForTopBottom}
          />
        </ListItem>
        <ListItem disablePadding>
          <BackgroundImageScaleX
            setImageValueForLeftRight={setImageValueForLeftRight}
          />
        </ListItem>
        <ListItem disablePadding>
          <BackgroundImageScaleY
            setImageValueForTopBottom={setImageValueForTopBottom}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div style={{ margin: "0px 10px" }}>
      <React.Fragment key={"right"}>
        <Button
          onClick={toggleDrawer("right", true)}
          style={{
            color: "#fff",
            fontWeight: "600",
            marginTop: "20px",
            backgroundColor: "#1e1e1e",
          }}
        >
          Background Image <EditIcon />
        </Button>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

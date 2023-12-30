import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      lxs: 500,
      sm: 600,
      msm: 700,
      lsm: 800,
      md: 900,
      lmd: 1024,
      lg: 1200,
      xl: 1920,
    },
  },
  palette: {
    notificationprimary: {
      main: "#FC004C",
    },
    notificationsecondary: {
      main: "#138EDE",
    },
  },
  // other theme configurations
});

export default customTheme;

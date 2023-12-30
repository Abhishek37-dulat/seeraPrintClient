import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
// import store from "./store";
import store from "./redux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import customTheme from "./createTheme";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={customTheme}>
    <Provider store={store}>
      <ToastContainer />
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  </ThemeProvider>
);

reportWebVitals();

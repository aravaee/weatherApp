import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Home from "./pages/home/Home";
import Weather from "./pages/weather/Weather";

const theme = createTheme({
  palette: {
    background: {
      default: "#171717",
    },
  },
  text: {
    primary: "#ffffff",
  },
  typography: {
    allVariants: {
      color: "#fff",
    },
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="weather" element={<Weather />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;

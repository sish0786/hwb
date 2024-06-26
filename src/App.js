import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import ServiceInfo from "./components/ServiceInfo";
import NavBar from "./components/Nav";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: '#165A4A'
    },
    secondary: {
      main: "#ffff"
    },
    text: {
      primary: '#165A4A'
    }
  },
  typography: {
    fontFamily: "Inter",
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <div id="home"><Home /></div>
      <div id="about"><AboutUs /></div>
      <div id="whatWeDo"><ServiceInfo /></div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;

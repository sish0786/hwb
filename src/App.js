import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import ServiceInfo from "./components/ServiceInfo";
import NavBar from "./components/Nav";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

const theme = createTheme({
  palette:{
    primary: {
      main: '#165A4A'
    },
    secondary:{
      main:"#ffff"
    },
    text:{
      primary: '#165A4A'
    }
  },
  typography:{
    fontFamily: "Inter",
  }
})

function App() {
  return (
      <ThemeProvider theme={theme}>
          <NavBar></NavBar>
          <Home></Home>
          <AboutUs></AboutUs>
          <ServiceInfo></ServiceInfo>
          <Footer></Footer>
      </ThemeProvider>
  );
}

export default App;

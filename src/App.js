import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import ServiceInfo from "./components/ServiceInfo";
import NavBar from "./components/Nav";
import Home from "./components/Home";

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
          <ServiceInfo></ServiceInfo>
      </ThemeProvider>
  );
}

export default App;

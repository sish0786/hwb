import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import ServiceInfo from "./components/ServiceInfo";

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
          <ServiceInfo></ServiceInfo>
      </ThemeProvider>
  );
}

export default App;

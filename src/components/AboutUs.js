import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import img from "../resources/airportImage.svg";
const AboutUs = () => {
  return (
    <Grid container padding={7}>
      <Grid item xs={12} lg={6}>
        <Typography
          variant="h2"
          sx={{ color: "#165A4A", textDecoration: "underline", marginBottom:"50px"}}
        >
          About Us
        </Typography>
        <Typography variant="h3" gutterBottom>
          Navigate Your New Beginnings in Florida, USA!
        </Typography>
        <Typography variant="h5" sx={{ color: "gray" }} paragraph>
          We are a non-profit organization dedicated to helping international
          students and their families navigate their first move to the US in
          Florida.
        </Typography>
        <Typography variant="h5" paragraph sx={{ color: "gray", marginBottom:"50px" }}>
          With personalized support and resources, we aim to ease the
          transition, ensuring a smooth and welcoming experience. From securing
          accommodations to understanding local customs, our team is here to
          assist every step of the way.
        </Typography>
        <Button variant="contained" color="primary">
          Learn more
        </Button>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Grid container justifyContent={"center"}>
          <img src={img} alt="Img"></img>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutUs;

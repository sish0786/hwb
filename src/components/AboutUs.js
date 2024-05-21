import React from 'react';
import { Grid, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';
import img from "../resources/airportImage.svg"
const AboutUs = () => {
  return (
    <Grid container spacing={2} style={{ padding: 24 }}>
      <Grid item xs={12} sm={6}>
        <Card raised>
          <CardMedia
            component="img"
            height="140"
            image= {img}// Update path to your image
            alt="Community gathering"
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card raised>
          <CardContent>
            <Typography variant="h4" gutterBottom>About us</Typography>
            <Typography variant="h5" gutterBottom>Navigate Your New Beginnings in Florida, USA!</Typography>
            <Typography variant="body1" paragraph>
              We are a non-profit organization dedicated to helping international
              students and their families navigate their first move to the US in Florida.
            </Typography>
            <Typography variant="body1" paragraph>
              With personalized support and resources, we aim to ease the transition,
              ensuring a smooth and welcoming experience. From securing accommodations
              to understanding local customs, our team is here to assist every step of the way.
            </Typography>
            <Button variant="contained" color="primary">
              Learn more
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AboutUs;

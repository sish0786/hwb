import { Box, Button, Grid, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import whatWeDo from "../resources/whatWeDo.svg";
import RequestsModal from './RequestsModal';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


function ServiceInfo() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const [value, setValue] = React.useState("item");
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleChange = (event, newValue) => {

    setValue(newValue);
  };

  const handleOpenModal = () => {
    setModalOpen(true);  // Function to open modal
  };

  return (
    <Grid container sx={{ background: "#165A4A" }}>
      <Grid item xs={isSmallScreen?"12":"7"}>
        <Grid container padding={7} gap={5}>
          <Grid item xs="12">
            <Typography
              variant="h2"
              sx={{ color: "#ffff", textDecoration: "underline" }}
            >
              What We Do
            </Typography>
          </Grid>
          <Grid item xs="12">
            <Typography variant="h4" sx={{ color: "#ffff" }}>
              We are always where other people need help
            </Typography>
          </Grid>
          <Grid item xs="12">
            <Typography variant="h5" sx={{ color: "#ffff" }}>
              Our Volunteer Airport Pickup service provides a warm welcome to
              international students and families arriving in Florida for the
              first time. Understanding that you might not know anyone, our
              dedicated volunteers offer friendly and reliable transportation
              from the airport to your new home or campus. Simply provide your
              arrival details, and our team will be there to greet you, helping
              you navigate your first steps in a new place.
            </Typography>
          </Grid>
          <Grid item xs="12">
            <Button
              variant="outlined"
              sx={{ color: "#ffff", '&:hover': { bgcolor: '#ffff',color:"#165A4A" } ,border: "1px solid" }}
              onClick={handleOpenModal}
            >
             {value === "item"?"Items Request FORM":"PICKUP FORM"}
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={isSmallScreen?"12":"5"}>
        <Grid container padding={7} gap={1}>
          <Grid item xs="12">
              <Tabs textColor="secondary"  indicatorColor="secondary" value={value} onChange={handleChange} centered>
                <Tab value="item" sx={{color:"#ffff"}} label="Request Items" />
                <Tab disabled label="" />
                <Tab value="airport" sx={{color:"#ffff"}} label="Airport Pickup" />
              </Tabs>
          </Grid>
          <Grid xs="12" item>
            <img width="100%" src={whatWeDo} alt="airport Image"></img>
          </Grid>
        </Grid>
      </Grid>
      <RequestsModal open={modalOpen} setOpen={setModalOpen} formType={value} /> 
    </Grid>
  );
}

export default ServiceInfo;

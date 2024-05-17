import { Grid, Typography } from "@mui/material";
import Carousel from "./Carousel";
import img1 from "../resources/home.svg";


const imageList = [img1,img1,img1,img1];

export default function Home() {
  return (
    <>
      <Grid container padding={20}>
        <Grid item xs="6">
          <Grid container className="p-20 gap-20">
            <Grid item xs="12">
              <Typography sx={{fontFamily:"Inter"}} variant="h1">Home Without Borders</Typography>
            </Grid>
            <Grid item xs="12">
              <Typography sx={{fontFamily:"Inter"}} variant="h5">
                Empowering journeys, our non-profit is your guide to a seamless
                transition to life in Florida, USA, for international students
                and families.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs="6">
          <Grid container justifyContent={"center"}>
            <Carousel images={imageList}></Carousel>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

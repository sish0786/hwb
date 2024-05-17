import { Grid, Typography } from "@mui/material";
import Carousel from "./Carousel";
import img1 from "../resources/home.svg";
import QuoteCard from "./QuoteCard";


const imageList = [img1,img1,img1,img1];

const teamQuotes = [
  {
    image: img1,
    name: 'Mervat Lorem Ipsum',
    designation: 'Incharge Ipsum',
    quote: 'The Smiles on their faces naturally brings a smile on my face as well.'
  },
  {
    image: img1,
    name: 'John Doe',
    designation: 'Developer',
    quote: 'Coding is not just typing. It\'s thinking and problem-solving.'
  },
  // More team members
];


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
      <Grid container>
        <Grid item xs={12}>
          <QuoteCard people={teamQuotes}></QuoteCard>
        </Grid>
      </Grid>
    </>
  );
}

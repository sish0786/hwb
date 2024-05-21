import { Grid, Typography } from "@mui/material";
import Carousel from "./Carousel";
import img1 from "../resources/home.svg";
import QuoteCard from "./QuoteCard";
import triangle from "../resources/triangle.svg";
import circle from "../resources/circle.svg";
import zigzag from "../resources/zigzag.svg";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const imageList = [img1, img1, img1, img1];

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
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <Grid container padding={isSmallScreen ? 10 : 20} paddingTop={isSmallScreen ? 5 : 10}>
        <Grid item xs={isSmallScreen ? "12" : "6"}>
          <Grid container className="p-20 gap-20">
            <Grid item xs="12" marginBottom={2}>
              <img src={triangle} alt="triangle"></img>
            </Grid>
            <Grid container justifyContent="center" xs="8" marginBottom={2}>
              <img src={circle} alt="circle"></img>
            </Grid>
            <Grid container justifyContent="end" xs="12" marginBottom={2}>
              <img src={zigzag} alt="zigzag"></img>
            </Grid>
            <Grid item xs="12">
              <Typography sx={{ fontFamily: "Inter" }} variant="h1">Home Without Borders</Typography>
            </Grid>
            <Grid item xs="12">
              <Typography sx={{ fontFamily: "Inter" }} variant="h5">
                Empowering journeys, our non-profit is your guide to a seamless
                transition to life in Florida, USA, for international students
                and families.
              </Typography>
            </Grid>
            <Grid container xs="12" paddingTop={2} paddingBottom={2}>
              <img src={zigzag} alt="zigzag"></img>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={isSmallScreen ? "12" : "6"}>
          <Grid container justifyContent={"center"}>
            <Carousel images={imageList}></Carousel>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <QuoteCard people={teamQuotes} />
        </Grid>
      </Grid>
    </>
  );
}

import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Footer() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
        <Grid container gap={2}>
            <Grid container justifyContent="center">
                <Typography variant={isSmallScreen?"h2":"h1"} sx={{fontFamily:"WallPoet",color: "#165A4A"}}>HWB</Typography>
            </Grid>
            <Grid container justifyContent="center" xs="12">
                <Typography align='center' variant={isSmallScreen?"h4":"h3"} sx={{color:"#165A4A"}}>Helping People thrive from day one in Florida</Typography>
            </Grid>
            <Grid container alignItems="center">
                <Grid container justifyContent={isSmallScreen?"center":"flex-end"} xs={isSmallScreen?"12":"4"}>
                <Typography sx={{ color: '#165A4A', fontWeight:"bold", borderTop: '3px solid', padding: '10px' }}>
      HWB 2024
    </Typography>
                </Grid>
                <Grid container justifyContent="center" xs={isSmallScreen?"12":"4"}>
                    <Typography sx={{color:"#165A4A", fontWeight:"bold", borderTop: '3px solid', padding: '10px'}}>contact@email.com</Typography>
                </Grid>
                <Grid container justifyContent={isSmallScreen?"center":"flex-start"} xs={isSmallScreen?"12":"4"}>
                    <Typography sx={{color:"#165A4A", fontWeight:"bold", borderTop: '3px solid', padding: '10px'}}>+1 473 234 5678</Typography>
                </Grid>
            </Grid>
        </Grid>
    </>
  )
}

export default Footer;
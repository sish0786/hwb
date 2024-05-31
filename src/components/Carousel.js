import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosNewIcon from '@mui/icons-material/ArrowForwardIos';
import MobileStepper from '@mui/material/MobileStepper';

const Carousel = ({ images }) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;
  const [autoPlay, setAutoPlay] = useState(true);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(handleNext, 5000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [activeStep, autoPlay]);

  return (
    <Box sx={{ maxWidth: 650, marginTop: 10, marginLeft: 10, flexGrow: 1, position: 'relative', overflow: 'hidden' }}>
      <img
        src={images[activeStep]}
        alt={`Image ${activeStep}`}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        onMouseOver={() => setAutoPlay(false)}
        onMouseOut={() => setAutoPlay(true)}
      />
      <IconButton
        sx={{ position: 'absolute', left: 0, top: '50%', color: 'white', backgroundColor: 'rgba(0,0,0,0.5)' }}
        onClick={handleBack}
        aria-label="previous image"
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton
        sx={{ position: 'absolute', right: 0, top: '50%', color: 'white', backgroundColor: 'rgba(0,0,0,0.5)' }}
        onClick={handleNext}
        aria-label="next image"
      >
        <ArrowForwardIosNewIcon />
      </IconButton>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{ position: 'absolute', bottom: 0, width: '100%', backgroundColor: 'transparent' }}
      />
    </Box>
  );
};

export default Carousel;

import React, { useState, useEffect } from 'react';
import { Card, Typography, Box } from '@mui/material';

const QuoteCard = ({ people }) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = people.length;
  const [autoPlay, setAutoPlay] = useState(true);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoPlay) {
        handleNext();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [activeStep, autoPlay]);

  const person = people[activeStep];

  return (
    <Card sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 2,
      maxWidth: '100%',
      boxShadow: 3,
      border: '1px solid #ccc'  // Grey border
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        maxWidth: '40%'
      }}>
        <img
          src={person.image}
          alt={person.name}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '10px'
          }}
        />
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 2,
        flexGrow: 1
      }}>
        <Typography variant="h5" component="div">{person.name}</Typography>
        <Typography variant="subtitle1" color="text.secondary">{person.designation}</Typography>
        <Typography variant="body1" style={{ fontStyle: 'italic', marginTop: 2 }}>
          "{person.quote}"
        </Typography>
      </Box>
    </Card>
  );
};

export default QuoteCard;

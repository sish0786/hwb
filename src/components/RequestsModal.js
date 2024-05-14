import React, { useState } from 'react';
import { Box, Button, Modal, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import StyledTitle from './StyledTitle';
import FormComponent from './FormComponent';
import airportImage from '../resources/airportImage.svg';
import itemRequestImage from '../resources/itemRequestImage.svg';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '60%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#f0f5f2',
  boxShadow: 24,
  p: 0,
  borderRadius: 8,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
};

export default function RequestsModal({ open, setOpen, formType }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const handleClose = () => setOpen(false);

  // const handleToggleFormType = () => {
  //   setFormType((prevType) => (prevType === 'airport' ? 'item' : 'airport'));
  // };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Grid container>
            {!isSmallScreen && (
              <Grid item xs={5}>
                <img
                  src={formType === 'airport' ? airportImage : itemRequestImage}
                  alt="form visual representation"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Grid>
            )}
            <Grid item xs={isSmallScreen ? 12 : 7}>
              <Box sx={{ p: 4 }}>
                <StyledTitle title={formType === 'airport' ? 'AIRPORT PICKUP' : 'ITEM REQUEST'} />
                <Box mt={10}>
                  <FormComponent closeModal={handleClose} formType={formType} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

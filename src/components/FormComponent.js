import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import axios from 'axios';  // Import Axios for HTTP requests

const FormComponent = ({ formType, closeModal }) => {
  const isAirportPickup = formType === 'airport';
  const [formData, setFormData] = useState({
    name: '',
    whatsappNumber: '',
    flightNumber: '',
    dateOfArrival: '',
    mobileNumber: '',
    address: '',
    itemsNeeded: ''
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();  // Prevent default form submission behavior
    const baseurl = 'http://localhost:5000';
    const url = isAirportPickup ? `${baseurl}/api/pickupRequests` : `${baseurl}/api/itemRequests`;
    
    try {
      const response = await axios.post(url, formData);
      console.log(response.data);  // Console log the response from the server
      closeModal();  // Close modal on successful submission
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <form style={{ width: '100%' }} onSubmit={handleSubmit}>
      <Grid container spacing={7}>
        {/* All other fields remain the same. Just add 'name' prop to each TextField for handleChanges */}
        <Grid item xs={12}>
          <TextField fullWidth label="Name" variant="outlined" name="name" value={formData.name} onChange={handleChange} />
        </Grid>
        {isAirportPickup ? (
          <>
            <Grid item xs={6}>
              <TextField fullWidth label="Whatsapp Number" variant="outlined" name="whatsappNumber" value={formData.whatsappNumber} onChange={handleChange} />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Flight Number" variant="outlined" name="flightNumber" value={formData.flightNumber} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Date of Arrival" type="date" InputLabelProps={{ shrink: true }} variant="outlined" name="dateOfArrival" value={formData.dateOfArrival} onChange={handleChange} />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={6}>
              <TextField fullWidth label="Mobile Number" variant="outlined" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Address" variant="outlined" name="address" value={formData.address} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Item(s) Needed" variant="outlined" name="itemsNeeded" value={formData.itemsNeeded} onChange={handleChange} />
            </Grid>
          </>
        )}
        <Grid item xs={6}>
          <Button fullWidth onClick={closeModal} variant="contained" sx={{ bgcolor: '#2c5c48', color: 'white', '&:hover': { bgcolor: '#244e3e' } }}>
            Cancel
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button type="submit" fullWidth variant="contained" sx={{ bgcolor: '#2c5c48', color: 'white', '&:hover': { bgcolor: '#244e3e' } }}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormComponent;

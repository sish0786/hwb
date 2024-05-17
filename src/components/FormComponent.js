import React, { useState } from 'react';
import { TextField, Button, Grid, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';

const FormComponent = ({ formType, closeModal }) => {
  const isAirportPickup = formType === 'airport';
  const [formData, setFormData] = useState({
    name: '',
    whatsappNumber: '',
    flightNumber: '',
    dateOfArrival: '',
    mobileNumber: '',
    address: '',
    itemsNeeded: '',
    gender: '',
    foodPreference: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setFormErrors({ ...formErrors, [event.target.name]: '' }); // Clear errors on change
  };

  const validateForm = () => {
    const errors = {};
    // Validation for existing fields
    if (!formData.name) errors.name = 'Name is required.';
    if (!formData.whatsappNumber) {
      errors.whatsappNumber = 'WhatsApp number is required.';
    } else if (formData.whatsappNumber.length < 10) {
      errors.whatsappNumber = 'WhatsApp number must be at least 10 digits.';
    }
    if (!formData.flightNumber) errors.flightNumber = 'Flight number is required.';
    if (!formData.dateOfArrival) {
      errors.dateOfArrival = 'Date of arrival is required.';
    } else if (new Date(formData.dateOfArrival) <= new Date()) {
      errors.dateOfArrival = 'Date of arrival should be a future date.';
    }
    // Validation for new fields
    if (!formData.gender) errors.gender = 'Gender is required.';
    if (!formData.foodPreference) errors.foodPreference = 'Food preference is required.';

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const baseurl = 'http://localhost:5000';
    const url = isAirportPickup ? `${baseurl}/api/pickupRequests` : `${baseurl}/api/itemRequests`;
    
    try {
      const response = await axios.post(url, formData);
      console.log(response.data);
      closeModal();
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <form style={{ width: '100%' }} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        {/* Existing fields */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!formErrors.name}
            helperText={formErrors.name}
          />
        </Grid>
        {/* Continue with other existing fields and form structure... */}
        {isAirportPickup ? (
          <>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="WhatsApp Number"
                variant="outlined"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                error={!!formErrors.whatsappNumber}
                helperText={formErrors.whatsappNumber}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Flight Number"
                variant="outlined"
                name="flightNumber"
                value={formData.flightNumber}
                onChange={handleChange}
                error={!!formErrors.flightNumber}
                helperText={formErrors.flightNumber}
              />
            </Grid>
                    {/* New fields for Gender and Food Preference */}
        <Grid item xs={6}>
          <FormControl fullWidth error={!!formErrors.gender}>
            <InputLabel>Gender</InputLabel>
            <Select
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
            {!!formErrors.gender && <p style={{ color: 'red' }}>{formErrors.gender}</p>}
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth error={!!formErrors.foodPreference}>
            <InputLabel>Food Preference</InputLabel>
            <Select
              label="Food Preference"
              name="foodPreference"
              value={formData.foodPreference}
              onChange={handleChange}
            >
              <MenuItem value="vegan">Vegan</MenuItem>
              <MenuItem value="non-vegetarian">Non-Vegetarian</MenuItem>
              <MenuItem value="halal">Halal</MenuItem>
            </Select>
            {!!formErrors.foodPreference && <p style={{ color: 'red' }}>{formErrors.foodPreference}</p>}
          </FormControl>
        </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Date of Arrival"
                type="date"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                name="dateOfArrival"
                value={formData.dateOfArrival}
                onChange={handleChange}
                error={!!formErrors.dateOfArrival}
                helperText={formErrors.dateOfArrival}
              />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Mobile Number"
                variant="outlined"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                error={!!formErrors.mobileNumber}
                helperText={formErrors.mobileNumber}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Address"
                variant="outlined"
                name="address"
                value={formData.address}
                onChange={handleChange}
                error={!!formErrors.address}
                helperText={formErrors.address}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Item(s) Needed"
                variant="outlined"
                name="itemsNeeded"
                value={formData.itemsNeeded}
                onChange={handleChange}
                error={!!formErrors.itemsNeeded}
                helperText={formErrors.itemsNeeded}
              />
            </Grid>
          </>
        )}
        {/* Submit and Cancel buttons */}
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

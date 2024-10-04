import React from 'react';

import { Box, Button, TextField, Typography } from '@mui/material';

export const LogIn = () => {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        maxWidth: 400,
        margin: 'auto',
        padding: 3,
        border: '1px solid #ccc',
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: '#f9f9f9',
        mt: 5,
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome Back!
      </Typography>
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        required
      />
      <Button variant="contained" color="primary" type="submit">
        Log In
      </Button>
    </Box>
  );
};

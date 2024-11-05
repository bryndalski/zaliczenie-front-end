import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';

export const Unauthorized = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        padding: 4,
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        Unauthorized Access
      </Typography>
      <Typography variant="body1" gutterBottom>
        You do not have permission to view this page.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleLoginRedirect}
        sx={{ marginTop: 2 }}
      >
        Go to Login
      </Button>
    </Box>
  );
};

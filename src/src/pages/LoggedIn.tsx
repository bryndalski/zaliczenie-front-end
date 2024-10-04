import React from 'react';

import { Box, Button, Typography } from '@mui/material';

export const LoggedIn = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: 2,
        backgroundColor: '#f0f0f0',
        padding: 3,
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        You are logged in!
      </Typography>
      <Button variant="contained" color="primary">
        Log Out
      </Button>
    </Box>
  );
};

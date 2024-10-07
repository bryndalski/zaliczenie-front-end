import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';

const AuthorizedPage = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/some-other-page');
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
        Authorized Access
      </Typography>
      <Typography variant="body1" gutterBottom>
        Welcome to the authorized page.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleNavigation}
        sx={{ marginTop: 2 }}
      >
        Go to Another Page
      </Button>
    </Box>
  );
};

export default AuthorizedPage;

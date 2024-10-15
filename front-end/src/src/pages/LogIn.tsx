import React, { useState } from 'react';

import { Button, Container, Typography } from '@mui/material';

const TokenPage = () => {
  const [token, setToken] = useState<string | null>(null);

  const handleGetToken = async () => {
    try {
      const response = await fetch('http://localhost:3000/token', {
        method: 'POST',
      });

      console.log({ response });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);

      setToken(data?.accessToken);
      alert(`Token: ${data.accessToken}`);
    } catch (error) {
      console.error('Error fetching token:', error);
    }
  };

  const handleRedirect = () => {
    window.location.href = '/another-page'; // Replace with the actual redirect URL
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Token Generator
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleGetToken}
        sx={{ padding: '10px 20px', fontSize: '16px', margin: '10px' }}
      >
        Get Token
      </Button>
      {token && (
        <Button
          variant="contained"
          color="secondary"
          onClick={handleRedirect}
          sx={{ padding: '10px 20px', fontSize: '16px', margin: '10px' }}
        >
          Redirect
        </Button>
      )}
    </Container>
  );
};

export default TokenPage;

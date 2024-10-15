import React from 'react';

import { Button, Container, Typography } from '@mui/material';

import { TokenDisplay } from '../core/Components';
import { useFakeAuth } from '../hooks/useFakeAuth';
import { useUserStore } from '../stores/useUserStore/useUserStore';

const TokenPage = () => {
  const { signIn } = useFakeAuth();

  const { token } = useUserStore();
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
        onClick={signIn}
        sx={{ padding: '10px 20px', fontSize: '16px', margin: '10px' }}
      >
        Get Token
      </Button>
      {token && (
        <>
          <TokenDisplay />
          <Button
            variant="contained"
            color="secondary"
            onClick={handleRedirect}
            sx={{ padding: '10px 20px', fontSize: '16px', margin: '10px' }}
          >
            Redirect
          </Button>
        </>
      )}
    </Container>
  );
};

export default TokenPage;

import React from 'react';

import { Box, Paper, Typography } from '@mui/material';

const AuthorizedPage = () => {
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
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          borderRadius: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Authorized Access
        </Typography>
        <img
          src={
            'https://media.tenor.com/s7Tf_aL-Di0AAAAM/chipi-chipi-chapa-chapa.gif'
          }
          alt="Dancing Cat"
          style={{ borderRadius: '10px', marginBottom: '20px' }}
        />
        <Typography variant="body1" gutterBottom>
          Welcome to the authorized page.
        </Typography>
      </Paper>
    </Box>
  );
};

export default AuthorizedPage;

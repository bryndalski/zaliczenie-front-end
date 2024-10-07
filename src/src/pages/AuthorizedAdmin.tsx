import React from 'react';

import { Box, Paper, Typography } from '@mui/material';

export const AdminPage = () => {
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
          Main Page
        </Typography>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGiw-oVkJdu3X5FV1AifkCmRhawzHen3zTag&s"
          alt="Main Content"
          style={{
            borderRadius: '10px',
            marginBottom: '20px',
            maxWidth: '100%',
          }}
        />
      </Paper>
    </Box>
  );
};

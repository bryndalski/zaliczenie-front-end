import React from 'react';

import { Box, Typography } from '@mui/material';

import { useUserStore } from '../../../stores/useUserStore/useUserStore';

export const TokenDisplay = () => {
  const { token } = useUserStore();

  if (!token) {
    return null;
  }

  return (
    <Box
      sx={{
        marginTop: 2,
        padding: 2,
        border: '1px solid #ccc',
        borderRadius: 4,
        backgroundColor: '#f9f9f9',
      }}
    >
      <Typography variant="h6">Your Token:</Typography>
      <Typography variant="body1" sx={{ wordBreak: 'break-all' }}>
        {token}
      </Typography>
    </Box>
  );
};

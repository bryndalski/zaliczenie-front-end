import React, { useDebugValue, useState } from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';

import { Box, Button, Input, Typography } from '@mui/material';

import { useFakeAuth } from '../hooks/useFakeAuth';
import { User } from '../utils/User';
import { Jwt } from '../utils/jwt/Jwt';

export const LogIn = () => {
  const { signIn } = useFakeAuth();
  const [token, setToken] = useState('');

  const auth = useAuthUser();

  const handleSignIn = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    signIn(token);
  };

  // eslint-disable-next-line no-console
  useDebugValue(console.log({ auth }));

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        maxWidth: 500,
        margin: 'auto',
        padding: 4,
        border: '1px solid #ccc',
        borderRadius: 3,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        background: 'linear-gradient(135deg, #f9f9f9 0%, #e0e0e0 100%)',
        mt: 5,
        animation: 'fadeIn 1s ease-in-out',
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        Potrzebujemy token
      </Typography>
      <span>
        Poniewż generowanie tokenów możliwe jest do wykonania tylko na serwerze,
        zaimplementowano funkcję symulującą logowanie.
        <br />
        <a href={Jwt.url} target="_blank" rel="noreferrer">
          kliknij tutaj i wypełnij dane twojego tokena
        </a>
      </span>

      <span>Przykładowy token</span>
      <pre
        style={{
          background: '#f0f0f0',
          padding: '10px',
          borderRadius: '5px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        {JSON.stringify(Jwt.createPayload(User.createFakeUser()), null, 2)}
      </pre>

      <Input
        placeholder="Enter your token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        sx={{
          width: '100%',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        }}
      />
      <Button
        onClick={handleSignIn}
        variant="contained"
        color="primary"
        sx={{
          width: '100%',
          padding: '10px',
          borderRadius: '5px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
          color: '#fff',
          // eslint-disable-next-line @typescript-eslint/naming-convention
          '&:hover': {
            background: 'linear-gradient(135deg, #2575fc 0%, #6a11cb 100%)',
          },
        }}
      >
        Sign In
      </Button>
    </Box>
  );
};

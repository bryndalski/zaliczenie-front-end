import { decodeToken } from 'react-jwt';

import { useUserStore } from '../stores/useUserStore/useUserStore';
import { redirect } from 'react-router-dom';

export const useFakeAuth = () => {
  const { setTokenPayload, setIsLogged, setToken, setRefreshToken } =
    useUserStore();

  const signIn = async (
    email: string,
    password: string
  ) => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password
        }), // Replace with actual user data if needed
      });

      const data = (await response?.json()) as {
        accessToken: string;
        refreshToken: string;
      };

      if (data) {
        setRefreshToken(data?.refreshToken);
        setToken(data?.accessToken);

        const decoded = decodeToken(data.accessToken);

        if (decoded) {
          setTokenPayload(decoded);
          setIsLogged(true);
          window.location.href = '/';

        } else {
          alert('Invalid token');
        }
      }
    } catch (error: unknown) {
      if (error instanceof Error) alert(`Invalid token - error ${error}`);

      alert('Invalid token - unknown error');
    }
  };

  const signOut = () => {
    setTokenPayload(null);
    setIsLogged(false);
  };

  return {
    signIn,
    signOut,
  };
};

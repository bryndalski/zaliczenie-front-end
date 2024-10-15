import { decodeToken } from 'react-jwt';

import { useUserStore } from '../stores/useUserStore/useUserStore';

export const useFakeAuth = () => {
  const { setTokenPayload, setIsLogged, setToken, setRefreshToken } =
    useUserStore();

  const signIn = async () => {
    try {
      const response = await fetch('http://localhost:3000/token', {
        method: 'POST',
        headers: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: 'user' }), // Replace with actual user data if needed
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

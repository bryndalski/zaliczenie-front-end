import { decodeToken } from 'react-jwt';

import { useUserStore } from '../stores/useUserStore/useUserStore';

export const useFakeAuth = () => {
  const { setTokenPayload, setIsLogged } = useUserStore();

  const signIn = (accessToken: string) => {
    try {
      const decoded = decodeToken(accessToken);

      if (decoded) {
        setTokenPayload(decoded);
        setIsLogged(true);

        window.location.href = '/';
      } else {
        alert('Invalid token');
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

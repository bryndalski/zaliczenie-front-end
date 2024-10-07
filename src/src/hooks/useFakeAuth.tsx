import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { redirect } from 'react-router-dom';

import { User } from '../utils/User';

export const useFakeAuth = () => {
  const signInAuthKit = useSignIn();

  const signIn = (token: string) => {
    if (
      signInAuthKit({
        auth: {
          token: token,
          type: 'Bearer',
        },
        userState: {
          loggedIn: true,
          ...User.createFakeUser(),
        },
      })
    ) {
      redirect('/admin');
    } else {
      alert('invalid token');
    }
  };

  const signOut = () => {
    // Implement sign-out logic if needed
  };

  return {
    signIn,
    signOut,
  };
};

import useSignIn from 'react-auth-kit/hooks/useSignIn';

import { redirect } from 'react-router-dom';

export const useFakeAuth = () => {
  const signInAuthKit = useSignIn();


  const signIn = async (
    email: string,
    password: string
  ) => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data = (await response?.json()) as {
        accessToken: string;
        refreshToken: string;
      };

      console.log({ data });

      if (data) {

        console.log(data.accessToken);
        
        if (
          signInAuthKit({
            auth: {
              token: data.accessToken,
              type: 'Bearer'
            },
            userState: {
              loggedIn: true
            }
          })
        ) {
          console.log('redirecting');
          redirect('/');
        } else {
          alert('invalid token');
        }
      }
    } catch (error: unknown) {
      if (error instanceof Error) alert(`Invalid token - error ${error}`);

      alert('Invalid token - unknown error');
    }
  };

  const signOut = () => {

  };

  return {
    signIn,
    signOut
  };
};

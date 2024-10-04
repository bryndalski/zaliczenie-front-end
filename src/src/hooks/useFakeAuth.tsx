import { User } from '../utils/User';
import { useCreateInsecureToken } from './useCreateInsecureToken';

export const useFakeAuth = () => {
  const { signAccessToken } = useCreateInsecureToken();

  const singIn = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(signAccessToken(User.createFakeUser()));
      }, 1000);
    });
  };

  const signOut = () => {};

  return {
    singIn,
    signOut,
  };
};

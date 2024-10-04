import * as jwt from 'jsonwebtoken';

export const useCreateInsecureToken = () => {
  const signAccessToken = (payload: unknown) => {
    if (!payload) {
      throw new Error('Payload is required');
    }
    return {
      access_token: jwt.sign(payload, 'secret', { expiresIn: '1h' }),
    };
  };

  return {
    signAccessToken,
  };
};

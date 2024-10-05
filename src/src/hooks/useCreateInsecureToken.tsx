import { useState } from 'react';

import { Jwt } from '../utils/jwt/Jwt';

export const useCreateInsecureToken = () => {
  const [isLoading, setIsLoading] = useState(false);

  const signAccessToken = async (payload: unknown) => {
    if (!payload) {
      throw new Error('Payload is required');
    }

    setIsLoading(true);

    try {
      const response = await fetch(Jwt.url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Jwt.createPayload(payload)),
      });
      const data = await response.json();
      console.log(data);
      return {
        access_token: data,
      };
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }

    return null;
  };

  return {
    isLoading,
    signAccessToken,
  };
};

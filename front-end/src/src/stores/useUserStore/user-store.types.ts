export type UserStoreTypes = {
  setTokenPayload: (tokenPayload: any) => void;

  tokenPayload: any;

  isLogged: boolean;

  setIsLogged: (isLogged: boolean) => void;

  lodOut: () => void;

  token: string | null;

  setToken: (token: string) => void;

  refreshToken: string | null;

  setRefreshToken: (refreshToken: string) => void;
};

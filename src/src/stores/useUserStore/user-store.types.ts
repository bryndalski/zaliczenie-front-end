export type UserStoreTypes = {
  setTokenPayload: (tokenPayload: any) => void;

  tokenPayload: any;

  isLogged: boolean;

  setIsLogged: (isLogged: boolean) => void;

  lodOut: () => void;
};

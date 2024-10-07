import { useMemo } from 'react';

import { useUserStore } from '../../../stores/useUserStore/useUserStore';
import { ProtectedRouteType } from './ProtectedRoute.type';

export const useProtectedRoute = (props: ProtectedRouteType) => {
  const { isLogged, tokenPayload } = useUserStore();

  const canAccessProtectedRoute = useMemo(() => {
    if (props.requireLogin) {
      return !isLogged;
    }

    if (props.unprotectedRoute) {
      return true;
    }

    if (!tokenPayload || !props?.allowedRoles) {
      return false;
    }

    if (!('Role' in tokenPayload)) {
      return false;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return props.allowedRoles.includes(tokenPayload.Role);
  }, [
    props.allowedRoles,
    tokenPayload,
    props.unprotectedRoute,
    props.requireLogin,
  ]);

  return {
    isLoggedIn: isLogged,
    canAccessProtectedRoute,
  };
};

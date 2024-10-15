import React from 'react';
import { Outlet, redirect } from 'react-router-dom';

import { Unauthorized } from '../../../pages/Unauthorized';
import { ProtectedRouteWithChildren } from './ProtectedRoute.type';
import { useProtectedRoute } from './useProtectedRoute';

export const ProtectedRoute = (props: ProtectedRouteWithChildren) => {
  const { isLoggedIn, canAccessProtectedRoute } = useProtectedRoute(props);

  if (!isLoggedIn) {
    if (canAccessProtectedRoute) {
      return props.children ? <>{props.children}</> : <Outlet />;
    }
    redirect('/login');
  }

  if (!canAccessProtectedRoute) {
    return <Unauthorized />;
  }

  return props.children ? <>{props.children}</> : <Outlet />;
};

import React from 'react';
import { Outlet, redirect } from 'react-router-dom';
import { ProtectedRouteWithChildren } from './ProtectedRoute.type';
import { useUserStore } from '../../../stores/useUserStore/useUserStore';

export const ProtectedRoute = (props: ProtectedRouteWithChildren) => {
  const { isLogged: isUserLoddegIn } = useUserStore();

  console.log('isLoggedIn', isUserLoddegIn);

  console.log('props', props);

  if (!isUserLoddegIn) {
    redirect('/login');
  }


  return props.children ? <>{props.children}</> : <Outlet />;
};

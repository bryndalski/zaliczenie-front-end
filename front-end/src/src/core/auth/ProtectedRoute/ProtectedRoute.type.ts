import { ReactNode } from 'react';

import { UserRoles } from '../../../utils/User';

export type ProtectedRouteType = {


  /**
   * Defines if route needs authentication
   * @default false
   */
  unprotectedRoute?: boolean;

  /**
   * Defines if route needs authentication
   * @default true
   *
   */
  requireLogin?: boolean;
};

export type ProtectedRouteWithChildren = {
  children: ReactNode;
} & ProtectedRouteType;

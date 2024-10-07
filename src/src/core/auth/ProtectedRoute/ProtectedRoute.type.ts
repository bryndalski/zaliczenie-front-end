import { ReactNode } from 'react';

import { UserRoles } from '../../../utils/User';

export type ProtectedRouteType = {
  /**
   * Allowed roles to access the route
   * @default [] - rejects all roles
   */
  allowedRoles?: UserRoles[];

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

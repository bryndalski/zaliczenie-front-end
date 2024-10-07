// src/App.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ProtectedRoute } from './src/core/auth/ProtectedRoute/ProtectedRoute';
import AuthorizedPage from './src/pages/AuhtorizedPage';
import { LogIn } from './src/pages/LogIn';
import { UserRoles } from './src/utils/User';

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute allowedRoles={[UserRoles.ADMIN, UserRoles.USER]}>
            <AuthorizedPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/login"
        element={
          <ProtectedRoute unprotectedRoute={true}>
            <LogIn />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

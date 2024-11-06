import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ProtectedRoute } from './src/core/auth/ProtectedRoute/ProtectedRoute';
import AuthorizedPage from './src/pages/AuhtorizedPage';
import LogIn from './src/pages/LogIn';

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute >
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

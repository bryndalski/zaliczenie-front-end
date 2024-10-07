import AuthOutlet from '@auth-kit/react-router/AuthOutlet';
import { Route, Routes } from 'react-router-dom';

import { AdminPage } from './src/pages/AuthorizedAdmin';
import { LogIn } from './src/pages/LogIn';

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route element={<AuthOutlet fallbackPath="/login" />}>
        <Route path="/admin" element={<AdminPage />} />
      </Route>
    </Routes>
  );
};

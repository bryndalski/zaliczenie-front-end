import AuthOutlet from '@auth-kit/react-router/AuthOutlet';
import { Route, Routes } from 'react-router-dom';
import LogIn from './src/pages/LogIn';
import { LoggedIn } from './src/pages/LoggedIn';


export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route element={<AuthOutlet fallbackPath="/login" />}>
        <Route path="/" element={<LoggedIn />} />
      </Route>
    </Routes>
  );
};
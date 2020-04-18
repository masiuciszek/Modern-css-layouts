import * as React from 'react';
import { TwoColGrid } from '../components/layout/Wrapper';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

interface Props {

}

const AuthPage: React.FC<Props> = () => (
  <TwoColGrid>
    <Login />
    <Register />
  </TwoColGrid>
);
export default AuthPage;

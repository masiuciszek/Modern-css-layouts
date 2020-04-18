import * as React from 'react';
import { TwoColGrid } from '../components/layout/Wrapper';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import Title from '../components/layout/title/Title';

interface Props {

}

const AuthPage: React.FC<Props> = () => (
  <>
    <Title title="Login or Register" />
    <TwoColGrid>
      <Login />
      <Register />
    </TwoColGrid>
  </>
);
export default AuthPage;

/* eslint-disable import/extensions */
import * as React from 'react';
import { TwoColGrid } from '../components/layout/Wrapper';
// import Login from '../components/auth/Login';
// import Register from '../components/auth/Register';
import Title from '../components/layout/title/Title';


const Login = React.lazy(() => import('../components/auth/Login'));
const Register = React.lazy(() => import('../components/auth/Register'));
interface Props {

}

const AuthPage: React.FC<Props> = () => (
  <>
    <Title title="Login or Register" />
    <React.Suspense fallback={<h3>...Loading</h3>}>
      <TwoColGrid>
        <Login />
        <Register />
      </TwoColGrid>
    </React.Suspense>
  </>
);
export default AuthPage;

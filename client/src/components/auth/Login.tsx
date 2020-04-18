import * as React from 'react';
import { AuthWrapper } from './Styled.Auth';
import useForm from '../../hooks/useForm';

interface Props {

}

const Login: React.FC<Props> = () => {
  const [formData, setformData] = React.useState();

  return (
    <AuthWrapper>
      {' '}
      <h1> Login </h1>
      {' '}
    </AuthWrapper>
  );
};
export default Login;

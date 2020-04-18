/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/extensions */
import * as React from 'react';
import { AuthWrapper } from './Styled.Auth';
import useForm from '../../hooks/useForm';
import {
  Form, FormGroup, FormLabel, Input,
} from '../layout/Form';
import { Btn } from '../layout/Buttons';

interface Props {

}

const Login: React.FC<Props> = () => {
  const { handleChange, handleSubmit, formData } = useForm(submit, validate);
  function submit(): void {
    console.log('login');
  }
  function validate(): void {
    console.log('validate');
  }

  const { email, password } = formData;

  return (
    <AuthWrapper>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>
            <span>Email</span>
            <Input type="email" placeholder="email" name="email" value={email} onChange={handleChange} />
          </FormLabel>
          <FormLabel>
            <span>Password</span>
            <Input type="password" placeholder="password" name="password" value={password} onChange={handleChange} />
          </FormLabel>
        </FormGroup>
        <Btn type="submit">Login</Btn>
      </Form>
    </AuthWrapper>
  );
};
export default Login;

/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/extensions */
import * as React from 'react';
import { AuthWrapper } from './Styled.Auth';
import useForm from '../../hooks/useForm';
import {
  Form, FormGroup, FormLabel, Input, ErrorMessage,
} from '../layout/Form';
import { Btn } from '../layout/Buttons';
import validate from '../../utils/validate';

interface Props {

}

const Login: React.FC<Props> = () => {
  const {
    handleChange, handleSubmit, formData, errors,
  } = useForm(submit, validate);


  function submit(): void {
    console.log('login');
  }

  const { email, password } = formData;

  console.log('ERRORS', errors);


  return (
    <AuthWrapper>
      <Form onSubmit={handleSubmit} noValidate>
        <FormGroup>
          <FormLabel error={errors && errors.emailError}>
            <span>Email</span>
            <Input type="email" placeholder="email" name="email" value={email} onChange={handleChange} />
            {errors && errors.emailError && (
              <ErrorMessage>
                {' '}
                {errors.emailError}
                {' '}
              </ErrorMessage>
            ) }
          </FormLabel>
        </FormGroup>


        <FormGroup>
          <FormLabel error={errors && errors.passwordError}>
            <span>Password</span>
            <Input type="password" placeholder="password" name="password" value={password} onChange={handleChange} />
            {errors && errors.passwordError && (
              <ErrorMessage>
                {' '}
                {errors.passwordError}
                {' '}
              </ErrorMessage>
            ) }
          </FormLabel>
        </FormGroup>


        <Btn type="submit">Login</Btn>
      </Form>
    </AuthWrapper>
  );
};
export default Login;

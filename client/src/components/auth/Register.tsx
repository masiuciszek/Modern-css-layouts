/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/extensions */
import * as React from 'react';
import { AuthWrapper } from './Styled.Auth';
import {
  Form, FormGroup, FormLabel, Input, ErrorMessage,
} from '../layout/Form';
import useForm from '../../hooks/useForm';
import { Btn } from '../layout/Buttons';
import validate from '../../utils/validate';

interface Props {

}

const Register: React.FC<Props> = () => {
  const {
    handleChange, handleSubmit, formData, errors,
  } = useForm(submit, validate);

  function submit(): void {
    console.log('register');
  }

  const { email, password, username } = formData;


  return (
    <AuthWrapper>
      <Form onSubmit={handleSubmit}>
        <FormGroup error={errors && errors.usernameError}>
          <FormLabel>
            <span>username</span>
            <Input type="text" name="username" onChange={handleChange} value={username} placeholder="username" />
            {errors && errors.usernameError && (
              <ErrorMessage>
                {' '}
                {errors.usernameError}
                {' '}
              </ErrorMessage>
            ) }
          </FormLabel>
        </FormGroup>

        <FormGroup error={errors && errors.emailError}>
          <FormLabel>
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

        <FormGroup error={errors && errors.passwordError}>
          <FormLabel>
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


        <Btn type="submit"> Register </Btn>
      </Form>
    </AuthWrapper>
  );
};
export default Register;

/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/extensions */
import * as React from 'react';
import { connect } from 'react-redux';
import { AuthWrapper } from './Styled.Auth';
import {
  Form, FormGroup, FormLabel, Input, ErrorMessage,
} from '../layout/Form';
import useForm from '../../hooks/useForm';
import { Btn } from '../layout/Buttons';
import validate from '../../utils/validate';
import { registerUser } from '../../redux/auth/auth.actions';
import { IRegisterData } from '../../redux/auth/auth.types';


interface Props {
  registerUser: (formData: IRegisterData) => Promise<void>;

}

const Register: React.FC<Props> = ({ registerUser }) => {
  const {
    handleChange, handleSubmit, formData, errors,
  } = useForm(submit, validate);

  const { email, password, username } = formData;


  function submit(): void {
    const newUser: IRegisterData = { username, email, password };
    registerUser(newUser);
  }


  return (
    <AuthWrapper>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel error={errors && errors.usernameError}>
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


        <Btn type="submit"> Register </Btn>
      </Form>
    </AuthWrapper>
  );
};


export default connect(null, { registerUser })(Register);

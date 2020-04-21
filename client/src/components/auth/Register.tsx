/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/extensions */
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import * as H from 'history';
import { AuthWrapper } from './Styled.Auth';
import {
  Form, FormGroup, FormLabel, Input, ErrorMessage,
} from '../layout/Form';
import useForm from '../../hooks/useForm';
import { Btn } from '../layout/Buttons';
import validate from '../../utils/validate';
import { registerUser } from '../../redux/auth/auth.actions';
import { IRegisterData } from '../../redux/auth/auth.types';
import { AppState } from '../../redux';
import { selectIsLoggedIn } from '../../redux/auth/auth.selector';

interface Props extends RouteComponentProps {
  registerUser: (formData: IRegisterData) => Promise<void>;
  isLoggedIn: boolean;
  history: H.History<any>;

}

const Register: React.FC<Props> = ({
  registerUser, isLoggedIn, history,
}) => {
  const {
    handleChange, handleSubmit, formData, errors,
  } = useForm(submit, validate);

  const { email, password, username } = formData;


  async function submit(): Promise<void> {
    const newUser: IRegisterData = { username, email, password };
    await registerUser(newUser);
  }


  React.useEffect(() => {
    if (isLoggedIn) {
      history.push('/');
    }
  }, [history, errors, isLoggedIn]);


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

const mapStateToProps = (state: AppState) => ({
  isLoggedIn: selectIsLoggedIn(state),
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));

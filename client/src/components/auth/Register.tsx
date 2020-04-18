import * as React from 'react';
import { AuthWrapper } from './Styled.Auth';
import {
  Form, FormGroup, FormLabel, Input,
} from '../layout/Form';
import useForm from '../../hooks/useForm';
import { Btn } from '../layout/Buttons';

interface Props {

}

const Register: React.FC<Props> = () => {
  const { handleChange, handleSubmit, formData } = useForm(submit, validate);

  function submit(): void {
    console.log('register');
  }
  function validate(): void {
    console.log('validate');
  }
  const { email, password, username } = formData;


  return (
    <AuthWrapper>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>
            <span>username</span>
            <Input type="text" name="username" onChange={handleChange} value={username} placeholder="username" />
          </FormLabel>
        </FormGroup>

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
        <Btn type="submit"> Register </Btn>
      </Form>
    </AuthWrapper>
  );
};
export default Register;

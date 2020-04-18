/* eslint-disable no-useless-escape */

const validate = (values: IFormData): IErrors => {
  const errors: IErrors = {};
  const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!values.username) {
    errors.usernameError = 'please enter a username';
  } else if (values.username.length < 5) {
    errors.usernameError = 'please enter a username with a min length of 5 chars';
  }


  if (!values.email) {
    errors.emailError = 'please enter a valid email address';
  } else if (!regex.test(values.email)) {
    errors.emailError = 'please enter a valid email format';
  }

  if (!values.password) {
    errors.passwordError = 'Please provide a password';
  } else if (values.password.length < 5) {
    errors.passwordError = 'has to be min 5 chars long';
  }


  return errors;
};


export default validate;

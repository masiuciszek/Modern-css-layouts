interface ILoginData {
  email: string;
  password: string;
}
interface IRegisterData {
  username: string;
  email: string;
  password: string;
}

interface IFormData{
  username: string;
  email: string;
  password: string;
}
interface IErrors {
  usernameError?: string;
  emailError?: string;
  passwordError?: string;
}


type ValidateFn = (values: IFormData) => IErrors

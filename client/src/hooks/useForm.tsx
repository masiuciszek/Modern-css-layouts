/* eslint-disable @typescript-eslint/interface-name-prefix */
import { useState } from 'react';

export interface ILoginData {
  email: string;
  password: string;
}
export interface IRegisterData {
  username: string;
  email: string;
  password: string;
}

export interface IFormData{
  username: string;
  email: string;
  password: string;
}

export default (
  callback: Function, validate: Function,
) => {
  const [formData, setFormData] = useState<IFormData>({
    email: '',
    password: '',
    username: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    callback();
    validate();
    // TODO: DELETE
    console.log(formData);
    setFormData({
      email: '',
      password: '',
      username: '',
    });
  };

  return {
    handleChange,
    handleSubmit,
    formData,
  };
};

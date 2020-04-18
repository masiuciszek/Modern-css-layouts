/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react';

export default (callback: Function, validate: Function) => {
  const [formData, setFormData] = React.useState<IFormData>({
    email: '',
    password: '',
    username: '',
  });
  const [errors, setErrors] = React.useState<IErrors | Record<string, any> >({});
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setErrors(validate(formData));

    setIsSubmitting(true);
    callback();


    // setFormData({
    //   email: '',
    //   password: '',
    //   username: '',
    // });
  };

  React.useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);


  return {
    handleChange,
    handleSubmit,
    errors,
    formData,
  };
};

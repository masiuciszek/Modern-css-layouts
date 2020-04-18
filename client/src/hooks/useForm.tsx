/* eslint-disable @typescript-eslint/interface-name-prefix */
import React, { useState } from 'react';

export interface ILoginData {
  email: string;
  password: string;
}
export interface IRegisterData {
  username: string;
  email: string;
  password: string;
}

export default (callback: Function, validate: Function, initialValues: ILoginData|IRegisterData) => {
  const [state, setState] = useState<ILoginData|IRegisterData>(initialValues);
};

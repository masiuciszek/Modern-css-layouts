/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import { Dispatch } from 'react';
import {
  AuthActionTypes, IRegisterSuccessAction, IErrorAction, IRegisterData, ILoadUserAction,
} from './auth.types';


export const loadUser = () => async (dispatch: Dispatch<ILoadUserAction | IErrorAction>) => {
  // load token into global headers
  // sending to get me
  try {
    const response = await fetch('/api/users/me');
    const data = await response.json();

    dispatch({
      type: AuthActionTypes.LOAD_USER,
      payload: data.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: AuthActionTypes.AUTH_ERROR, payload: err });
  }
};

export const registerUser = (formData: IRegisterData) => async (dispatch: Dispatch<IRegisterSuccessAction | IErrorAction>) => {
  try {
    const response = await fetch('/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    dispatch({
      type: AuthActionTypes.REGISTER_SUCCESS,
      payload: data.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: AuthActionTypes.REGISTER_FAIL,
      payload: err,
    });
  }
};

export const apa = () => {

};

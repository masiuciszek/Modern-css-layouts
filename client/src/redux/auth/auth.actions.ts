/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import { Dispatch } from 'react';
import axios from 'axios';
import {
  AuthActionTypes, IRegisterSuccessAction, IErrorAction, IRegisterData, ILoadUserAction,
} from './auth.types';
import setAuthToken from '../../utils/setAuthToke';


export const loadUser = () => async (dispatch: Dispatch<ILoadUserAction | IErrorAction>) => {
  // load token into global headers
  // sending to get me
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const response = await axios({
      url: '/api/users/me',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    });


    dispatch({
      type: AuthActionTypes.LOAD_USER,
      payload: response.data.data,
    });
    // console.log('LOAD USER', response.data);
  } catch (err) {
    console.log(err);
    dispatch({ type: AuthActionTypes.AUTH_ERROR, payload: err });
  }
};

export const registerUser = (
  formData: IRegisterData,
) => async (dispatch: Dispatch<IRegisterSuccessAction | IErrorAction>) => {
  try {
    const response = await axios({
      url: '/api/users/register',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: formData,
    });

    console.log('register user REDUX ', response.data);


    dispatch({
      type: AuthActionTypes.REGISTER_SUCCESS,
      payload: response.data,
    });

    loadUser();
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

/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import { IAuthState, AuthActionTypes, AuthTypesReducer } from './auth.types';

const initialState: IAuthState = {
  token: localStorage.getItem('token'),
  isLoading: true,
  user: null,
  isLoggedIn: false,
  errors: null,
};

export default (state: IAuthState = initialState, action: AuthTypesReducer) => {
  switch (action.type) {
    case AuthActionTypes.LOAD_USER:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        loading: false,
      };


    case AuthActionTypes.LOGIN_SUCCESS:
    case AuthActionTypes.REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
        loading: false,
      };


    case AuthActionTypes.REGISTER_FAIL:
    case AuthActionTypes.AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
        user: null,
        errors: action.payload,
      };

    case AuthActionTypes.CLEAR_ERRORS:
      return {
        ...state,
        errors: null,
      };
    default:
      return state;
  }
};

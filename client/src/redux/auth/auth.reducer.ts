/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import { IAuthState, AuthActionTypes, AuthTypesReducer } from './auth.types';

const initialState: IAuthState = {
  token: localStorage.getItem('token'),
  isLoading: true,
  auth: null,
  isLoggedIn: false,
  errors: null,
};

export default (state: IAuthState = initialState, action: AuthTypesReducer) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS:
    case AuthActionTypes.REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
      };

    case AuthActionTypes.LOGOUT_SUCCESS:
      localStorage.removeItem('token');
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
        auth: null,
      };
    default:
      return state;
  }
};

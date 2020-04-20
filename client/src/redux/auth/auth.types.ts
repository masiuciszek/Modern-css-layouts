/* eslint-disable @typescript-eslint/interface-name-prefix */
export interface IAuth{
  _id: string;
  role: string;
  token: string;
  username: string;
  email: string;
  password: string;
  created_at: Date;
}

export interface IAuthError {
  msg: string | null;
  type: string | null;
}


export interface IAuthState{
  isLoading: boolean;
  user: IAuth | null;
  token: string | null;
  isLoggedIn: boolean;
  errors: null | Record<string, any>;
}


export interface IRegisterData {
  username: string;
  email: string;
  password: string;
}


export enum AuthActionTypes {
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAIL = 'LOGIN_FAIL',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_FAIL = 'REGISTER_FAIL',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  AUTH_ERROR = 'AUTH_ERROR',
  LOAD_USER = 'LOAD_USER',
  CLEAR_ERRORS='CLEAR_ERRORS'
}

export interface ILoginSuccessAction {
  type: AuthActionTypes.LOGIN_SUCCESS;
  payload: IAuth;
}

export interface IRegisterSuccessAction {
  type: AuthActionTypes.REGISTER_SUCCESS;
  payload: IAuth;
}

export interface ILogoutSuccessAction {
  type: AuthActionTypes.LOGOUT_SUCCESS;
}
export interface ILoadUserAction {
  type: AuthActionTypes.LOAD_USER;
  payload: IAuth;
}

export interface IErrorAction {
  type: AuthActionTypes.AUTH_ERROR | AuthActionTypes.LOGIN_FAIL | AuthActionTypes.REGISTER_FAIL;
  payload: Record<string, any>;
}
export interface IClearErrors {
  type: AuthActionTypes.CLEAR_ERRORS;
}

export type AuthTypesReducer =
ILoginSuccessAction |
IRegisterSuccessAction |
IErrorAction |
ILogoutSuccessAction |
ILoadUserAction |
IClearErrors

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
  auth: IAuth | null;
  token: string | null;
  isLoggedIn: boolean;
  errors: null | Record<string, any>;
}


export enum AuthActionTypes {
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAIL = 'LOGIN_FAIL',
  REGISTER_SUCCESS = 'REGISTER_SUCCESS',
  REGISTER_FAIL = 'REGISTER_FAIL',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  ERROR = 'ERROR',
}

interface ILoginSuccessAction {
  type: AuthActionTypes.LOGIN_SUCCESS;
  payload: IAuth;
}

interface IRegisterSuccessAction {
  type: AuthActionTypes.REGISTER_SUCCESS;
  payload: IAuth;
}

interface ILogoutSuccessAction {
  type: AuthActionTypes.LOGOUT_SUCCESS;
}

interface IErrorAction {
  type: AuthActionTypes.ERROR;
  payload: IAuthError;
}

export type AuthTypesReducer = ILoginSuccessAction | IRegisterSuccessAction | IErrorAction | ILogoutSuccessAction

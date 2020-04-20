import { createSelector } from 'reselect';
import { AppState } from '..';
import { IAuthState } from './auth.types';


const authState = (state: AppState) => state.auth;


export const selectAuthLoading = createSelector(
  [authState],
  (state: IAuthState) => state.isLoading,
);

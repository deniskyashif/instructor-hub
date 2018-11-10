import { AuthActionsUnion, AuthActionTypes } from './auth.actions';
import { User } from '../models/user.model';
import * as fromRoot from './../../core/state/app.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface AuthState {
  readonly isLoggedIn: boolean;
  readonly currentUser: User;
  readonly loginPending: boolean;
  readonly errorMessage: string;
}

export interface State extends fromRoot.State {
  readonly auth: AuthState;
}

const initialState: AuthState = {
  isLoggedIn: false,
  currentUser: null,
  loginPending: false,
  errorMessage: ''
};

export function authReducer(state: AuthState = initialState, action: AuthActionsUnion) {
  switch (action.type) {
    case AuthActionTypes.Login:
      return {
        ...state,
        loginPending: true,
        errorMessage: ''
      };
    case AuthActionTypes.LoginSuccess:
      return {
        isLoggedIn: true,
        currentUser: action.payload,
        loginPending: false,
        errorMessage: ''
      };
    case AuthActionTypes.LoginFailure:
      return {
        ...state,
        loginPending: false,
        errorMessage: action.payload
      };
    case AuthActionTypes.Logout:
      return {
        ...state,
        isLoggedIn: false,
        currentUser: null
      };
    default:
      return state;
  }
}

export const getAuthState = createFeatureSelector<State, AuthState>('auth');
export const getIsLoggedIn = createSelector(getAuthState, s => s.isLoggedIn);
export const getLoginPending = createSelector(getAuthState, s => s.loginPending);
export const getErrorMessage = createSelector(getAuthState, s => s.errorMessage);
export const getCurrentUser = createSelector(getAuthState, s => s.currentUser);
export const getCurrentUserName = createSelector(getCurrentUser, u => u ? u.username : '');

import { Action } from '@ngrx/store';
import { User } from '../models/user.model';
import { Auth } from '../models/auth.model';

export enum AuthActionTypes {
  Login = '[AUTH] Login',
  LoginSuccess = '[AUTH] LoginSuccess',
  LoginFailure = '[AUTH] LoginFailure',
  LoginRedirect = '[AUTH] LoginRedirect',
  Logout = '[AUTH] Logout'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: Auth) { }
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload: User) {}
}

export class LoginRedirect implements Action {
  readonly type = AuthActionTypes.LoginRedirect;

  constructor() { }
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;

  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;

  constructor() { }
}

export type AuthActionsUnion = Login | LoginSuccess | LoginRedirect | LoginFailure | Logout;

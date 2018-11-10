import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { AuthApiService } from "../services/auth.api.service";
import { Router } from "@angular/router";
import { AuthActionTypes, Login, LoginSuccess, LoginFailure, LoginRedirect } from "../state/auth.actions";
import { map, exhaustMap, catchError, tap } from "rxjs/operators";
import { Auth } from "../models/auth.model";
import { of } from "rxjs";


@Injectable()
export class AuthEffects {

  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    map(action => action.payload),
    exhaustMap((auth: Auth) =>
      this.authService.login(auth).pipe(
        map(user => new LoginSuccess({ username: auth.username })),
        catchError(err => of(new LoginFailure(err)))
      )));

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    tap(() => this.router.navigate(['/'])));

  @Effect({ dispatch: false })
  LoginRedirect$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginRedirect, AuthActionTypes.Logout),
    tap(authenticated => this.router.navigate(['/login'])));

  constructor(private actions$: Actions,
    private authService: AuthApiService,
    private router: Router
    ) { }
}

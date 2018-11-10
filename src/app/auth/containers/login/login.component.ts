import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../state/auth.reducer';
import * as AuthActions from './../../state/auth.actions';
import { Auth } from '../../models/auth.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  loginPending$: Observable<boolean>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<fromAuth.State>) {
    this.loginPending$ = this.store.select(fromAuth.getLoginPending);
    this.errorMessage$ = this.store.select(fromAuth.getErrorMessage);
  }

  loginSubmit(credentials: Auth) {
    this.store.dispatch(new AuthActions.Login(credentials));
  }
}

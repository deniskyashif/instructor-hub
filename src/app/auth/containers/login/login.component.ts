import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../state/auth.reducer';
import * as AuthActions from './../../state/auth.actions';
import { Auth } from '../../models/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private store: Store<fromAuth.State>) { }

  loginSubmit(credentials: Auth) {
    const user = { username: credentials.username };
    this.store.dispatch(new AuthActions.Login(credentials));
  }
}

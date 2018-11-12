import { Component, OnInit } from '@angular/core';
import { Auth } from '../../models/auth.model';
import { Observable } from 'rxjs';
import { AuthFacade } from '../../facade/auth.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  loginPending$: Observable<boolean>;
  errorMessage$: Observable<string>;

  constructor(private auth: AuthFacade) {
    this.loginPending$ = this.auth.getLoginPending();
    this.errorMessage$ = this.auth.getLoginErrorMessage();
  }

  loginSubmit(credentials: Auth) {
    this.auth.login(credentials);
  }
}

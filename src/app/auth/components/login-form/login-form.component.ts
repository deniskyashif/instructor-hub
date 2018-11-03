import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../state/auth.reducer';
import * as AuthActions from './../../state/auth.actions';
import { Auth } from '../../models/auth.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  @Output()
  submit = new EventEmitter<Auth>();

  constructor(private store: Store<fromAuth.State>) { }

  loginClick(username: string, password: string) {
    this.submit.emit({ username, password });
  }
}

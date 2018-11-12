import { Component, OnInit, EventEmitter, Output, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../state/auth.reducer';
import { Auth } from '../../models/auth.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {

  @Input()
  loginPending: boolean;

  @Input()
  errorMessage: string;

  @Output()
  submit = new EventEmitter<Auth>();

  constructor(private store: Store<fromAuth.State>) { }

  loginClick(username: string, password: string) {
    this.submit.emit({ username, password });
  }
}

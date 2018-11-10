import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromRoot from './../../state/app.reducers';
import * as fromAuth from './../../../auth/state/auth.reducer';
import * as AuthActions from './../../../auth/state/auth.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

  title = "Instructor Hub";

  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.isLoggedIn$ = this.store.select(fromAuth.getIsLoggedIn);
  }

  logout() {
    this.store.dispatch(new AuthActions.Logout());
  }
}

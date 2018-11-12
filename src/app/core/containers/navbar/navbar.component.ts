import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromRoot from './../../state/app.reducers';
import * as fromAuth from './../../../auth/state/auth.reducer';
import * as AuthActions from './../../../auth/state/auth.actions';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

  title = 'Instructor Hub';

  isLoggedIn$: Observable<boolean>;
  currentUserName$: Observable<string>;

  constructor(private store: Store<fromRoot.State>) {
    this.isLoggedIn$ = this.store.pipe(select(fromAuth.getIsLoggedIn));
    this.currentUserName$ = this.store.pipe(select(fromAuth.getCurrentUserName));
  }

  logout() {
    this.store.dispatch(new AuthActions.Logout());
  }
}

import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import * as fromAuth from './../state/auth.reducer';
import * as AuthActions from './../state/auth.actions';
import { Auth } from './../models/auth.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthFacade {
  constructor(private store: Store<fromAuth.State>) { }

  login(credentials: Auth) {
    this.store.dispatch(new AuthActions.Login(credentials));
  }

  getLoginPending() {
    return this.store.select(fromAuth.getLoginPending);
  }

  getLoginErrorMessage() : Observable<string> {
    return this.store.select(fromAuth.getErrorMessage);
  }
}

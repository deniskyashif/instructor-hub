import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import * as fromAuth from '../state/auth.reducer';
import { Store, select } from '@ngrx/store';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';
import { LoginRedirect } from '../state/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromAuth.State>) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.store.pipe(
        select(fromAuth.getIsLoggedIn),
        map(isLoggedIn => {
          if (!isLoggedIn) {
            this.store.dispatch(new LoginRedirect());
            return false;
          }
          return true;
        }));
  }
}

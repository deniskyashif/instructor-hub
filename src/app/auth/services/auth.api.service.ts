import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { User } from '../models/user.model';
import { Auth } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor() { }

  login(credentials: Auth) : Observable<User> {
    if(!(credentials.username && credentials.password)) {
      return throwError('Invalid login credentials.');
    }

    return of({ username: credentials.username });
  }

  logout() {
    return of(true);
  }
}

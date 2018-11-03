import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor() { }

  login(username: string, password: string) : Observable<User> {
    if(!(username && password)) {
      return throwError('Invalid login credentials.');
    }

    return of({ username });
  }

  logout() {
    return of(true);
  }
}

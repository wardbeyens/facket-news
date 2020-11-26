import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { User } from '../../shared/models/user.model';

import { map, distinctUntilChanged } from 'rxjs/operators';
import { JwtService } from './jwt.service';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(private ApiService: ApiService, private jwtService: JwtService) {}

  populate() {
    if (this.jwtService.getToken()) {
      this.ApiService.get('/user').subscribe(
        (data) => this.setAuth(data.user),
        (err) => this.purgeAuth()
      );
    } else {
      this.purgeAuth();
    }
  }

  setAuth(user: User) {
    this.jwtService.saveToken(user.token);
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next({} as User);
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }

  attemptAuth(type, credentials): Observable<User> {
    const route = type === 'login' ? '/login' : '';
    return this.ApiService.post('/users' + route, { user: credentials }).pipe(
      map((data) => {
        this.setAuth(data.user);
        return data;
      })
    );
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  update(user): Observable<User> {
    return this.ApiService.put('/user', { user }).pipe(
      map((data) => {
        this.currentUserSubject.next(data.user);
        return data.user;
      })
    );
  }
}
